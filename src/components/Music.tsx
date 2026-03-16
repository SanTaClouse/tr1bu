import { T } from '@/lib/i18n';

interface MusicProps {
  t: T;
}

export default function Music({ t }: MusicProps) {
  return (
    <section id="music" className="py-24 px-6 bg-black border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase text-red-600 mb-12 text-center">
          {t.music.label}
        </p>

        <div className="space-y-8">
          <div>
            <p className="text-white/30 text-xs tracking-[0.2em] uppercase mb-3">SoundCloud</p>
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/tr1bu/tr1bu-new-era-dj-set&color=%23cc0000&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"
              title="TR1BU - NEW ERA DJ Set on SoundCloud"
            />
          </div>

          <div>
            <p className="text-white/30 text-xs tracking-[0.2em] uppercase mb-3">Spotify</p>
            <iframe
              src="https://open.spotify.com/embed/artist/1yfRchbq7t3CA46wWqKN4Q?utm_source=generator&theme=0"
              width="100%"
              height="152"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="TR1BU on Spotify"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
