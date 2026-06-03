'use client';

import { Link } from '@/navigation';

export default function CtaSection({ t }: { t: (key: string) => string }) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('cta.title')}</h2>
        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">{t('cta.subtitle')}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-700 font-semibold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-blue-50 transition-all duration-200"
          >
            {t('cta.contactButton')}
          </Link>
          <a
            href="tel:+15551234567"
            className="inline-block border-2 border-white text-white font-semibold text-lg px-8 py-4 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-200"
          >
            {t('cta.phone')}: {t('cta.phoneNumber')}
          </a>
        </div>
      </div>
    </section>
  );
}
