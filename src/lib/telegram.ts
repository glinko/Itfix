/**
 * Sends lead notifications to Telegram via the Bot API.
 * Gracefully degrades if env vars are missing or the API call fails.
 */

interface LeadData {
  name: string;
  email: string;
  phone: string | null;
  service: string | null;
  message: string;
  timestamp: string;
}

/**
 * Escape all MarkdownV2 special characters so the message is valid.
 * Covers: [ ] _ * ~ ` > ( # ) ( . ) ( ! ) : # - + = | { } . !
 */
function escapeMarkdownV2(text: string): string {
  // Escape all MarkdownV2 special characters: _ * [ ] ~ ` > # ( ) ! : - + = | { } .
  // Using a simple string split + join trick to avoid regex character class range issues
  // Escape backslash first, then all other MarkdownV2 special characters
  let result = text.replace(/\\/g, '\\\\');
  const specials = ['_', '*', '[', ']', '~', '`', '>', '#', '(', ')', '!', ':', '-', '+', '=', '|', '{', '}', '.'];
  for (const ch of specials) {
    result = result.replace(new RegExp(ch, 'g'), `\\${ch}`);
  }
  return result;
}

export async function sendLeadNotification(lead: LeadData): Promise<void> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_LEAD_CHAT_ID;

  if (!token || !chatId) {
    // Silently degrade — Telegram not configured
    return;
  }

  const { name, email, phone, service, message, timestamp } = lead;

  const text = [
    `🔔 *[${escapeMarkdownV2('Новый лид — ITfix')}]*`,
    ``,
    `*${escapeMarkdownV2('Имя')}*: ${escapeMarkdownV2(name)}`,
    `*${escapeMarkdownV2('Email')}*: ${escapeMarkdownV2(email)}`,
    `*${escapeMarkdownV2('Телефон')}*: ${escapeMarkdownV2(phone || '—')}`,
    `*${escapeMarkdownV2('Услуга')}*: ${escapeMarkdownV2(service || '—')}`,
    `*${escapeMarkdownV2('Сообщение')}*: ${escapeMarkdownV2(message)}`,
    `*${escapeMarkdownV2('Время')}*: ${escapeMarkdownV2(timestamp)}`,
  ].join('\n');

  try {
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: 'MarkdownV2',
      }),
    });
  } catch (err) {
    // Log silently — must never throw
    console.error('Telegram notification error:', err);
  }
}
