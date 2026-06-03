'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

const services = [
  'computerRepair',
  'windowsReinstall',
  'virusRemoval',
  'wifiSetup',
  'networking',
  'securityCameras',
  'smartHome',
  'ethernet',
  'serverSetup',
  'itConsulting',
];

export default function ContactPage() {
  const t = useTranslations('Contact');
  const homeT = useTranslations('Home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = t('form.errors.required');
    if (!formData.email.trim()) {
      newErrors.email = t('form.errors.required');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('form.errors.email');
    }
    if (!formData.message.trim()) newErrors.message = t('form.errors.required');
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  };

  if (submitted) {
    return (
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">{t('submitted.title')}</h1>
          <p className="text-gray-600 mb-8">{t('submitted.message')}</p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            {t('submitted.sendAnother')}
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">{t('title')}</h1>
      <p className="text-gray-600 mb-12">{t('subtitle')}</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-6">{t('form.title')}</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                {t('form.fields.name')} *
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={e => handleChange('name', e.target.value)}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                {t('form.fields.email')} *
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={e => handleChange('email', e.target.value)}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                {t('form.fields.phone')}
              </label>
              <input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={e => handleChange('phone', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium mb-1">
                {t('form.fields.service')}
              </label>
              <select
                id="service"
                value={formData.service}
                onChange={e => handleChange('service', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">{t('form.fields.servicePlaceholder')}</option>
                {services.map(s => (
                  <option key={s} value={s}>
                    {homeT(`services.${s}.title`)}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                {t('form.fields.message')} *
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={e => handleChange('message', e.target.value)}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              {t('form.submit')}
            </button>
          </form>
        </div>

        {/* Business Info Sidebar */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">{t('info.title')}</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-700">{t('info.address')}</h3>
                <p className="text-gray-600">{t('info.addressValue')}</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700">{t('info.phone')}</h3>
                <p className="text-gray-600">{t('info.phoneValue')}</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700">{t('info.email')}</h3>
                <p className="text-gray-600">{t('info.emailValue')}</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">{t('hours.title')}</h3>
            <div className="space-y-1 text-gray-600">
              <p>{t('hours.weekdays')}</p>
              <p>{t('hours.saturday')}</p>
              <p>{t('hours.sunday')}</p>
            </div>
          </div>

          {/* Map placeholder */}
          <div>
            <h3 className="font-semibold mb-2">{t('map.title')}</h3>
            <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center">
              <iframe
                title="Boca Raton Map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-80.1,26.3,-80.0,26.4&layer=mapnik"
                className="w-full h-full rounded-lg border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
