import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, CheckSquare, X, ShieldCheck, CreditCard, MousePointerClick, TrendingUp } from "lucide-react";
import Link from "next/link";

const caminho1Items = [
  "Permanecer invisível",
  "Ser esquecido em reuniões",
  "Passar despercebido pelas mulheres",
  "Gastar dinheiro em soluções inúteis",
  "Envelhecer sem realizar sem conquistar o amor da sua vida",
  "Morrer se perguntando \"e se...?\"",
];

const caminho2Items = [
  "Ativar seu magnetismo",
  "Ser notado e respeitado",
  "Atrair a garota que voce tanto gosta",
  "Desenvolver confiança genuína",
  "Viver sua melhor versão",
  "Olhar para trás sem arrependimentos",
];

export function FinalCtaSection() {
  return (
    <section className="text-center flex flex-col items-center bg-card/50 rounded-xl p-8 md:p-16 border border-primary/20">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight flex items-center justify-center flex-wrap gap-3">
        <TrendingUp className="w-10 h-10 text-primary" />
        <span>AGORA VOCÊ TEM DUAS ESCOLHAS, E DOIS DESTINOS:</span>
      </h2>
      
      <div className="mt-12 grid md:grid-cols-2 gap-8 w-full max-w-5xl">
        <Card className="bg-red-900/20 border-red-500/50 text-left p-6">
          <CardHeader className="p-0">
            <CardTitle className="flex items-center gap-3 text-red-400 font-bold text-xl">
              <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                <X className="w-4 h-4 text-white" />
              </div>
              CAMINHO 1: CONTINUAR COMO ESTÁ
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 mt-4">
            <ul className="space-y-2 text-muted-foreground">
              {caminho1Items.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        
        <Card className="bg-green-900/20 border-green-500/50 text-left p-6">
          <CardHeader className="p-0">
            <CardTitle className="flex items-center gap-3 text-green-400 font-bold text-xl">
              <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
              CAMINHO 2: TRANSFORMAÇÃO AGORA
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 mt-4">
            <ul className="space-y-2 text-muted-foreground">
              {caminho2Items.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <p className="mt-12 max-w-3xl text-lg text-muted-foreground">
        Você chegou até aqui porque algo dentro de você sabe que merece mais. Mais respeito, mais atenção, mais oportunidades. A ciência prova: isso não é sorte ou genética. É técnica. É método. É possível. Pare de adiar. Comece agora.
      </p>

      <h3 className="mt-12 text-2xl font-bold flex items-center justify-center flex-wrap gap-3 text-primary">
        <MousePointerClick className="w-7 h-7" />
        <span>Clique agora e aprenda como conquista a garota dos sonhos:</span>
      </h3>
      
      <Link href="https://www.youtube.com/" target="_blank">
        <Button size="lg" className="mt-8 h-16 w-full max-w-md font-bold text-2xl bg-gradient-to-r from-primary to-purple-600 text-primary-foreground rounded-full transition-all duration-300 ease-in-out hover:shadow-[0_0_35px_hsl(var(--primary))] shadow-[0_0_20px_hsl(var(--primary))] border-2 border-primary/50">
          QUERO AGORA
        </Button>
      </Link>

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
          <CreditCard className="w-4 h-4 text-blue-400" />
          <span>Pagamento Seguro</span>
        </div>
      </div>
    </section>
  );
}
