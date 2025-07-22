// src/app/components/LinkComponent.tsx
'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

interface LinkComponentProps extends React.ComponentProps<typeof Link> {
  // Adicione quaisquer outras props que você passa para seus links (como className, target, etc.)
  className?: string;
  target?: string;
  // Outras props do <a> que você usa
}

const LinkComponent: React.FC<LinkComponentProps> = ({ href, children, className, target, ...props }) => {
  const anchorRef = useRef<HTMLAnchorElement>(null);
  // Não precisamos mais do state clientHref se vamos modificar o DOM diretamente
  // const [clientHref, setClientHref] = useState(href);


  useEffect(() => {
    // Este código só roda no cliente
    if (typeof window !== 'undefined' && anchorRef.current) {
      let updatedHref = href.toString(); // Comece com o href original

      // --- Lógica para adicionar parâmetros UTM ou modificar URL no cliente ---
      try {
         // Exemplo: Adiciona parâmetros UTM se não for um link interno /legal/
        if (!updatedHref.startsWith('/legal/')) {
            const url = new URL(updatedHref);
            url.searchParams.set('utm_source', 'organic');
            url.searchParams.set('utm_campaign', 'seucampanha'); // Substitua pelo nome da campanha
            // Adicione outros parâmetros se necessário
            updatedHref = url.toString();
        }
      } catch (error) {
        console.error("Erro ao processar href para UTM:", error);
        updatedHref = href.toString();
      }
      // --- Fim da Lógica de modificação ---

      // Atualiza o href do elemento <a> real no DOM após a hidratação
       requestAnimationFrame(() => {
          if (anchorRef.current && anchorRef.current.href !== updatedHref) {
             anchorRef.current.href = updatedHref;
          }
       });
    }
  }, [href]); // Re-execute este efeito se o href original mudar

  return (
    // O Link do Next.js agora tem o <a> como filho direto
    <Link href={href} passHref legacyBehavior>
      {/* O elemento <a> recebe as props e os filhos */}
      <a ref={anchorRef} className={className} target={target} {...props} >
        {children}
      </a>
    </Link>
  );
};

export default LinkComponent;
