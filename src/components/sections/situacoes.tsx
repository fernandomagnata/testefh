import { XCircle } from "lucide-react";

const situations = [
  "Aquela sensação apavorante de não saber por onde começar uma conversa...",
  "Sentiu que ela estava atraída mas não teve confiança para tomar iniciativa.",
  "Perdeu alguma mulher e ainda soube que ela ficou com outro cara.",
  "Tomou um pé na bunda de alguma mulher por você ter sido inseguro ou ciumento.",
  "Do nada percebeu que a mulher que você pegava estava ficando fria e se afastando."
];

export function SituacoesSection() {
  return (
    <section className="flex flex-col items-center text-center w-full max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
        Você já passou por alguma dessas situações?
      </h2>
      <div className="w-full flex flex-col gap-4">
        {situations.map((situation, index) => (
          <div key={index} className="flex items-center gap-4 p-4 rounded-lg border border-primary/30 bg-card/50 text-left">
            <XCircle className="w-8 h-8 text-primary flex-shrink-0" />
            <p className="text-base md:text-lg text-muted-foreground">{situation}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
