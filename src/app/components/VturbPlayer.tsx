'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    smartplayer: any;
  }
}

interface VturbPlayerProps {
  onTimeUpdate?: () => void;
}

export default function VturbPlayer({ onTimeUpdate }: VturbPlayerProps) {
  const playerRef = useRef<HTMLIFrameElement>(null);
  const eventCalledRef = useRef(false);

  useEffect(() => {
    // Handler para a mensagem do player
    const handlePlayerMessage = (event: MessageEvent) => {
      if (
        event.source === playerRef.current?.contentWindow &&
        event.data.type === 'timeupdate' &&
        !eventCalledRef.current
      ) {
        const currentTime = event.data.value.currentTime;
        // 4 minutos e 35 segundos = 275 segundos
        if (currentTime >= 275) {
          if (onTimeUpdate) {
            onTimeUpdate();
          }
          eventCalledRef.current = true; // Marca que o evento já foi chamado
        }
      }
    };
    
    // Adiciona o listener de mensagem do iframe
    window.addEventListener('message', handlePlayerMessage);
    
    // Cleanup: remove o listener quando o componente é desmontado
    return () => {
      window.removeEventListener('message', handlePlayerMessage);
    };
  }, [onTimeUpdate]);

  const iframeSrc = `https://scripts.converteai.net/9731981d-e17b-4330-96ba-c9a74315f15c/players/687ec06b1cdf2c545b3df1b0/v4/embed.html?vl=${
    typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : ''
  }&pop=0&time=1`;

  // Renderiza um placeholder no servidor
  if (typeof window === 'undefined') {
    return (
      <div id="ifr_687ec06b1cdf2c545b3df1b0_wrapper" style={{ width: '100%', margin: '0 auto' }}>
        <div style={{ padding: '56.25% 0 0 0', position: 'relative', backgroundColor: '#000' }}>
        </div>
      </div>
    );
  }

  return (
    <div
      id="ifr_687ec06b1cdf2c545b3df1b0_wrapper"
      style={{ width: '100%', margin: '0 auto' }}
    >
      <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
        <iframe
          ref={playerRef}
          id="ifr_687ec06b1cdf2c545b3df1b0"
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
      </div>
    </div>
  );
}
