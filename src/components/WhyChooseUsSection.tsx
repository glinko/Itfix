'use client';

type WhyItem = { key: string; icon: string };

export default function WhyChooseUsSection({ t, items }: { t: (key: string) => string; items: WhyItem[] }) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('whyChooseUs.title')}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item) => (
            <WhyItemCard key={item.key} itemKey={item.key} icon={item.icon} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyItemCard({ itemKey, icon, t }: { itemKey: string; icon: string; t: (key: string) => string }) {
  return (
    <div className="text-center">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {t(`whyChooseUs.${itemKey}.title`)}
      </h3>
      <p className="text-gray-600">
        {t(`whyChooseUs.${itemKey}.description`)}
      </p>
    </div>
  );
}
