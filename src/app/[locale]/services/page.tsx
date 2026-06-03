'use client';

import { useTranslations } from 'next-intl';
import ServiceCard from '@/components/ServiceCard';

const services = [
  { key: 'computer-repair', icon: '🖥️' },
  { key: 'windows-reinstall', icon: '🔄' },
  { key: 'virus-removal', icon: '🛡️' },
  { key: 'wifi-setup', icon: '📶' },
  { key: 'networking', icon: '🌐' },
  { key: 'security-cameras', icon: '📹' },
  { key: 'smart-home', icon: '🏠' },
  { key: 'ethernet', icon: '🔌' },
  { key: 'server-setup', icon: '🗄️' },
  { key: 'it-consulting', icon: '💼' },
];

export default function ServicesPage() {
  const t = useTranslations('Services');

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {t('title')}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {t('intro')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard
            key={service.key}
            serviceKey={service.key}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  );
}
