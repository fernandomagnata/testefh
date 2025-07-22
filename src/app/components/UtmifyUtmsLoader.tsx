// src/app/components/UtmifyUtmsLoader.tsx
'use client';

import { useEffect } from 'react';

const UtmifyUtmsLoader = () => {
  useEffect(() => {
    // Lógica para injetar o script de UTMS Utmify
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdn.utmify.com.br/scripts/utms/latest.js';
    script.async = true;
    script.defer = true;
    // Adicione os atributos data-*
    script.setAttribute('data-utmify-prevent-xcod-sck', '');
    script.setAttribute('data-utmify-prevent-subids', '');

    document.head.appendChild(script);

    // Opcional: Cleanup
    // return () => {
    //   // Encontrar e remover o script se necessário
    // };
  }, []);

  return null;
};

export default UtmifyUtmsLoader;
