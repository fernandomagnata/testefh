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
    // Inicia um temporizador para mostrar o conteúdo após 10 segundos.
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 10000); // 10000 milissegundos = 10 segundos

    // Limpa o temporizador se o componente for desmontado antes do tempo.
    return () => clearTimeout(timer);
  }, []); // O array de dependências vazio garante que isso rode apenas uma vez.

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
