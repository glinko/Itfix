import type { Metadata } from 'next';
import '@/styles/globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { routing } from '@/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import ErrorBoundary from '@/components/ErrorBoundary';

export const metadata: Metadata = {
  title: {
    default: 'ITfix - Professional IT Support in Boca Raton, South Florida',
    template: '%s | ITfix',
  },
  description:
    'Expert IT support, network solutions, and technology services in Boca Raton and South Florida. Fast, reliable, and professional.',
  keywords:
    'IT support Boca Raton, South Florida IT services, computer repair, network solutions, virus removal, smart home setup',
  metadataBase: new URL('https://itfix.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'ITfix',
    title: 'ITfix - Professional IT Support in Boca Raton, South Florida',
    description:
      'Expert IT support, network solutions, and technology services in Boca Raton and South Florida.',
    url: 'https://itfix.com',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ITfix - Professional IT Support in Boca Raton, South Florida',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ITfix - Professional IT Support in Boca Raton, South Florida',
    description:
      'Expert IT support, network solutions, and technology services in Boca Raton and South Florida.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  themeColor: '#2563eb',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-icon-180.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'ITfix',
  description:
    'Professional IT support, network solutions, and technology services in Boca Raton and South Florida.',
  url: 'https://itfix.com',
  telephone: '(555) 123-4567',
  email: 'info@itfix.com',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Boca Raton',
    addressLocality: 'Boca Raton',
    addressRegion: 'FL',
    postalCode: '33432',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 26.3683,
    longitude: -80.1289,
  },
  areaServed: [
    { '@type': 'City', name: 'Boca Raton' },
    { '@type': 'City', name: 'Deerfield Beach' },
    { '@type': 'City', name: 'Delray Beach' },
    { '@type': 'City', name: 'Pompano Beach' },
    { '@type': 'State', name: 'Florida' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
      ],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '09:00',
      closes: '14:00',
    },
  ],
  sameAs: [],
  image: 'https://itfix.com/og-image.png',
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ErrorBoundary>
            <StructuredData data={localBusinessSchema} />
            <Header />
            <main>{children}</main>
            <Footer />
          </ErrorBoundary>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
