import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package } from "lucide-react";

const modules = [
  {
    title: "MÓDULO 1: FUNDAMENTOS DA PRESENÇA INVISÍVEL",
    description: "Os 7 pilares da energia magnética, como ativar seu campo de influência, técnicas de respiração e postura.",
  },
  {
    title: "MÓDULO 2: LINGUAGEM CORPORAL MAGNÉTICA",
    description: "Micromovimentos, uso do olhar, gestos de confiança e caminhada de liderança.",
  },
  {
    title: "MÓDULO 3: ENERGIA SILENCIOSA",
    description: "Criar curiosidade, dominar o silêncio estratégico e criar sua assinatura energética pessoal.",
  },
  {
    title: "MÓDULO 4: APLICAÇÃO PRÁTICA",
    description: "Estratégias para trabalho, eventos sociais, relacionamentos e networking.",
  },
  {
    title: "MÓDULO 5: CASOS REAIS E TROUBLESHOOTING",
    description: "20 situações práticas resolvidas, erros comuns e adaptações para diferentes personalidades.",
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
