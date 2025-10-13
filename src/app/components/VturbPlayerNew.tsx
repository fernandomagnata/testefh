'use client';
import { useEffect, useState } from 'react';

export default function VturbPlayerNew() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Garante que o código do script seja executado apenas no lado do cliente.
    const script = document.createElement("script");
    script.src = "https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js";
    script.async = true;
    document.head.appendChild(script);
    
    // Define isClient como true para renderizar o iframe
    setIsClient(true);

    return () => {
      // Limpeza opcional do script ao desmontar o componente
      document.head.removeChild(script);
    };
  }, []);

  // No servidor ou na renderização inicial do cliente, renderiza um placeholder.
  if (!isClient) {
    return (
      <div id="ifr_68eb3726a083e65e24419ee2_wrapper" style={{ margin: '0 auto', width: '100%' }}>
        <div style={{ position: 'relative', padding: '56.25% 0 0 0', backgroundColor: '#000' }} id="ifr_68eb3726a083e65e24419ee2_aspect">
          {/* Placeholder */}
        </div>
      </div>
    );
  }

  // No cliente, após a montagem, renderiza o iframe real.
  const iframeSrc = `https://scripts.converteai.net/1c8bde42-1ca2-4c17-89ca-688b9929a687/players/68eb3726a083e65e24419ee2/v4/embed.html?vl=${encodeURIComponent(location.href)}`;

  return (
    <div id="ifr_68eb3726a083e65e24419ee2_wrapper" style={{ margin: '0 auto', width: '100%' }}>
      <div style={{ position: 'relative', padding: '56.25% 0 0 0' }} id="ifr_68eb3726a083e65e24419ee2_aspect">
        <iframe
          frameBorder="0"
          allowFullScreen
          src={iframeSrc}
          id="ifr_68eb3d726a083e65e24419ee2"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          referrerPolicy="origin"
        ></iframe>
      </div>
    </div>
  );
}
