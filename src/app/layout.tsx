import type { Metadata } from 'next';
import '@/styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'ITfix - Professional IT Support in Boca Raton, South Florida',
  description: 'Expert IT support, network solutions, and technology services in Boca Raton and South Florida. Fast, reliable, and professional.',
  keywords: 'IT support Boca Raton, South Florida IT services, computer repair, network solutions, tech support',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
