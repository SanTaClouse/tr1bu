import { translations, Lang } from '@/lib/i18n';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import DJSet from '@/components/DJSet';
import Bio from '@/components/Bio';
import Music from '@/components/Music';
import Gallery from '@/components/Gallery';
import Booking from '@/components/Booking';
import Footer from '@/components/Footer';

interface PageProps {
  params: { lang: Lang };
}

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }];
}

export default function Page({ params: { lang } }: PageProps) {
  const t = translations[lang];

  return (
    <main>
      <Nav t={t} lang={lang} />
      <Hero t={t} />
      <DJSet t={t} />
      <Bio t={t} />
      <Music t={t} />
      <Gallery t={t} />
      <Booking t={t} />
      <Footer t={t} />
    </main>
  );
}
