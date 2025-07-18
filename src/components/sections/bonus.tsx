import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BookOpen, Gift, ShieldCheck } from "lucide-react";

export function BonusSection() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
        Receba Também Estes Bônus Exclusivos <span className="text-primary">(Valor: R$147)</span>
      </h2>
      <p className="mt-4 max-w-2xl text-lg text-center text-muted-foreground">
        Adquira agora e você também receberá estes bônus, essa promoção é por tempo limitado para acelerar seu sucesso.
      </p>
      <div className="mt-12 grid md:grid-cols-3 gap-8 w-full">
        <Card className="text-center bg-card/50 border-primary/30 hover:border-primary/60 transition-colors">
          <CardHeader className="items-center">
            <Gift className="w-10 h-10 text-primary mb-3" />
            <CardTitle className="text-xl font-bold">Bônus #1: Manual de Frases Prontas (Valor: R$47)</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>50 frases testadas para iniciar conversas e criar conexão. Nunca mais fique sem saber o que dizer para ela.</CardDescription>
          </CardContent>
        </Card>
        <Card className="text-center bg-card/50 border-primary/30 hover:border-primary/60 transition-colors">
          <CardHeader className="items-center">
            <BookOpen className="w-10 h-10 text-primary mb-3" />
            <CardTitle className="text-xl font-bold">Bônus #2: Guia de Postura Masculina (Valor: R$67)</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>Como usar sua linguagem corporal para demonstrar confiança e atrair atenção feminina sem falar nada.</CardDescription>
          </CardContent>
        </Card>
        <Card className="text-center bg-card/50 border-primary/30 hover:border-primary/60 transition-colors">
          <CardHeader className="items-center">
            <ShieldCheck className="w-10 h-10 text-primary mb-3" />
            <CardTitle className="text-xl font-bold">Bônus #3: Técnicas Anti-Nervosismo (Valor: R$33)</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>Métodos simples para controlar a ansiedade e se sentir seguro quando falar com mulheres.</CardDescription>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
