'use client';

import { useEffect, useState } from 'react';

export default function VturbPlayer() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Garante que o código só será executado no lado do cliente
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Renderiza um placeholder no servidor e na renderização inicial do cliente
    return (
      <div id="ifr_68eb36b9b8b4729161c7a349_wrapper" style={{ margin: '0 auto', width: '100%' }}>
        <div style={{ position: 'relative', padding: '56.666666666666664% 0 0 0', backgroundColor: '#000' }}>
          {/* Placeholder para o vídeo */}
        </div>
      </div>
    );
  }

  // Uma vez no cliente, renderiza o iframe
  const iframeSrc = `https://scripts.converteai.net/1c8bde42-1ca2-4c17-89ca-688b9929a687/players/68eb36b9b8b4729161c7a349/v4/embed.html?vl=${encodeURIComponent(
      window.location.href
    )}`;
    
  return (
    <div id="ifr_68eb36b9b8b4729161c7a349_wrapper" style={{ margin: '0 auto', width: '100%' }}>
      <div style={{ position: 'relative', padding: '56.666666666666664% 0 0 0' }} id="ifr_68eb36b9b8b4729161c7a349_aspect">
        <iframe
          frameBorder="0"
          allowFullScreen
          src={iframeSrc}
          id="ifr_68eb36b9b8b4729161c7a349"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          referrerPolicy="origin"
          allow="autoplay; encrypted-media"
        ></iframe>
      </div>
    </div>
  );
}
