import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  output: 'standalone',
  // https://nextjs.org/docs/api-app/next-config
  // TODO: As the site grows, consider:
  // - reactCompiler: true (when stable)
  // - image domains, font optimization, etc.
};

export default createNextIntlPlugin()(nextConfig);
