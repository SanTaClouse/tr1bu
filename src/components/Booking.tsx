'use client';

import { T } from '@/lib/i18n';

interface BookingProps {
  t: T;
}

export default function Booking({ t }: BookingProps) {
  const handleBooking = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = 'mailto:xtribux@gmail.com';
    } else {
      window.open('https://mail.google.com/mail/?view=cm&to=xtribux@gmail.com&su=Booking Inquiry', '_blank');
    }
  };

  return (
    <section id="booking" className="py-32 px-6 bg-black border-t border-white/10">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-red-600 mb-6">
          {t.booking.label}
        </p>
        <p className="text-2xl md:text-3xl text-white/80 font-light mb-10 leading-relaxed">
          {t.booking.text}
        </p>
        <button
          onClick={handleBooking}
          className="inline-block px-12 py-4 bg-red-600 text-white text-xs tracking-[0.25em] uppercase hover:bg-red-700 transition-colors cursor-pointer"
        >
          {t.booking.cta}
        </button>
        <p className="mt-6 text-white/25 text-xs tracking-widest">xtribux@gmail.com</p>
      </div>
    </section>
  );
}
