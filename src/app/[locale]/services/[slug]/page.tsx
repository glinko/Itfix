import { notFound } from 'next/navigation';
import { services } from '@/data/services';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);
  if (!service) return {};

  const t = await getTranslations(`Services.services.${slug}`);
  const name = t ? t('name') : service.id.replace(/-/g, ' ');

  return {
    title: `${name} | ITfix`,
    description: `Professional ${name} services in South Florida. Starting at ${service.priceRange}.`,
    openGraph: {
      title: `${name} - ITfix`,
      description: `Professional ${name} services in South Florida.`,
      type: 'website',
    },
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.id }));
}

async function resolveMessage(key: string) {
  try {
    const t = await getTranslations(key.split('.').slice(0, -1).join('.') || undefined);
    const lastPart = key.split('.').pop();
    return t ? t(lastPart || '') : key;
  } catch {
    return key;
  }
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const service = services.find((s) => s.id === slug);

  if (!service) {
    notFound();
  }

  const title = await resolveMessage(service.titleKey);
  const description = await resolveMessage(service.descriptionKey);
  const fullDescription = await resolveMessage(service.fullDescriptionKey);
  const features = await Promise.all(service.features.map((fk: string) => resolveMessage(fk)));

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center mb-4">
            <img src={service.icon} alt={title} className="w-16 h-16 object-contain" />
          </div>
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-blue-100 max-w-2xl">{description}</p>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-lg text-gray-700 leading-relaxed mb-12">{fullDescription}</p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h2>
          <ul className="space-y-4">
            {features.map((feature: string, i: number) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-orange-500 mt-1 flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pricing</h2>
          <p className="text-3xl font-bold text-blue-600 mb-2">{service.priceRange}</p>
          <p className="text-gray-600 mb-8">Starting price · Final cost depends on complexity</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Contact us today for a free consultation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${locale}/contact`}
              className="inline-block bg-white text-orange-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition"
            >
              Request a Quote
            </Link>
            <a
              href="tel:+15551234567"
              className="inline-block border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-orange-600 transition"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
