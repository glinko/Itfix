'use client';

import { useTranslations } from 'next-intl';
import ServicesSection from '@/components/ServicesSection';

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
