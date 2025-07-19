
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
import { FloatingCtaButton } from '@/app/components/ui';

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
