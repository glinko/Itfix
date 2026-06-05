import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { sendLeadNotification } from '@/lib/telegram';

// In-memory rate limiter: max 5 requests per IP per 60 seconds
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 1000;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  // Remove expired entries
  const valid = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  if (valid.length >= RATE_LIMIT_MAX) {
    rateLimitMap.set(ip, valid);
    return false;
  }
  valid.push(now);
  rateLimitMap.set(ip, valid);
  return true;
}

function getClientIP(req: NextRequest): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    'localhost'
  );
}

export async function POST(req: NextRequest) {
  // Rate limiting
  const ip = getClientIP(req);
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { success: false, error: 'Too many requests. Please try again later.' },
      { status: 429 },
    );
  }

  let body: {
    name?: string;
    email?: string;
    phone?: string;
    service?: string;
    message?: string;
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, error: 'Invalid JSON body.' },
      { status: 400 },
    );
  }

  // Validate required fields
  const { name, email, phone, service, message } = body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { success: false, error: 'Name, email, and message are required.' },
      { status: 400 },
    );
  }

  // Basic email format check
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { success: false, error: 'Please enter a valid email address.' },
      { status: 400 },
    );
  }

  // Build lead data for both Supabase and Telegram
  const leadData = {
    name: name.trim(),
    email: email.trim(),
    phone: phone?.trim() || null,
    service: service?.trim() || null,
    message: message.trim(),
  };
  const timestamp = new Date().toISOString();

  // Run Supabase insert and Telegram notification in parallel
  const supabaseInsert = supabase
    ? (async () => {
        const { error } = await supabase.from('contact_submissions').insert({
          ...leadData,
          source: 'Website',
          status: 'New Lead',
        });
        if (error) {
          console.error('Supabase insert error:', error);
          throw new Error('Supabase insert failed');
        }
      })()
    : Promise.resolve();

  const telegramNotify = sendLeadNotification({
    ...leadData,
    timestamp,
  });

  const results = await Promise.allSettled([supabaseInsert, telegramNotify]);

  // Check if Supabase failed (it's the primary store)
  const supabaseResult = results[0];
  if (supabaseResult.status === 'rejected') {
    return NextResponse.json(
      { success: false, error: 'Failed to save your message. Please try again.' },
      { status: 500 },
    );
  }

  // Log Telegram failure for debugging but don't block the response
  const telegramResult = results[1];
  if (telegramResult.status === 'rejected') {
    console.error('Telegram notification failed:', telegramResult.reason);
  }

  return NextResponse.json({ success: true });
}
