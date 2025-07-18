import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rocket, ShieldCheck, CheckSquare, Package, MessageCircle, Ear, Users, Clapperboard } from "lucide-react";
import type { OfferFeature } from "@/lib/types";

const modulos: OfferFeature[] = [
  { name: "MÓDULO 1: FUNDAMENTOS DA PRESENÇA INVISÍVEL", description: "Os 7 pilares da energia magnética, como ativar seu campo de influência, técnicas de respiração e postura." },
  { name: "MÓDULO 2: LINGUAGEM CORPORAL MAGNÉTICA", description: "Micromovimentos, uso do olhar, gestos de confiança e caminhada de liderança." },
  { name: "MÓDULO 3: ENERGIA SILENCIOSA", description: "Criar curiosidade, dominar o silêncio estratégico e criar sua assinatura energética pessoal." },
  { name: "MÓDULO 4: APLICAÇÃO PRÁTICA", description: "Estratégias para trabalho, eventos sociais, relacionamentos e networking." },
  { name: "MÓDULO 5: CASOS REAIS E TROUBLESHOOTING", description: "20 situações práticas resolvidas, erros comuns e adaptações para diferentes personalidades." },
];

const icons = [
  <Package key="package" className="w-8 h-8 text-primary" />,
  <MessageCircle key="message" className="w-8 h-8 text-primary" />,
  <Ear key="ear" className="w-8 h-8 text-primary" />,
  <Users key="users" className="w-8 h-8 text-primary" />,
  <Clapperboard key="clapperboard" className="w-8 h-8 text-primary" />,
];


export function OfertaSection() {
  return (
    <section className="grid lg:grid-cols-2 gap-12 items-start">
      <div className="flex flex-col gap-6">
        {modulos.map((modulo, index) => (
          <Card key={modulo.name} className="bg-card/70 border-primary/20 hover:border-primary/50 transition-colors duration-300 transform hover:-translate-y-1">
            <CardHeader>
              <div className="flex items-start gap-4">
                {icons[index % icons.length]}
                <CardTitle className="text-xl font-semibold leading-tight">{modulo.name}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground ml-12">{modulo.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="sticky top-16">
        <Card className="bg-card/80 border-2 border-primary/30 shadow-2xl shadow-primary/20 p-6 md:p-8 text-center flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">O MAGNETISMO OCULTO</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Valor Total dos Módulos: <span className="line-through">R$ 147</span>
            </p>
            <p className="text-lg text-primary font-bold">OFERTA ESPECIAL APENAS HOJE:</p>
            
            <div className="my-6 w-full max-w-md">
                 <Image
                    src="https://placehold.co/600x400.png"
                    alt="Produto Magnetismo Oculto"
                    width={600}
                    height={400}
                    data-ai-hint="product bundle ebook"
                    className="rounded-lg"
                  />
            </div>

            <p className="text-lg text-muted-foreground">Apenas</p>
            <p className="text-6xl md:text-7xl font-bold text-white my-2">R$ 37,90</p>
            <p className="text-sm text-muted-foreground">Pagamento único. Acesso vitalício ao conteúdo e suporte por e-mail.</p>
            
            <p className="max-w-md my-6 text-sm text-muted-foreground">
                Se a sua autoestima não vale esse valor, então meu caro eu não posso te ajudar. Esse treinamento literalmente não é pra quem não pode dispor dessa quantia...
            </p>

            <Button size="lg" className="w-full max-w-sm h-14 font-bold text-xl bg-gradient-to-r from-primary to-purple-600 text-primary-foreground transition-all duration-300 ease-in-out hover:shadow-[0_0_25px_hsl(var(--primary))] shadow-[0_0_15px_hsl(var(--primary))] border-2 border-primary/50">
              <Rocket className="w-6 h-6 mr-3" />
              QUERO AGORA
            </Button>
            
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-green-500" />
                    <span>Acesso Imediato</span>
                </div>
                <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-yellow-400" />
                    <span>Garantia de 7 Dias</span>
                </div>
                <div className="flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-green-500" />
                    <span>Pagamento Seguro</span>
                </div>
            </div>
        </Card>
      </div>
    </section>
  );
}
