'use client';

import { useState } from 'react';
import type { Testimonial } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { handleSummarizeTestimonial } from '@/app/actions';
import { StarRating } from '@/components/shared/star-rating';
import { Sparkles, Loader2 } from 'lucide-react';

const testimonialsData: Testimonial[] = [
  { id: '1', name: 'Sarah J.', avatarUrl: 'https://placehold.co/100x100.png', rating: 5, quote: "Este produto transformou completamente meu fluxo de trabalho. Estou economizando pelo menos 10 horas por semana. A interface é intuitiva e os recursos são incrivelmente poderosos. Não consigo imaginar voltar a como eu trabalhava antes. É um divisor de águas absoluto para qualquer um que leve a produtividade a sério." },
  { id: '2', name: 'Mike R.', avatarUrl: 'https://placehold.co/100x100.png', rating: 5, quote: "Eu estava cético no início, mas o Luminous cumpriu todas as suas promessas. Os insights de IA são surpreendentemente precisos e me ajudaram a identificar gargalos que eu nem sabia que tinha. Os recursos de colaboração em equipe também são de primeira linha, facilitando manter todos na mesma página." },
  { id: '3', name: 'Emily K.', avatarUrl: 'https://placehold.co/100x100.png', rating: 4, quote: "Uma ferramenta fantástica que realmente melhorou meu foco e organização. Houve uma pequena curva de aprendizado com alguns dos recursos avançados, mas o suporte ao cliente foi excelente em me guiar. Altamente recomendado para profissionais que buscam subir de nível." },
];

export function DepoimentosSection() {
  const [summaries, setSummaries] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState<Record<string, boolean>>({});
  const { toast } = useToast();

  const onSummarize = async (id: string, quote: string) => {
    if (summaries[id]) {
      setSummaries(prev => {
        const newSummaries = { ...prev };
        delete newSummaries[id];
        return newSummaries;
      });
      return;
    }

    setLoading((prev) => ({ ...prev, [id]: true }));
    const result = await handleSummarizeTestimonial(quote);
    if (result.success && result.summary) {
      setSummaries((prev) => ({ ...prev, [id]: result.summary! }));
    } else {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: result.error,
      });
    }
    setLoading((prev) => ({ ...prev, [id]: false }));
  };

  return (
    <section className="flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">Amado por Profissionais do Mundo Inteiro</h2>
      <p className="mt-4 max-w-2xl text-lg text-center text-muted-foreground">
        Não acredite apenas na nossa palavra. Veja o que nossos usuários têm a dizer.
      </p>
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
        {testimonialsData.map((testimonial) => (
          <Card key={testimonial.id} className="bg-card/70 border-primary/20 flex flex-col justify-between">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Avatar>
                  <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} data-ai-hint="person portrait" />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <StarRating rating={testimonial.rating} />
                </div>
              </div>
              
              {summaries[testimonial.id] ? (
                <div className="border-l-2 border-accent pl-4">
                  <p className="text-muted-foreground italic">&quot;{summaries[testimonial.id]}&quot;</p>
                  <p className="text-xs text-accent mt-2">Resumido por IA</p>
                </div>
              ) : (
                <p className="text-muted-foreground italic">&quot;{testimonial.quote}&quot;</p>
              )}
            </CardContent>
            <div className="p-6 pt-0">
              <Button
                variant="outline"
                className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                onClick={() => onSummarize(testimonial.id, testimonial.quote)}
                disabled={loading[testimonial.id]}
              >
                {loading[testimonial.id] ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <Sparkles className="w-4 h-4 mr-2" />
                )}
                {summaries[testimonial.id] ? 'Ver Original' : 'Resumir com IA'}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
