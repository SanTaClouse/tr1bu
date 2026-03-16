import Image from 'next/image';
import { T } from '@/lib/i18n';

const photos = [
  {
    src: 'https://res.cloudinary.com/dfsr2arzq/image/upload/v1773689728/close_up_portfolio_hfovm3.jpg',
    alt: 'TR1BU - Pioneer DJ controller close up, Copenhagen',
  },
  {
    src: 'https://res.cloudinary.com/dfsr2arzq/image/upload/v1773689728/close_up_move_portfolio_ketebt.jpg',
    alt: 'TR1BU - dynamic movement, techno performer Copenhagen',
  },
  {
    src: 'https://res.cloudinary.com/dfsr2arzq/image/upload/v1773689735/DJ_SET_COVER_luajuv.jpg',
    alt: 'TR1BU - outdoor DJ set, Denmark forest',
  },
  {
    src: 'https://res.cloudinary.com/dfsr2arzq/image/upload/v1773689730/DJ_SET_COVER_2_bw0amu.jpg',
    alt: 'TR1BU - DJ set in nature, Copenhagen',
  },
  {
    src: 'https://res.cloudinary.com/dfsr2arzq/image/upload/v1773689728/dance_move_portfolio_znd1l9.jpg',
    alt: 'TR1BU - dance performance, electronic artist Denmark',
  },
];

interface GalleryProps {
  t: T;
}

export default function Gallery({ t }: GalleryProps) {
  return (
    <section id="gallery" className="py-24 px-6 bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase text-red-600 mb-12 text-center">
          {t.gallery.label}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {/* First photo spans 2 columns */}
          <div className="md:col-span-2 relative aspect-video overflow-hidden group">
            <Image
              src={photos[0].src}
              alt={photos[0].alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              quality={85}
            />
          </div>

          {photos.slice(1).map((photo, i) => (
            <div key={i} className="relative aspect-video overflow-hidden group">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                quality={85}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
