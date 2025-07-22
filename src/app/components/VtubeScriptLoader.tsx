// src/app/components/VtubeScriptLoader.tsx
'use client'; // Marca este componente como client-side

import { useEffect } from 'react';

const VtubeScriptLoader = () => {
  useEffect(() => {
    // Este código só rodará no lado do cliente após a montagem do componente e hidratação
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    // Opcional: Cleanup function para remover o script quando o componente for desmontado (geralmente não necessário para scripts globais em layout)
    // return () => {
    //   const existingScript = document.querySelector(`script[src="${script.src}"]`);
    //   if (existingScript && document.head.contains(existingScript)) {
    //     document.head.removeChild(existingScript);
    //   }
    // };
  }, []); // O array vazio [] garante que o efeito roda apenas uma vez após a montagem inicial

  return null; // Este componente não renderiza nada visível no DOM
};

export default VtubeScriptLoader;
