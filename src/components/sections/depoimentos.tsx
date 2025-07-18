'use client';

import type { Testimonial } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquareText } from 'lucide-react';

const testimonialsData: Omit<Testimonial, 'avatarUrl' | 'rating' | 'id'>[] = [
  { 
    name: 'Felipe A., 29 anos - Analista de Sistemas', 
    quote: "Achei que precisava ser um cara completamente diferente pra atrair mulheres. Mas bastou ajustar o jeito que eu ando, olho e respiro. É surreal como isso muda tudo. Até minha mãe perguntou o que aconteceu comigo." 
  },
  { 
    name: 'Ricardo M., 38 anos - Empresário', 
    quote: "Pensei que fosse mais um metodo furado. Só que no primeiro módulo já vi que era outra pegada: nada de teoria chata. É prática real, que muda sua energia. Só de passar mais confiança, meu faturamento subiu 60% e as mulheres começaram a me olhar diferente." 
  },
  { 
    name: 'Henrique S., 42 anos - Advogado', 
    quote: "Tava cansado de ser invisível. Hoje, entro em qualquer lugar e sinto os olhares em mim. Até minha ex disse que eu tô 'com outra vibe'. O mais louco? Nem troquei de roupa. Só mudei o jeito de me posicionar no mundo, e elas sentem." 
  },
];

export function DepoimentosSection() {
  return (
    <section className="flex flex-col items-center">
      <div className="flex flex-col md:flex-row items-center justify-center text-center gap-4">
        <div className="bg-primary p-2 rounded-lg">
          <MessageSquareText className="w-10 h-10 text-primary-foreground" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
          O QUE HOMENS QUE CONSEGUIRAM DESATIVAR A PRESENÇA INVISÍVEL FALAM:
        </h2>
      </div>
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
        {testimonialsData.map((testimonial) => (
          <Card key={testimonial.name} className="bg-card/70 border-primary/40 flex flex-col p-6 rounded-lg">
            <CardContent className="p-0 flex-grow">
              <p className="text-muted-foreground italic">&quot;{testimonial.quote}&quot;</p>
            </CardContent>
            <footer className="mt-4">
              <p className="font-semibold text-foreground text-right">— {testimonial.name}</p>
            </footer>
          </Card>
        ))}
      </div>
    </section>
  );
}
