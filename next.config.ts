import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import { withSentryConfig } from '@sentry/nextjs';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'standalone',
};

export default withNextIntl(
  withSentryConfig(nextConfig, {
    org: process.env.SENTRY_ORG || 'itfix',
    project: process.env.SENTRY_PROJECT || 'itfix-web',
    silent: true,
    sourcemaps: {
      disable: true,
    },
  })
);
