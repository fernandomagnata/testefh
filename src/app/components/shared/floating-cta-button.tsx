'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/app/components/ui';
import { cn } from '@/app/lib/utils';

export function FloatingCtaButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // This function will only be defined and used on the client side.
    const handleScroll = () => {
      const offerSection = document.getElementById('oferta');
      if (offerSection) {
        const { top } = offerSection.getBoundingClientRect();
        // Show button if the user has scrolled past the top of the offer section
        setIsVisible(top < window.innerHeight);
      } else {
        // If the offer section is not found, maybe we are on another page.
        // We can decide to hide the button.
        setIsVisible(false);
      }
    };

    // Attach event listener only on the client
    window.addEventListener('scroll', handleScroll);
    
    // Initial check in case the page loads already past the section
    handleScroll();

    // Cleanup function to remove the listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

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
