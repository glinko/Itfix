import type { Metadata } from 'next';
import AboutClient from './about-client';

export const metadata: Metadata = {
  title: 'About Us - ITfix Boca Raton',
  description:
    'Learn about ITfix — your trusted local IT partner in Boca Raton and South Florida. Bilingual team, transparent pricing, and fast response.',
  openGraph: {
    title: 'About ITfix - Your Local IT Partner in Boca Raton',
    description:
      'Learn about ITfix — your trusted local IT partner in Boca Raton and South Florida. Bilingual team, transparent pricing, and fast response.',
    url: 'https://itfix.com/about',
    type: 'website',
    images: [
      {
        url: 'https://itfix.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'About ITfix',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About ITfix - Your Local IT Partner in Boca Raton',
    description:
      'Learn about ITfix — your trusted local IT partner in Boca Raton and South Florida.',
    images: ['https://itfix.com/og-image.png'],
  },
  alternates: {
    canonical: 'https://itfix.com/about',
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
