'use client';

import { useTranslations } from 'next-intl';

const values = [
  { key: 'reliability', icon: '🤝' },
  { key: 'expertise', icon: '🎓' },
  { key: 'customerFirst', icon: '⭐' },
  { key: 'continuousLearning', icon: '📚' },
];

const differentiators = [
  { key: 'localPresence', icon: '📍' },
  { key: 'fastResponse', icon: '⚡' },
  { key: 'transparentPricing', icon: '💰' },
  { key: 'ongoingSupport', icon: '🔄' },
];

const serviceAreas = [
  'bocaRaton',
  'deerfieldBeach',
  'delrayBeach',
  'pompanoBeach',
  'surroundingAreas',
];

export default function AboutClient() {
  const t = useTranslations('About');

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {t('title')}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {t('subtitle')}
        </p>
      </section>

      {/* Company Story */}
      <section className="mb-16">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">
            {t('story.title')}
          </h2>
          <div className="space-y-4 text-gray-700 text-lg">
            <p>{t('story.founded')}</p>
            <p>{t('story.mission')}</p>
            <p>{t('story.audience')}</p>
            <p>{t('story.bilingual')}</p>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
          {t('differentiators.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {differentiators.map((item) => (
            <div
              key={item.key}
              className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4"
            >
              <span className="text-3xl flex-shrink-0">
                {t(`differentiators.${item.key}.icon`)}
              </span>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t(`differentiators.${item.key}.title`)}
                </h3>
                <p className="text-gray-600">
                  {t(`differentiators.${item.key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
          {t('values.title')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item) => (
            <div
              key={item.key}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 text-center"
            >
              <span className="text-4xl block mb-3">
                {t(`values.${item.key}.icon`)}
              </span>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t(`values.${item.key}.title`)}
              </h3>
              <p className="text-gray-600 text-sm">
                {t(`values.${item.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Service Areas */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
          {t('areas.title')}
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {serviceAreas.map((area) => (
            <div
              key={area}
              className="bg-indigo-100 text-indigo-800 px-6 py-3 rounded-full font-medium"
            >
              {t(`areas.${area}`)}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white">
        <h2 className="text-3xl font-bold mb-4">{t('cta.title')}</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">{t('cta.subtitle')}</p>
        <a
          href="/contact"
          className="inline-block bg-white text-indigo-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          {t('cta.button')}
        </a>
      </section>
    </div>
  );
}
