import { XCircle } from "lucide-react";

const situations = [
  {
    title: "Viu ela olhando e não teve coragem de chegar.",
    description: "Aquela gata no bar te deu várias olhadas, mas você ficou lá parado igual um idiota assistindo outro cara chegar nela."
  },
  {
    title: "Ela estava claramente interessada mas você não soube o que fazer.",
    description: "Todos os sinais estavam ali - risadas, toques, olhares - mas você travou como um beta e ela perdeu o interesse."
  },
  {
    title: "Perdeu a mulher que você queria para um cara inferior.",
    description: "Ela escolheu um babaca que ganha menos, é mais feio e trata ela mal... enquanto você, o \"cara legal\", ficou assistindo."
  },
  {
    title: "Levou um fora por demonstrar fraqueza.",
    description: "Ela se afastou porque você ficou carente, inseguro ou ciumento demais. Mostrou que não é o cara alfa que ela pensava."
  },
  {
    title: "Ela esfriou do nada e você não entendeu o porquê.",
    description: "Tudo perfeito até que ela começou a te ignorar, demorar pra responder e inventar desculpas. Você virou apenas mais um."
  }
];

export function SituacoesSection() {
  return (
    <section className="flex flex-col items-center text-center w-full max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
        Você já passou por alguma dessas situações?
      </h2>
      <div className="w-full flex flex-col gap-6">
        {situations.map((situation, index) => (
          <div key={index} className="flex items-start gap-4 p-4 rounded-lg border border-primary/30 bg-card/50 text-left shadow-lg">
            <XCircle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <p className="text-lg font-semibold text-foreground">{situation.title}</p>
              <p className="text-base text-muted-foreground mt-1">{situation.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center space-y-2 text-lg text-muted-foreground">
        <p>Se você se identificou com pelo menos uma dessas situações, é porque você ainda não aprendeu as regras do jogo.</p>
        <p className="font-semibold text-primary">Enquanto você fica na sua, outros homens estão levando as mulheres que você quer.</p>
      </div>
    </section>
  );
}
