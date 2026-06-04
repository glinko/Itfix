'use client';

import Script from 'next/script';

/**
 * Plausible Analytics integration.
 *
 * Loads the Plausible tracking script only in production.
 * Configure via env vars:
 *   NEXT_PUBLIC_PLAUSIBLE_DOMAIN  — your site domain (e.g. itfix.com)
 *   NEXT_PUBLIC_PLAUSIBLE_SCRIPT_SRC — script URL (default: https://plausible.io/js/script.js)
 */
export default function Plausible() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  const scriptSrc =
    process.env.NEXT_PUBLIC_PLAUSIBLE_SCRIPT_SRC ||
    'https://plausible.io/js/script.js';

  // Skip entirely if not configured or not production
  if (!domain || process.env.NODE_ENV !== 'production') {
    return null;
  }

  return (
    <Script
      defer
      data-domain={domain}
      src={scriptSrc}
      strategy="afterInteractive"
    />
  );
}
