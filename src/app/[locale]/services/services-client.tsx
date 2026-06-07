'use client';

import { useTranslations } from 'next-intl';
import ServicesSection from '@/components/ServicesSection';

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
  { key: 'aiAgentsSetup', icon: '/icons/smart-home.png' },
];

export default function ServicesClient() {
  const t = useTranslations('Home');
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {t('services.title')}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {t('services.subtitle')}
        </p>
      </section>
      <ServicesSection t={t} services={services} />
    </div>
  );
}
