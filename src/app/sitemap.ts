import type { MetadataRoute } from 'next';

const baseUrl = 'https://itfix.local';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['/', '/about', '/contact', '/services'];
  const locales = ['en', 'ru'];

  return locales.flatMap((locale) =>
    pages.map((path) => ({
      url: `${baseUrl}/${locale}${path}`,
      lastModified: new Date(),
    }))
  );
}
