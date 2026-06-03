import type { Metadata } from 'next';
import StructuredData from '@/components/StructuredData';
import ServicesClient from './services-client';

export const metadata: Metadata = {
  title: 'Our Services - ITfix Boca Raton',
  description:
    'Comprehensive IT services in Boca Raton: computer repair, Windows reinstall, virus removal, Wi-Fi setup, networking, security cameras, smart home, ethernet, server setup, and IT consulting.',
  openGraph: {
    title: 'IT Services in Boca Raton - Computer Repair, Networking & More',
    description:
      'Comprehensive IT services in Boca Raton: computer repair, Windows reinstall, virus removal, Wi-Fi setup, networking, security cameras, smart home, ethernet, server setup, and IT consulting.',
    url: 'https://itfix.com/services',
    type: 'website',
    images: [
      {
        url: 'https://itfix.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ITfix Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IT Services in Boca Raton - Computer Repair, Networking & More',
    description:
      'Comprehensive IT services in Boca Raton: computer repair, Windows reinstall, virus removal, Wi-Fi setup, networking, and more.',
    images: ['https://itfix.com/og-image.png'],
  },
  alternates: {
    canonical: 'https://itfix.com/services',
  },
};

const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'ITfix Services',
  description: 'Comprehensive IT services offered by ITfix in Boca Raton, South Florida.',
  numberOfItems: 10,
  itemListElement: [
    {
      '@type': 'Service',
      position: 1,
      name: 'Computer Repair',
      description: 'Expert diagnostics and repair for desktops and laptops.',
      serviceType: 'Computer Repair',
      provider: { '@type': 'LocalBusiness', name: 'ITfix' },
      areaServed: { '@type': 'State', name: 'Florida' },
    },
    {
      '@type': 'Service',
      position: 2,
      name: 'Windows Reinstall',
      description: 'Clean Windows installation with full driver setup and data preservation.',
      serviceType: 'Operating System Installation',
      provider: { '@type': 'LocalBusiness', name: 'ITfix' },
      areaServed: { '@type': 'State', name: 'Florida' },
    },
    {
      '@type': 'Service',
      position: 3,
      name: 'Virus Removal',
      description: 'Complete malware detection, removal, and system hardening.',
      serviceType: 'Malware Removal',
      provider: { '@type': 'LocalBusiness', name: 'ITfix' },
      areaServed: { '@type': 'State', name: 'Florida' },
    },
    {
      '@type': 'Service',
      position: 4,
      name: 'Wi-Fi Setup',
      description: 'Professional wireless network design for complete coverage.',
      serviceType: 'Network Setup',
      provider: { '@type': 'LocalBusiness', name: 'ITfix' },
      areaServed: { '@type': 'State', name: 'Florida' },
    },
    {
      '@type': 'Service',
      position: 5,
      name: 'Networking',
      description: 'Complete LAN/WAN design, installation, and management.',
      serviceType: 'Network Services',
      provider: { '@type': 'LocalBusiness', name: 'ITfix' },
      areaServed: { '@type': 'State', name: 'Florida' },
    },
    {
      '@type': 'Service',
      position: 6,
      name: 'Security Cameras',
      description: 'Professional CCTV installation with remote monitoring.',
      serviceType: 'Security System Installation',
      provider: { '@type': 'LocalBusiness', name: 'ITfix' },
      areaServed: { '@type': 'State', name: 'Florida' },
    },
    {
      '@type': 'Service',
      position: 7,
      name: 'Smart Home',
      description: 'Full smart home integration with automation and voice control.',
      serviceType: 'Smart Home Installation',
      provider: { '@type': 'LocalBusiness', name: 'ITfix' },
      areaServed: { '@type': 'State', name: 'Florida' },
    },
    {
      '@type': 'Service',
      position: 8,
      name: 'Ethernet',
      description: 'Professional structured cabling and wired infrastructure.',
      serviceType: 'Structured Cabling',
      provider: { '@type': 'LocalBusiness', name: 'ITfix' },
      areaServed: { '@type': 'State', name: 'Florida' },
    },
    {
      '@type': 'Service',
      position: 9,
      name: 'Server Setup',
      description: 'NAS, file servers, and backup solutions.',
      serviceType: 'Server Installation',
      provider: { '@type': 'LocalBusiness', name: 'ITfix' },
      areaServed: { '@type': 'State', name: 'Florida' },
    },
    {
      '@type': 'Service',
      position: 10,
      name: 'IT Consulting',
      description: 'Strategic IT planning and technology audits.',
      serviceType: 'IT Consulting',
      provider: { '@type': 'LocalBusiness', name: 'ITfix' },
      areaServed: { '@type': 'State', name: 'Florida' },
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <StructuredData data={servicesSchema} />
      <ServicesClient />
    </>
  );
}
