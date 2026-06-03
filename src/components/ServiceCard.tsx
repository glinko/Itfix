'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

interface ServiceCardProps {
  serviceKey: string;
  icon: string;
}

export default function ServiceCard({ serviceKey, icon }: ServiceCardProps) {
  const t = useTranslations(`Services.services.${serviceKey}`);
  const commonT = useTranslations('Services.services.common');

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {t('name')}
      </h3>
      <p className="text-gray-600 mb-4 flex-1">
        {t('description')}
      </p>
      <ul className="mb-6 space-y-2">
        {t.raw('features').map((feature: string, index: number) => (
          <li key={index} className="flex items-start text-gray-700 text-sm">
            <span className="text-green-500 mr-2 mt-0.5">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        href="/contact"
        className="inline-block text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
      >
        {commonT('requestService')}
      </Link>
    </div>
  );
}
