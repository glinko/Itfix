import type { Metadata } from 'next';
import HomeClient from './home-client';

export const metadata: Metadata = {
  title: 'Home - ITfix Professional IT Support',
  description:
    'Professional IT support in Boca Raton, South Florida. Computer repair, networking, smart home setup, and more. Fast, reliable, and affordable.',
  openGraph: {
    title: 'ITfix - Professional IT Support in Boca Raton',
    description:
      'Professional IT support in Boca Raton, South Florida. Computer repair, networking, smart home setup, and more.',
    url: 'https://itfix.com',
    type: 'website',
    images: [
      {
        url: 'https://itfix.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ITfix - Professional IT Support',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ITfix - Professional IT Support in Boca Raton',
    description:
      'Professional IT support in Boca Raton, South Florida. Computer repair, networking, smart home setup, and more.',
    images: ['https://itfix.com/og-image.png'],
  },
  alternates: {
    canonical: 'https://itfix.com',
  },
};

export default function Home() {
  return <HomeClient />;
}
