import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, BrainCircuit, BarChart, Users, CheckSquare } from "lucide-react";
import type { OfferFeature } from "@/lib/types";

const features: OfferFeature[] = [
  { name: "Automação com IA", description: "Automatize tarefas repetitivas e foque no que realmente importa." },
  { name: "Insights Inteligentes", description: "Receba sugestões baseadas em dados para otimizar seu fluxo de trabalho." },
  { name: "Acompanhamento de Progresso", description: "Visualize seu sucesso com painéis bonitos e intuitivos." },
  { name: "Colaboração em Equipe", description: "Trabalhe perfeitamente com sua equipe em um ambiente sincronizado." },
  { name: "Gerenciamento de Tarefas", description: "Organize, priorize e execute tarefas com uma facilidade incomparável." },
];

const icons = [
  <Zap key="zap" className="w-8 h-8 text-primary" />,
  <BrainCircuit key="brain" className="w-8 h-8 text-primary" />,
  <BarChart key="barchart" className="w-8 h-8 text-primary" />,
  <Users key="users" className="w-8 h-8 text-primary" />,
  <CheckSquare key="check" className="w-8 h-8 text-primary" />,
];

export function OfertaSection() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">O Que Você Vai Receber</h2>
      <p className="mt-4 max-w-2xl text-lg text-center text-muted-foreground">
        Isso não é apenas mais uma ferramenta. É um sistema completo para alcançar a excelência.
      </p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {features.map((feature, index) => (
          <Card key={feature.name} className="bg-card/70 border-primary/20 hover:border-primary/50 transition-colors duration-300 transform hover:-translate-y-1">
            <CardHeader>
              <div className="flex items-center gap-4">
                {icons[index % icons.length]}
                <CardTitle className="text-xl font-semibold">{feature.name}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
         <Card className="bg-card/70 border-primary/20 hover:border-primary/50 transition-colors duration-300 transform hover:-translate-y-1 md:col-span-2 lg:col-span-1">
            <CardHeader>
              <div className="flex items-center gap-4">
                <CheckSquare className="w-8 h-8 text-primary" />
                <CardTitle className="text-xl font-semibold">E muito mais...</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Atualizações contínuas, suporte premium e uma comunidade exclusiva.</p>
            </CardContent>
          </Card>
      </div>
    </section>
  );
}
