'use client';

import { useState, useEffect } from 'react';
import { 
  AberturaSection,
  IntroducaoSection,
  SituacoesSection,
  ProblemaSolucaoSection,
  PersuasaoOcultaSection,
  ResultadosSection,
  ModulosSection,
  OfertaSection,
  DepoimentosSection,
  BonusSection,
  PerguntasRespostasSection,
  GarantiaSection,
  FinalCtaSection,
  FooterSection
} from '@/app/components/sections';
import { FloatingCtaButton } from '@/app/components/shared/floating-cta-button';

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 10000); // 10 segundos

    return () => clearTimeout(timer); // Limpa o timer se o componente for desmontado
  }, []);


  return (
    <div className="flex flex-col items-center overflow-x-hidden">
      <main className="w-full max-w-6xl px-4 md:px-8 flex flex-col gap-24 md:gap-32 py-16 md:py-24">
        <AberturaSection />
        {showContent && (
          <>
            <IntroducaoSection />
            <SituacoesSection />
            <ProblemaSolucaoSection />
            <PersuasaoOcultaSection />
            <ResultadosSection />
            <ModulosSection />
            <OfertaSection />
            <DepoimentosSection />
            <BonusSection />
            <PerguntasRespostasSection />
            <GarantiaSection />
            <FinalCtaSection />
          </>
        )}
      </main>
      <FooterSection />
      <FloatingCtaButton isVisible={showContent} />
    </div>
  );
}
