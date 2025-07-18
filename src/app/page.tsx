
import { AberturaSection } from '@/components/sections/abertura';
import { IntroducaoSection } from '@/components/sections/introducao';
import { SituacoesSection } from '@/components/sections/situacoes';
import { ProblemaSolucaoSection } from '@/components/sections/problema-solucao';
import { PersuasaoOcultaSection } from '@/components/sections/persuasao-oculta';
import { ResultadosSection } from '@/components/sections/resultados';
import { ModulosSection } from '@/components/sections/modulos';
import { OfertaSection } from '@/components/sections/oferta';
import { DepoimentosSection } from '@/components/sections/depoimentos';
import { BonusSection } from '@/components/sections/bonus';
import { PerguntasRespostasSection } from '@/components/sections/perguntas-respostas';
import { GarantiaSection } from '@/components/sections/garantia';
import { FinalCtaSection } from '@/components/sections/final-cta';
import { FooterSection } from '@/components/sections/footer';
import { FloatingCtaButton } from '@/components/shared/floating-cta-button';

export default function Home() {
  return (
    <div className="flex flex-col items-center overflow-x-hidden">
      <main className="w-full max-w-6xl px-4 md:px-8 flex flex-col gap-24 md:gap-32 py-16 md:py-24">
        <AberturaSection />
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
      </main>
      <FooterSection />
      <FloatingCtaButton />
    </div>
  );
}
