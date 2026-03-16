export type Lang = 'en' | 'es';

export interface T {
  nav: { music: string; about: string; gallery: string; booking: string };
  hero: { tagline: string; watchDJSet: string; listen: string; booking: string };
  djset: { label: string; subtitle: string };
  bio: { label: string; text: string };
  music: { label: string };
  gallery: { label: string };
  booking: { label: string; text: string; cta: string };
  footer: { rights: string };
}

export const translations: Record<Lang, T> = {
  en: {
    nav: { music: 'Music', about: 'About', gallery: 'Gallery', booking: 'Booking' },
    hero: {
      tagline: 'Techno Experience, Music and Dance.',
      watchDJSet: 'Watch DJ Set',
      listen: 'Listen',
      booking: 'Booking',
    },
    djset: {
      label: 'Featured DJ Set',
      subtitle: 'TR1BU — "NEW ERA" DJ Set · Copenhagen, Denmark 2026 · 40 min',
    },
    bio: {
      label: 'About',
      text: 'TR1BU is an electronic performative artist based in Copenhagen. Through immersive DJ sets and audiovisual experiences, TR1BU creates intense dancefloor journeys that move between high kinetic energy and deep hypnotic states.',
    },
    music: { label: 'Music' },
    gallery: { label: 'Gallery' },
    booking: {
      label: 'Booking',
      text: 'Available for club and underground event bookings.',
      cta: 'Send Booking Request',
    },
    footer: { rights: '© 2026 TR1BU' },
  },
  es: {
    nav: { music: 'Música', about: 'Sobre TR1BU', gallery: 'Galería', booking: 'Contrataciones' },
    hero: {
      tagline: 'Experiencia Techno, Música y Danza.',
      watchDJSet: 'Ver DJ Set',
      listen: 'Escuchar',
      booking: 'Contrataciones',
    },
    djset: {
      label: 'DJ Set Destacado',
      subtitle: 'TR1BU — "NEW ERA" DJ Set · Copenhague, Dinamarca 2026 · 40 min',
    },
    bio: {
      label: 'Sobre TR1BU',
      text: 'TR1BU es un artista performativo electrónico basado en Copenhague. A través de sets de DJ inmersivos y experiencias audiovisuales, TR1BU crea intensos viajes en la pista de baile que oscilan entre la alta energía cinética y los estados hipnóticos profundos.',
    },
    music: { label: 'Música' },
    gallery: { label: 'Galería' },
    booking: {
      label: 'Contrataciones',
      text: 'Disponible para contrataciones en clubes y eventos underground.',
      cta: 'Enviar Solicitud',
    },
    footer: { rights: '© 2026 TR1BU' },
  },
};
