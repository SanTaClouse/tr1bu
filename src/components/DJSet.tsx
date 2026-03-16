import { T } from '@/lib/i18n';

interface DJSetProps {
  t: T;
}

export default function DJSet({ t }: DJSetProps) {
  return (
    <section id="djset" className="py-24 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase text-red-600 mb-10 text-center">
          {t.djset.label}
        </p>

        {/* 16:9 responsive embed */}
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            src="https://www.youtube.com/embed/zB7bh7gq7gU"
            title='TR1BU - "NEW ERA" DJ Set (Copenhagen, Denmark 2026)'
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>

        <p className="text-center text-white/30 text-xs tracking-[0.2em] uppercase mt-6">
          {t.djset.subtitle}
        </p>
      </div>
    </section>
  );
}
