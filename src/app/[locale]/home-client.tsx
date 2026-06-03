'use client';

import { useTranslations } from 'next-intl';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import CtaSection from '@/components/CtaSection';

const services = [
  { key: 'computerRepair', icon: '🖥️' },
  { key: 'windowsReinstall', icon: '🪟' },
  { key: 'virusRemoval', icon: '🛡️' },
  { key: 'wifiSetup', icon: '📶' },
  { key: 'networking', icon: '🌐' },
  { key: 'securityCameras', icon: '📹' },
  { key: 'smartHome', icon: '🏠' },
  { key: 'ethernet', icon: '🔌' },
  { key: 'serverSetup', icon: '🖧' },
  { key: 'itConsulting', icon: '💡' },
];

const whyItems = [
  { key: 'localExpertise', icon: '📍' },
  { key: 'fastResponse', icon: '⚡' },
  { key: 'transparentPricing', icon: '💰' },
  { key: 'bilingualSupport', icon: '🗣️' },
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
