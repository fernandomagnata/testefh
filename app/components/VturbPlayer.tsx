'use client';

import { useEffect, useState } from 'react';

export default function VturbPlayer() {
  const [iframeSrc, setIframeSrc] = useState('');

  useEffect(() => {
    // Garante que a URL seja construída apenas no lado do cliente para usar window.location.href
    setIframeSrc(`https://scripts.converteai.net/9731981d-e17b-4330-96ba-c9a74315f15c/players/68892802472c92b73bb99bf1/v4/embed.html?vl=${encodeURIComponent(
      window.location.href
    )}&pop=0&time=0`);
  }, []);

  return (
    <div
      id="ifr_68892802472c92b73bb99bf1_wrapper"
      style={{ width: '100%', margin: '0 auto' }}
    >
      <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
        {iframeSrc ? (
          <iframe
            id="ifr_68892802472c92b73bb99bf1"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; encrypted-media"
            src={iframeSrc}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
            referrerPolicy="origin"
          ></iframe>
        ) : (
           <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#000' }}>
            {/* Placeholder ou spinner de carregamento */}
          </div>
        )}
      </div>
    </div>
  );
}
