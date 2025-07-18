import { Card, CardHeader, CardTitle, CardContent } from "@/app/components/ui/card";
import { XCircle, CheckCircle, AlertTriangle, Check, ShieldCheck } from "lucide-react";

const problemItems = [
  "Você fica apenas observando ela de longe",
  "Quando tenta puxar conversa, ela responde com monossilabos",
  "Você trava, gagueja e não sabe dar continuidade",
  "Ela perde o interesse rapidamente e você se sente rejeitado",
];

const solutionItems = [
  "Como iniciar conversas de forma natural e envolvente",
  "As primeiras frases que despertam curiosidade instantânea",
  "Como manter o papo fluindo sem momentos constrangedores",
  "Como fazer ela querer continuar falando com você",
];

export function ProblemaSolucaoSection() {
  return (
    <section className="flex flex-col items-center text-center">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Cansado de Não Conseguir Chegar Nela?</h2>
      <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
        Entendemos a frustração de ver a garota que você gosta e simplesmente não conseguir falar com ela. Veja como mudamos o jogo.
      </p>
      <div className="mt-12 grid md:grid-cols-2 gap-8 w-full">
        <Card className="bg-card/80 border-destructive/50 text-left">
          <CardHeader className="flex-row items-center gap-4">
            <XCircle className="w-10 h-10 text-destructive flex-shrink-0" />
            <CardTitle className="text-2xl font-semibold text-destructive/90">O PROBLEMA</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-muted-foreground mb-4">Você vê aquela garota que desperta seu interesse, mas na hora de chegar nela, sua mente fica em branco. Você não sabe como começar, o que falar, ou como manter uma conversa interessante.</p>
            <p className="font-semibold text-foreground mb-3">A dura realidade:</p>
            <ul className="space-y-2">
              {problemItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-destructive/80 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card className="bg-card/80 border-green-500/50 text-left">
           <CardHeader className="flex-row items-center gap-4">
            <CheckCircle className="w-10 h-10 text-green-500 flex-shrink-0" />
            <CardTitle className="text-2xl font-semibold text-green-400/90">A SOLUÇÃO</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-muted-foreground mb-4">Um método científico que ensina exatamente como chegar em qualquer garota com naturalidade e segurança. O Magnetismo Oculto decodifica a arte da primeira abordagem e te dá as ferramentas para nunca mais travar.</p>
            <p className="font-semibold text-foreground mb-3">O que você vai dominar:</p>
            <ul className="space-y-2">
                {solutionItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <ShieldCheck className="w-5 h-5 text-green-500/80 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                    </li>
                ))}
            </ul>
            <p className="text-sm italic text-muted-foreground/80 mt-6">Não é sobre decorar frases prontas. É sobre desenvolver a habilidade natural de se conectar com qualquer mulher.</p>
          </CardContent>
        </Card>
      </div>
      <p className="mt-8 text-xl font-semibold text-primary">Pare de ser mais um na multidão. Seja o cara que ela quer conhecer.</p>
    </section>
  );
}
