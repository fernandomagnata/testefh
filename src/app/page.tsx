import { HeroSection } from '@/components/sections/hero';
import { IntroductionSection } from '@/components/sections/introduction';
import { ProblemSolutionSection } from '@/components/sections/problem-solution';
import { OfferSection } from '@/components/sections/offer';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { BonusesSection } from '@/components/sections/bonuses';
import { QASection } from '@/components/sections/qa';
import { GuaranteeSection } from '@/components/sections/guarantee';
import { FinalCtaSection } from '@/components/sections/final-cta';

export default function Home() {
  return (
    <main className="flex flex-col items-center overflow-x-hidden">
      <div className="w-full max-w-6xl px-4 md:px-8 flex flex-col gap-24 md:gap-32 py-16 md:py-24">
        <HeroSection />
        <IntroductionSection />
        <ProblemSolutionSection />
        <OfferSection />
        <TestimonialsSection />
        <BonusesSection />
        <QASection />
        <GuaranteeSection />
        <FinalCtaSection />
      </div>
    </main>
  );
}
