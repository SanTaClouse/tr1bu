import Image from 'next/image';
import { T } from '@/lib/i18n';

interface HeroProps {
  t: T;
}

export default function Hero({ t }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="https://res.cloudinary.com/dfsr2arzq/image/upload/v1773689729/photo_porfolio_front_t06gm2.jpg"
        alt="TR1BU - Techno DJ Copenhagen"
        fill
        className="object-cover object-center"
        style={{ opacity: 0.35 }}
        priority
        quality={90}
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="text-[5rem] sm:text-[8rem] md:text-[11rem] font-black tracking-[0.15em] text-white leading-none mb-6">
          TR1BU
        </h1>
        <p className="text-xs sm:text-sm tracking-[0.35em] uppercase text-white/60 mb-14">
          {t.hero.tagline}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#djset"
            className="w-48 py-3 bg-red-600 text-white text-xs tracking-[0.2em] uppercase text-center hover:bg-red-700 transition-colors"
          >
            {t.hero.watchDJSet}
          </a>
          <a
            href="#music"
            className="w-48 py-3 border border-white text-white text-xs tracking-[0.2em] uppercase text-center hover:bg-white hover:text-black transition-colors"
          >
            {t.hero.listen}
          </a>
          <a
            href="#booking"
            className="w-48 py-3 border border-white/25 text-white/60 text-xs tracking-[0.2em] uppercase text-center hover:border-white hover:text-white transition-colors"
          >
            {t.hero.booking}
          </a>
        </div>
      </div>

      {/* Scroll line */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-px h-14 bg-gradient-to-b from-transparent to-white/20" />
    </section>
  );
}
