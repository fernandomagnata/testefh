'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/app/components/ui';
import { cn } from '@/app/lib/utils';

export function FloatingCtaButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offerSection = document.getElementById('oferta');
      if (offerSection) {
        const { top } = offerSection.getBoundingClientRect();
        // Mostra o botão se o usuário rolou para além do topo da seção de oferta
        setIsVisible(top < window.innerHeight);
      } else {
        setIsVisible(false);
      }
    };

    // Adiciona o ouvinte de evento apenas no cliente
    window.addEventListener('scroll', handleScroll);
    
    // Verificação inicial caso a página carregue já após a seção
    handleScroll();

    // Função de limpeza para remover o ouvinte
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // O array de dependência vazio garante que este efeito seja executado apenas uma vez na montagem

  const scrollToOffer = () => {
    const offerSection = document.getElementById('oferta');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Button
      onClick={scrollToOffer}
      className={cn(
        'fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-primary/80 p-0 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-primary hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background',
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'
      )}
      aria-label="Voltar para a oferta"
      tabIndex={isVisible ? 0 : -1}
    >
      <ArrowUp className="h-7 w-7 text-primary-foreground" />
    </Button>
  );
}
