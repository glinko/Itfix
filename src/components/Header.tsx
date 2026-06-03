'use client';

import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/navigation';

export default function Header() {
  const t = useTranslations('Header');
  const pathname = usePathname();
  const isRu = pathname.startsWith('/ru');

  return (
    <header className="border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          {t('logo')}
        </Link>
        <nav>
          <ul className="flex gap-6 items-center">
            <li>
              <Link href="/services" className="hover:text-blue-600">
                {t('nav.services')}
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-600">
                {t('nav.about')}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-600">
                {t('nav.contact')}
              </Link>
            </li>
            <li>
              <Link
                href={pathname}
                locale="en"
                className={`px-2 py-1 text-sm rounded ${
                  !isRu ? 'font-bold text-blue-600' : 'text-gray-500 hover:text-blue-600'
                }`}
              >
                {t('lang.en')}
              </Link>
            </li>
            <li>
              <Link
                href={pathname}
                locale="ru"
                className={`px-2 py-1 text-sm rounded ${
                  isRu ? 'font-bold text-blue-600' : 'text-gray-500 hover:text-blue-600'
                }`}
              >
                {t('lang.ru')}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
