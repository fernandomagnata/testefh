// src/app/components/UtmifyPixelLoader.tsx
'use client';

import { useEffect } from 'react';

const UtmifyPixelLoader = () => {
  useEffect(() => {
    // Lógica para injetar o script do pixel Utmify
    const scriptContent = `
      window.pixelId = "6877de3c73930aaed23043b5";
      var a = document.createElement("script");
      a.setAttribute("async", "");
      a.setAttribute("defer", "");
      a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
      document.head.appendChild(a);
    `;

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = scriptContent; // Use innerHTML para injetar o conteúdo do script
    document.head.appendChild(script);

    // Opcional: Cleanup
    // return () => {
    //   // Encontrar e remover o script se necessário
    // };
  }, []);

  return null;
};

export default UtmifyPixelLoader;
