'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { T } from '@/lib/i18n';

interface NavProps {
  t: T;
  lang: string;
}

export default function Nav({ t, lang }: NavProps) {
  const pathname = usePathname();
  const otherLang = lang === 'en' ? 'es' : 'en';
  const switchPath = pathname.replace(`/${lang}`, `/${otherLang}`);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/80 backdrop-blur-sm border-b border-white/5">
      <Link href={`/${lang}`} className="text-white font-bold text-lg tracking-[0.25em]">
        TR1BU
      </Link>

      <div className="hidden md:flex items-center gap-8 text-xs tracking-[0.2em] uppercase text-white/50">
        <a href="#djset" className="hover:text-white transition-colors">{t.nav.music}</a>
        <a href="#about" className="hover:text-white transition-colors">{t.nav.about}</a>
        <a href="#gallery" className="hover:text-white transition-colors">{t.nav.gallery}</a>
      </div>

      <div className="flex items-center gap-4">
        <Link
          href={switchPath}
          className="text-xs tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors"
        >
          {otherLang.toUpperCase()}
        </Link>
        <a
          href="#booking"
          className="hidden sm:block text-xs tracking-[0.2em] uppercase border border-red-600 text-red-500 px-4 py-2 hover:bg-red-600 hover:text-white transition-all"
        >
          {t.nav.booking}
        </a>
      </div>
    </nav>
  );
}
