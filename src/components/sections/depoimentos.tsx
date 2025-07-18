
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';

const testimonialsData = [
  {
    name: 'Junior Costa',
    avatar: 'https://placehold.co/100x100.png',
    quote:
      'Sempre fui o cara invisível que as mulheres ignoravam. Depois do Magnetismo Oculto, conquistei não só a garota que eu admirava há 2 anos, mas ela que demonstrou interesse por mim! Hoje tenho várias opções. Realmente funciona!',
  },
  {
    name: 'Lucas Ferreira',
    avatar: 'https://placehold.co/100x100.png',
    quote:
      'Eu tinha zero sucesso com mulheres. Apliquei as técnicas por 2 semanas e já estava saindo com garotas que antes nem me davam bola. Meus amigos ficaram impressionados com a transformação. Virei outro homem!',
  },
  {
    name: 'Gabriel Santos',
    avatar: 'https://placehold.co/100x100.png',
    quote:
      'Sempre fui o "amigo" das mulheres. Friendzone era minha casa. Depois do curso, descobri como ser visto como homem de verdade. Semana passada uma ex me procurou perguntando "o que você mudou? Você está diferente".',
  },
  {
    name: 'Bruno Oliveira',
    avatar: 'https://placehold.co/100x100.png',
    quote:
      'Cara, isso mudou minha vida! Antes eu travava perto de mulher bonita. Agora eu comando a conversa e elas ficam interessadas. No último fim de semana consegui 3 contatos sem forçar nada. Sou uma nova pessoa!',
  },
];

export function DepoimentosSection() {
  return (
    <section className="flex flex-col items-center">
      <div className="mb-16 text-center w-full max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Assista e <span className="text-primary">Descubra</span> Como É Simples Despertar Seu Magnetismo
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-center text-muted-foreground mx-auto">
          Veja o depoimento do Rafael, que saiu da friendzone eterna e conquistou a atenção que sempre quis em menos de 14 dias usando o método.
        </p>
        <div className="mt-8 w-full max-w-2xl mx-auto aspect-video bg-card rounded-lg border border-primary/20 flex items-center justify-center shadow-lg overflow-hidden">
           <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
        Vou te mostrar mais alguns depoimentos:
      </h2>
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
