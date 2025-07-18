'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function FloatingCtaButton() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const offerSection = document.getElementById('oferta');
    if (offerSection) {
      const { bottom } = offerSection.getBoundingClientRect();
      // Show button if the bottom of the offer section is above the viewport
      if (bottom < 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  const scrollToOffer = () => {
    const offerSection = document.getElementById('oferta');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Button
      onClick={scrollToOffer}
      className={cn(
        'fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-primary/80 p-0 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-primary hover:scale-110',
        'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background',
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
      )}
      aria-label="Voltar para a oferta"
    >
      <ArrowUp className="h-7 w-7 text-primary-foreground" />
    </Button>
  );
}
