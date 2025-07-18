import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { XCircle, CheckCircle } from "lucide-react";

export function ProblemaSolucaoSection() {
  return (
    <section className="flex flex-col items-center text-center">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Cansado do Jeito Antigo?</h2>
      <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
        Entendemos as frustrações de fluxos de trabalho dispersos e processos ineficientes. Veja como mudamos o jogo.
      </p>
      <div className="mt-12 grid md:grid-cols-2 gap-8 w-full">
        <Card className="bg-card/80 border-destructive/50">
          <CardHeader className="items-center">
            <XCircle className="w-12 h-12 text-destructive mb-4" />
            <CardTitle className="text-2xl font-semibold text-destructive/90">O Problema</CardTitle>
            <CardDescription className="text-muted-foreground mt-2 text-base">
              Informações dispersas, prazos perdidos e a constante troca de contexto drenam sua energia e potencial. Suas ferramentas deveriam ajudar, não atrapalhar.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="bg-card/80 border-green-500/50">
          <CardHeader className="items-center">
            <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
            <CardTitle className="text-2xl font-semibold text-green-400/90">A Solução</CardTitle>
            <CardDescription className="text-muted-foreground mt-2 text-base">
              Um centro de comando unificado para todo o seu trabalho. Luminous reúne tudo, fornecendo uma única fonte de verdade e um caminho claro para o sucesso.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
}
