'use client';

import { useEffect, useRef, useState } from 'react';

interface VturbPlayerProps {
  onTimeUpdate?: () => void;
}

export default function VturbPlayer({ onTimeUpdate }: VturbPlayerProps) {
  const eventCalledRef = useRef(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Garante que este código só rode no cliente, após a montagem.
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) {
      return;
    }

    const handlePlayerMessage = (event: MessageEvent) => {
      // Ignora eventos que não são do tipo 'timeupdate'.
      if (event.data.type !== 'timeupdate') {
        return;
      }
      
      // Se o evento já foi chamado, não faz nada.
      if (eventCalledRef.current) {
        return;
      }

      const currentTime = event.data.value.currentTime;
      
      // Para teste, revela o conteúdo após 10 segundos.
      if (currentTime >= 10) {
        if (onTimeUpdate) {
          onTimeUpdate();
        }
        eventCalledRef.current = true; // Marca que o evento foi disparado.
      }
    };

    window.addEventListener('message', handlePlayerMessage);

    // Limpa o listener quando o componente for desmontado.
    return () => {
      window.removeEventListener('message', handlePlayerMessage);
    };
  }, [isClient, onTimeUpdate]);

  // Enquanto não estiver no cliente, renderiza um placeholder.
  if (!isClient) {
    return (
      <div id="ifr_68892802472c92b73bb99bf1_wrapper" style={{ width: '100%', margin: '0 auto' }}>
        <div style={{ padding: '56.25% 0 0 0', position: 'relative', backgroundColor: '#000' }}>
          {/* Placeholder para o servidor */}
        </div>
      </div>
    );
  }

  // Renderiza o iframe no cliente, forçando o início no tempo 0.
  const iframeSrc = `https://scripts.converteai.net/9731981d-e17b-4330-96ba-c9a74315f15c/players/68892802472c92b73bb99bf1/v4/embed.html?vl=${encodeURIComponent(
    window.location.href
  )}&time=0`;

  return (
    <div
      id="ifr_68892802472c92b73bb99bf1_wrapper"
      style={{ width: '100%', margin: '0 auto' }}
    >
      <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
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
      </div>
    </div>
  );
}
