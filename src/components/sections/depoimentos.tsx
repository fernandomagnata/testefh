import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';

const testimonialsData = [
  {
    name: 'Maria Silva',
    avatar: 'https://placehold.co/100x100.png',
    quote:
      'Fiz o recheio de leite ninho e vendi tudo em uma tarde! Lucrei R$280 no primeiro final de semana. As receitas são muito fáceis e deliciosas.',
  },
  {
    name: 'Ana Santos',
    avatar: 'https://placehold.co/100x100.png',
    quote:
      'Comecei vendendo para família e hoje tenho uma clientela fiel. O curso pagou-se na primeira semana. O recheio de chocolate belga é o mais vendido!',
  },
  {
    name: 'Juliana Oliveira',
    avatar: 'https://placehold.co/100x100.png',
    quote:
      'Sou mãe solo e precisava de uma renda extra. Com as receitas, consigo fazer R$1.200 por mês trabalhando só nos finais de semana.',
  },
  {
    name: 'Patrícia Mendes',
    avatar: 'https://placehold.co/100x100.png',
    quote:
      'As receitas são um sucesso! Comecei com uma encomenda pequena e hoje faço mais de 20 potes por semana. Obrigada pela oportunidade!',
  },
];

export function DepoimentosSection() {
  return (
    <section className="flex flex-col items-center">
      <div className="mb-16 text-center w-full max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Assista e <span className="text-primary">descubra</span> como é fácil começar
        </h2>
        <div className="mt-8 w-full max-w-2xl mx-auto aspect-video bg-card rounded-lg border border-primary/20 flex items-center justify-center shadow-lg">
           <p className="text-muted-foreground">[Seu Vídeo de Depoimento Aqui]</p>
        </div>
      </div>

      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
        Veja o que quem já comprou está dizendo:
      </h2>
      <p className="mt-2 text-lg text-center text-muted-foreground">
        Histórias reais de mulheres que transformaram suas vidas
      </p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {testimonialsData.map((testimonial) => (
          <Card
            key={testimonial.name}
            className="bg-card/70 border-border/70 relative pl-8"
          >
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-primary rounded-l-lg" />
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint="person portrait" />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <p className="font-semibold text-foreground text-lg">{testimonial.name}</p>
              </div>
              <p className="text-muted-foreground">{testimonial.quote}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
