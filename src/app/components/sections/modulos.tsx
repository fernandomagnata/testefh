import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Package } from "lucide-react";

const modules = [
  {
    title: "MÓDULO 1: MAGNETISMO INTERIOR",
    description: "Desenvolva sua confiança autêntica, presença magnética e energia que atrai naturalmente.",
  },
  {
    title: "MÓDULO 2: LINGUAGEM CORPORAL HIPNÓTICA",
    description: "Domine o olhar magnético, postura de comando e voz que transmite liderança.",
  },
  {
    title: "MÓDULO 3: PSICOLOGIA DA ATRAÇÃO FEMININA",
    description: "Descubra os gatilhos emocionais femininos e como criar tensão e mistério irresistíveis.",
  },
  {
    title: "MÓDULO 4: SEDUÇÃO SOCIAL",
    description: "Aprenda a dominar ambientes sociais, construir prova social e elevar seu status.",
  },
  {
    title: "MÓDULO 5: COMUNICAÇÃO PERSUASIVA",
    description: "Torne-se um mestre em storytelling magnético e escuta profunda que gera conexão.",
  },
];

export function ModulosSection() {
  return (
    <section className="flex flex-col items-center text-center">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        O Que Você Vai Aprender
      </h2>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Uma visão geral do conteúdo transformador que espera por você.
      </p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {modules.map((module, index) => (
          <Card key={index} className="bg-card/50 border-primary/30 text-left p-4 flex flex-col">
            <CardHeader className="flex-row items-start gap-4 space-y-0 pb-4">
              <div className="p-2 bg-primary/20 rounded-md">
                <Package className="w-6 h-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-lg font-bold leading-tight">{module.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-grow pt-0">
              <p className="text-muted-foreground">{module.description}</p>
            </CardContent>
          </Card>
        ))}
        <Card className="bg-card/50 border-primary/30 text-left p-4 flex flex-col md:col-span-2 lg:col-span-1">
          <CardHeader className="flex-row items-start gap-4 space-y-0 pb-4">
            <div className="p-2 bg-primary/20 rounded-md">
                <Package className="w-6 h-6 text-primary" />
            </div>
            <div>
              <CardTitle className="text-lg font-bold leading-tight">E MUITO MAIS...</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="flex-grow pt-0">
            <p className="text-muted-foreground">O curso completo contém 10 módulos com atualizações futuras para garantir sua maestria na arte da atração.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
