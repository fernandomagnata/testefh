import { AberturaSection } from '@/components/sections/abertura';
import { IntroducaoSection } from '@/components/sections/introducao';
import { SituacoesSection } from '@/components/sections/situacoes';
import { ProblemaSolucaoSection } from '@/components/sections/problema-solucao';
import { PersuasaoOcultaSection } from '@/components/sections/persuasao-oculta';
import { MasterclassSection } from '@/components/sections/masterclass';
import { ResultadosSection } from '@/components/sections/resultados';
import { OfertaSection } from '@/components/sections/oferta';
import { DepoimentosSection } from '@/components/sections/depoimentos';
import { BonusSection } from '@/components/sections/bonus';
import { PerguntasRespostasSection } from '@/components/sections/perguntas-respostas';
import { GarantiaSection } from '@/components/sections/garantia';
import { FinalCtaSection } from '@/components/sections/final-cta';
import { FooterSection } from '@/components/sections/footer';

export default function Home() {
  return (
    <div className="flex flex-col items-center overflow-x-hidden">
      <main className="w-full max-w-6xl px-4 md:px-8 flex flex-col gap-24 md:gap-32 py-16 md:py-24">
        <AberturaSection />
        <IntroducaoSection />
        <SituacoesSection />
        <ProblemaSolucaoSection />
        <PersuasaoOcultaSection />
        <MasterclassSection />
        <ResultadosSection />
        <OfertaSection />
        <BonusSection />
        <DepoimentosSection />
        <PerguntasRespostasSection />
        <GarantiaSection />
        <FinalCtaSection />
      </main>
      <FooterSection />
    </div>
  );
}
