'use client';

import { useEffect } from 'react';

export default function VturbPlayer() {
  useEffect(() => {
    // Injeção dos <link preload> e script do SmartPlayer (somente no client)
    const head = document.head;

    const preloadLinks = [
      "https://scripts.converteai.net/1c8bde42-1ca2-4c17-89ca-688b9929a687/players/68eb36b9b8b4729161c7a349/v4/embed.html",
      "https://scripts.converteai.net/1c8bde42-1ca2-4c17-89ca-688b9929a687/players/68eb36b9b8b4729161c7a349/v4/player.js",
      "https://scripts.converteai.net/lib/js/smartplayer-wc/v4/smartplayer.js",
      "https://cdn.converteai.net/1c8bde42-1ca2-4c17-89ca-688b9929a687/68eb36a9f26dacd66f43dc5e/main.m3u8",
    ];

    preloadLinks.forEach((href, i) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = href;
      link.as = i === 3 ? 'fetch' : 'script';
      head.appendChild(link);
    });

    // DNS prefetch
    const dnsPrefetches = [
      'https://cdn.converteai.net',
      'https://scripts.converteai.net',
      'https://images.converteai.net',
      'https://api.vturb.com.br',
    ];
    dnsPrefetches.forEach((href) => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = href;
      head.appendChild(link);
    });

    // Script principal do SmartPlayer
    const script = document.createElement('script');
    script.src = 'https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js';
    script.async = true;
    head.appendChild(script);

    // Marca de tempo do carregamento
    (function (i, n) {
      i._plt = i._plt || (n && n.timeOrigin ? n.timeOrigin + n.now() : Date.now());
    })(window, performance);

    // Limpeza ao desmontar o componente
    return () => {
      head.querySelectorAll('link[rel="preload"], link[rel="dns-prefetch"]').forEach((el) => el.remove());
      script.remove();
    };
  }, []);

  // Render do player com o iframe embutido
  return (
    <div
      id="ifr_68eb36b9b8b4729161c7a349_wrapper"
      style={{ margin: '0 auto', width: '100%' }}
    >
      <div
        id="ifr_68eb36b9b8b4729161c7a349_aspect"
        style={{ position: 'relative', padding: '56.6666666667% 0 0 0' }}
      >
        <iframe
          id="ifr_68eb36b9b8b4729161c7a349"
          frameBorder="0"
          allowFullScreen
          src="about:blank"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
          referrerPolicy="origin"
          onLoad={(e) => {
            const iframe = e.currentTarget;
            iframe.onload = null;
            iframe.src =
              'https://scripts.converteai.net/1c8bde42-1ca2-4c17-89ca-688b9929a687/players/68eb36b9b8b4729161c7a349/v4/embed.html' +
              (location.search || '?') +
              '&vl=' +
              encodeURIComponent(location.href);
          }}
        ></iframe>
      </div>
    </div>
  );
}
