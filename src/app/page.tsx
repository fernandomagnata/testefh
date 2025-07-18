
import { AberturaSection } from '@/app/components/sections/abertura';
import { IntroducaoSection } from '@/app/components/sections/introducao';
import { SituacoesSection } from '@/app/components/sections/situacoes';
import { ProblemaSolucaoSection } from '@/app/components/sections/problema-solucao';
import { PersuasaoOcultaSection } from '@/app/components/sections/persuasao-oculta';
import { ResultadosSection } from '@/app/components/sections/resultados';
import { ModulosSection } from '@/app/components/sections/modulos';
import { OfertaSection } from '@/app/components/sections/oferta';
import { DepoimentosSection } from '@/app/components/sections/depoimentos';
import { BonusSection } from '@/app/components/sections/bonus';
import { PerguntasRespostasSection } from '@/app/components/sections/perguntas-respostas';
import { GarantiaSection } from '@/app/components/sections/garantia';
import { FinalCtaSection } from '@/app/components/sections/final-cta';
import { FooterSection } from '@/app/components/sections/footer';
import { FloatingCtaButton } from '@/app/components/shared/floating-cta-button';

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
