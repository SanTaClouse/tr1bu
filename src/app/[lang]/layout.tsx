import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Lang } from '@/lib/i18n';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

interface LayoutProps {
  children: React.ReactNode;
  params: { lang: Lang };
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const isEs = params.lang === 'es';
  return {
    title: 'TR1BU | Techno DJ Copenhagen',
    description: isEs
      ? 'TR1BU es un artista performativo electrónico basado en Copenhague. DJ sets inmersivos y experiencias audiovisuales para clubes y eventos underground.'
      : 'TR1BU is a techno DJ and electronic performative artist based in Copenhagen. Immersive DJ sets and audiovisual experiences for clubs and underground events.',
    keywords: [
      'DJ techno Copenhagen',
      'techno DJ Copenhagen',
      'TR1BU',
      'TR1BU DJ',
      'electronic music Copenhagen',
      'techno artist Denmark',
      'Copenhagen underground DJ',
      'techno DJ Denmark',
      'DJ set Copenhagen',
    ],
    openGraph: {
      title: 'TR1BU | Techno DJ Copenhagen',
      description:
        'TR1BU is a techno DJ and electronic performative artist based in Copenhagen.',
      images: [
        {
          url: 'https://res.cloudinary.com/dfsr2arzq/image/upload/v1773689729/photo_porfolio_front_t06gm2.jpg',
          width: 1920,
          height: 1080,
          alt: 'TR1BU - Techno DJ Copenhagen',
        },
      ],
      type: 'website',
      locale: isEs ? 'es_ES' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'TR1BU | Techno DJ Copenhagen',
      description: 'Techno DJ and electronic performative artist based in Copenhagen.',
      images: ['https://res.cloudinary.com/dfsr2arzq/image/upload/v1773689729/photo_porfolio_front_t06gm2.jpg'],
    },
    metadataBase: new URL('https://tr1bu.com'),
    robots: { index: true, follow: true },
    alternates: {
      languages: { en: '/en', es: '/es' },
    },
  };
}

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }];
}

export default function LangLayout({ children, params }: LayoutProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MusicGroup',
    name: 'TR1BU',
    description:
      'TR1BU is an electronic performative artist based in Copenhagen. Through immersive DJ sets and audiovisual experiences, TR1BU creates intense dancefloor journeys.',
    genre: 'Techno',
    url: 'https://tr1bu.com',
    sameAs: [
      'https://soundcloud.com/tr1bu',
      'https://open.spotify.com/artist/1yfRchbq7t3CA46wWqKN4Q',
      'https://www.youtube.com/@tr1bu',
      'https://www.instagram.com/tribu.01/',
    ],
    location: {
      '@type': 'Place',
      name: 'Copenhagen, Denmark',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Copenhagen',
        addressCountry: 'DK',
      },
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'xtribux@gmail.com',
      contactType: 'Booking',
    },
  };

  return (
    <html lang={params.lang}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
