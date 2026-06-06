'use client';

import { useTranslations } from 'next-intl';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import CtaSection from '@/components/CtaSection';

const services = [
  { key: 'computerRepair', icon: '/icons/computer-repair.png' },
  { key: 'windowsReinstall', icon: '/icons/windows-reinstall.png' },
  { key: 'virusRemoval', icon: '/icons/virus-removal.png' },
  { key: 'wifiSetup', icon: '/icons/wifi-setup.png' },
  { key: 'networking', icon: '/icons/networking.png' },
  { key: 'securityCameras', icon: '/icons/security-cameras.png' },
  { key: 'smartHome', icon: '/icons/smart-home.png' },
  { key: 'ethernet', icon: '/icons/ethernet.png' },
  { key: 'serverSetup', icon: '/icons/server-setup.png' },
  { key: 'itConsulting', icon: '/icons/it-consulting.png' },
];

const whyItems = [
  { key: 'localExpertise', icon: '/icons/local-expertise.png' },
  { key: 'fastResponse', icon: '/icons/fast-response.png' },
  { key: 'transparentPricing', icon: '/icons/transparent-pricing.png' },
  { key: 'bilingualSupport', icon: '/icons/bilingual-support.png' },
];

export default function HomeClient() {
  const t = useTranslations('Home');
  return (
    <>
      <HeroSection t={t} />
      <ServicesSection t={t} services={services} />
      <WhyChooseUsSection t={t} items={whyItems} />
      <CtaSection t={t} />
    </>
  );
}
