import { ShieldCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function GarantiaSection() {
  return (
    <section className="w-full flex justify-center">
      <Card className="max-w-3xl w-full bg-gradient-to-br from-card/60 to-background border-2 border-primary/40 shadow-xl shadow-primary/10">
        <CardContent className="p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
          <ShieldCheck className="w-24 h-24 md:w-32 md:h-32 text-primary flex-shrink-0" />
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold">Nossa Garantia de 30 Dias para Devolução do Dinheiro</h3>
            <p className="mt-4 text-lg text-muted-foreground">
              Estamos tão confiantes de que você vai amar o Luminous que estamos oferecendo uma garantia de 30 dias sem riscos. Se você não estiver 100% satisfeito com sua compra, simplesmente nos avise dentro de 30 dias e nós lhe daremos um reembolso total. Sem burocracia, sem perguntas.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
