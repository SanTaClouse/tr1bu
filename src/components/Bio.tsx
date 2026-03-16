import Image from 'next/image';
import { T } from '@/lib/i18n';

interface BioProps {
  t: T;
}

export default function Bio({ t }: BioProps) {
  return (
    <section id="about" className="py-24 px-6 bg-black border-t border-white/10">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <p className="text-xs tracking-[0.3em] uppercase text-red-600 mb-6">
            {t.bio.label}
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight">
            TR1BU
          </h2>
          <p className="text-white/55 leading-relaxed text-lg">
            {t.bio.text}
          </p>
        </div>

        <div className="order-1 md:order-2 relative aspect-[3/4] overflow-hidden">
          <Image
            src="https://res.cloudinary.com/dfsr2arzq/image/upload/v1773689729/sitting_photo_s4ryfs.jpg"
            alt="TR1BU - Electronic Performative Artist based in Copenhagen"
            fill
            className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
            quality={90}
          />
        </div>
      </div>
    </section>
  );
}
