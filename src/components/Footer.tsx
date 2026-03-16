import { T } from '@/lib/i18n';

const socialLinks = [
  { name: 'SoundCloud', href: 'https://soundcloud.com/tr1bu' },
  { name: 'Spotify', href: 'https://open.spotify.com/artist/1yfRchbq7t3CA46wWqKN4Q' },
  { name: 'YouTube', href: 'https://www.youtube.com/@tr1bu' },
  { name: 'Instagram', href: 'https://www.instagram.com/tribu.01/' },
];

interface FooterProps {
  t: T;
}

export default function Footer({ t }: FooterProps) {
  return (
    <footer className="py-10 px-6 bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-white/25 text-xs tracking-[0.2em]">{t.footer.rights}</p>
        <div className="flex items-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/35 text-xs tracking-[0.15em] uppercase hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
