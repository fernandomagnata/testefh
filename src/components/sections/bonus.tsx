import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Gift, BookOpen, Video } from "lucide-react";

export function BonusSection() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
        Garanta Estes Bônus Exclusivos <span className="text-primary">(Valor: R$497)</span>
      </h2>
      <p className="mt-4 max-w-2xl text-lg text-center text-muted-foreground">
        Aja agora e você também receberá estes bônus por tempo limitado para acelerar seu sucesso.
      </p>
      <div className="mt-12 grid md:grid-cols-3 gap-8 w-full">
        <Card className="text-center bg-card/50 border-primary/30 hover:border-primary/60 transition-colors">
          <CardHeader className="items-center">
            <Gift className="w-10 h-10 text-primary mb-3" />
            <CardTitle className="text-xl font-bold">Bônus #1: Kit de Produtividade</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>Uma coleção curada de templates, checklists e recursos para você começar rápido.</CardDescription>
          </CardContent>
        </Card>
        <Card className="text-center bg-card/50 border-primary/30 hover:border-primary/60 transition-colors">
          <CardHeader className="items-center">
            <BookOpen className="w-10 h-10 text-primary mb-3" />
            <CardTitle className="text-xl font-bold">Bônus #2: Masterclass 'Deep Work'</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>Um guia aprofundado para eliminar distrações e alcançar concentração máxima.</CardDescription>
          </CardContent>
        </Card>
        <Card className="text-center bg-card/50 border-primary/30 hover:border-primary/60 transition-colors">
          <CardHeader className="items-center">
            <Video className="w-10 h-10 text-primary mb-3" />
            <CardTitle className="text-xl font-bold">Bônus #3: Série de Entrevistas com Especialistas</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>Entrevistas exclusivas com líderes da indústria sobre seus segredos de produtividade.</CardDescription>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
