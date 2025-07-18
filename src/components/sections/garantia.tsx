import { ShieldCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function GarantiaSection() {
  return (
    <section className="w-full flex justify-center">
      <Card className="max-w-3xl w-full bg-gradient-to-br from-card/60 to-background border-2 border-primary/40 shadow-xl shadow-primary/10">
        <CardContent className="p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
          <ShieldCheck className="w-24 h-24 md:w-32 md:h-32 text-primary flex-shrink-0" />
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold">GARANTIA DE 7 DIAS PARA REEMBOLSO</h3>
            <p className="mt-4 text-lg text-muted-foreground">
              Estamos confiantes de que você vai obter resultados com o Magnetismo Oculto. Por isso, oferecemos uma garantia de 7 dias sem risco para você. Se por qualquer motivo você não estiver satisfeito, simplesmente nos informe dentro de 7 dias da sua compra e processaremos o reembolso integral. Sem burocracias. Esta é nossa demonstração de confiança no método que desenvolvemos e nossa forma de garantir que você possa iniciar seu aprendizado com tranquilidade e segurança.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Você tem 7 dias completos para experimentar, aplicar e comprovar os resultados. Se não ficar 100% satisfeito, devolvemos cada centavo investido.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
