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
      text: 'TR1BU is a techno DJ and electronic performative artist based in Copenhagen, Denmark. Specializing in dark techno, industrial techno, and peak-time club sets, TR1BU creates immersive dancefloor journeys that move between high kinetic energy and deep hypnotic states. Available for bookings at clubs, underground events, and festivals across Copenhagen, Denmark, and Europe.',
    },
    music: { label: 'Music' },
    gallery: { label: 'Gallery' },
    booking: {
      label: 'Booking',
      text: 'Book TR1BU for your club night, underground event, or festival in Copenhagen, Denmark, or Europe. Direct booking inquiries welcome.',
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
      text: 'TR1BU es un DJ de techno y artista performativo electrónico basado en Copenhague, Dinamarca. Especializado en techno oscuro, techno industrial y sets de club de alta intensidad, TR1BU crea experiencias inmersivas en la pista de baile que oscilan entre la alta energía cinética y los estados hipnóticos profundos. Disponible para contrataciones en clubes, eventos underground y festivales en Copenhague, Dinamarca y Europa.',
    },
    music: { label: 'Música' },
    gallery: { label: 'Galería' },
    booking: {
      label: 'Contrataciones',
      text: 'Contrata a TR1BU para tu noche de club, evento underground o festival en Copenhague, Dinamarca o Europa. Consultas directas bienvenidas.',
      cta: 'Enviar Solicitud',
    },
    footer: { rights: '© 2026 TR1BU' },
  },
};
