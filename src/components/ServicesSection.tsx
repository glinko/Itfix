'use client';

import { Link } from '@/navigation';

type ServiceItem = { key: string; icon: string };

export default function ServicesSection({ t, services }: { t: (key: string) => string; services: ServiceItem[] }) {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('services.title')}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('services.subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.key} serviceKey={service.key} icon={service.icon} t={t} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-block text-blue-600 font-semibold hover:text-blue-800 transition-colors border-2 border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50"
          >
            {t('services.learnMore')} →
          </Link>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ serviceKey, icon, t }: { serviceKey: string; icon: string; t: (key: string) => string }) {
  const title = t(`services.${serviceKey}.title`);
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-200 border border-gray-100">
      <div className="flex justify-center mb-4">
        <img src={icon} alt={title} className="w-12 h-12 object-contain" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {t(`services.${serviceKey}.title`)}
      </h3>
      <p className="text-gray-600 mb-4">
        {t(`services.${serviceKey}.description`)}
      </p>
      <Link href="/services" className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors">
        {t('services.learnMore')} →
      </Link>
    </div>
  );
}
