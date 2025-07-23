'use client';

import VturbPlayer from "./VturbPlayer";
import VturbPlayer2 from "./VturbPlayer2";
import Link from "next/link";
import Image from 'next/image';
import type { QAItem } from "@/app/lib/utils";
import { BrainCircuit, Users, BookOpen, Gift, ShieldCheck, Package, XCircle, CheckCircle, AlertTriangle, Check, TrendingUp, X, MousePointerClick, CreditCard, CheckSquare } from "lucide-react";

import { Button, Card, CardContent, CardHeader, CardTitle, CardDescription, Avatar, AvatarFallback, AvatarImage, Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/components/ui";

export function AberturaSection() {
  return (
    <section className="text-center flex flex-col items-center">
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-primary/70 pb-4">
        Desbloqueie Seu Magnetismo Masculino Oculto
      </h1>
      <p className="mt-4 max-w-2xl text-lg md:text-xl text-muted-foreground">
        Descubra o método científico secreto que transforma homens invisíveis em magnetos de atração feminina em menos de 21 dias.
      </p>
      <div className="my-8 w-full max-w-3xl aspect-video bg-card rounded-lg border border-primary/20 overflow-hidden">
        <VturbPlayer />
      </div>
      <Link href="https://payment.ticto.app/O37ED94FD" target="_blank">
        <Button size="lg" className="font-bold text-lg bg-gradient-to-r from-primary to-purple-600 text-primary-foreground transition-all duration-300 ease-in-out hover:shadow-[0_0_25px_hsl(var(--primary))] shadow-[0_0_15px_hsl(var(--primary))] border-2 border-primary/50">
          Comece Agora
        </Button>
      </Link>
    </section>
  );
}

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

const testimonialsData = [
  {
    name: 'Junior Costa',
    avatar: 'https://imgur.com/kGvG4cB.png',
    quote:
      'Sempre fui o cara invisível que as mulheres ignoravam. Depois do Magnetismo Oculto, conquistei não só a garota que eu admirava há 2 anos, mas ela que demonstrou interesse por mim! Hoje tenho várias opções. Realmente funciona!',
  },
  {
    name: 'Lucas Ferreira',
    avatar: 'https://imgur.com/LpF08Ok.png',
    quote:
      'Eu tinha zero sucesso com mulheres. Apliquei as técnicas por 2 semanas e já estava saindo com garotas que antes nem me davam bola. Meus amigos ficaram impressionados com a transformação. Virei outro homem!',
  },
  {
    name: 'Gabriel Santos',
    avatar: 'https://imgur.com/zgtmW8I.png',
    quote:
      'Sempre fui o "amigo" das mulheres. Friendzone era minha casa. Depois do curso, descobri como ser visto como homem de verdade. Semana passada uma ex me procurou perguntando "o que você mudou? Você está diferente".',
  },
  {
    name: 'Bruno Oliveira',
    avatar: 'https://imgur.com/bdCZhry.png',
    quote:
      'Cara, isso mudou minha vida! Antes eu travava perto de mulher bonita. Agora eu comando a conversa e elas ficam interessadas. No último fim de semana consegui 3 contatos sem forçar nada. Sou uma nova pessoa!',
  },
];

export function DepoimentosSection() {
  return (
    <section className="flex flex-col items-center">
      <div className="mb-16 text-center w-full max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Veja o depoimento do Rafael, que saiu da friendzone eterna e conquistou a atenção que sempre quis em menos de 14 dias usando o método.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-center text-muted-foreground mx-auto">
          Veja o depoimento do Rafael, que saiu da friendzone eterna e conquistou a atenção que sempre quis em menos de 14 dias usando o método.
        </p>
        <div className="mt-8 w-full max-w-2xl mx-auto aspect-video bg-card rounded-lg border border-primary/20 flex items-center justify-center shadow-lg overflow-hidden">
           <VturbPlayer2 />
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

const caminho1Items = [
  "Permanecer invisível - (Sendo ignorado enquanto outros chamam atenção)",
  "Não conseguir trocar mensagem com aquela mina - (Vendo ela responder outros na hora)",
  "Passar despercebido pelas mulheres - (Como se você fosse transparente)",
  "Gastar dinheiro em soluções inúteis - (Comprando cursos que não funcionam)",
  "Envelhecer sem realizar, sem conquistar o amor da sua vida - (Assistindo a vida passar)",
  "Morrer se perguntando \"e se...?\" - (Carregando o peso dos arrependimentos)",
];

const caminho2Items = [
  "Ativar seu magnetismo natural - (Fazendo ela te notar sem esforço)",
  "Ser notado e respeitado - (Entrando em qualquer ambiente com presença)",
  "Atrair a garota que você tanto gosta - (Ela vindo até você naturalmente)",
  "Desenvolver confiança genuína - (Que transparece em cada palavra e gesto)",
  "Conquistar a mina dos sonhos - (E ter outras interessadas também)",
  "Olhar para trás sem arrependimentos - (Sabendo que você viveu intensamente)",
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
            <ul className="space-y-3">
              {caminho1Items.map((item, index) => {
                const parts = item.split(" - ");
                return (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <div>
                      <span className="font-semibold text-foreground">{parts[0]}</span>
                      {parts[1] && <span className="text-muted-foreground/80 block">{parts[1]}</span>}
                    </div>
                  </li>
                );
              })}
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
            <ul className="space-y-3">
              {caminho2Items.map((item, index) => {
                const parts = item.split(" - ");
                return (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">•</span>
                     <div>
                      <span className="font-semibold text-foreground">{parts[0]}</span>
                      {parts[1] && <span className="text-muted-foreground/80 block">{parts[1]}</span>}
                    </div>
                  </li>
                );
              })}
            </ul>
          </CardContent>
        </Card>
      </div>

      <p className="mt-12 max-w-3xl text-lg text-muted-foreground whitespace-pre-line">
{`Você chegou até aqui porque algo dentro de você sabe que merece mais.
Mais respeito. Mais atenção. Mais oportunidades.
A ciência prova: isso não é sorte ou genética. É técnica. É um método. É possível.
Pare de adiar.`}
      </p>

      <h3 className="mt-12 text-2xl font-bold flex items-center justify-center flex-wrap gap-3 text-primary">
        <MousePointerClick className="w-7 h-7" />
        <span>Clique agora e aprenda como conquistar a sua mulher dos sonhos:</span>
      </h3>
      
      <Link href="https://payment.ticto.app/O37ED94FD" target="_blank">
        <Button size="lg" className="mt-8 h-16 w-full max-w-md font-bold text-2xl bg-gradient-to-r from-primary to-purple-600 text-primary-foreground transition-all duration-300 ease-in-out hover:shadow-[0_0_35px_hsl(var(--primary))] shadow-[0_0_20px_hsl(var(--primary))] border-2 border-primary/50 rounded-lg">
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

export function IntroducaoSection() {
  return (
    <section className="grid md:grid-cols-2 gap-12 items-center">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">Como Conquistar Qualquer Mulher Que Você Quiser</h2>
        <p className="text-lg text-muted-foreground">
          Já imaginou ter o poder de conquistar aquela garota que você sempre quis, mas nunca soube como abordar? O Magnetismo Oculto é o método científico que ensina exatamente como fazer isso, sem precisar gastar fortunas ou mudar sua personalidade.
        </p>
        <p className="text-lg text-muted-foreground">
          Criamos um sistema revolucionário baseado em neurociência comportamental que desperta a linguagem primitiva da atração. Pare de tentar impressionar com status e dinheiro, comece a dominar a arte da conquista autêntica.
        </p>
         <p className="text-lg text-muted-foreground">
          Nossa metodologia é respaldada pela ciência, projetada para ativar seus estados de pico de atratividade masculina. Experimente um novo nível de confiança e conquiste qualquer mulher que desperte seu interesse.
        </p>
      </div>
      <div className="relative h-80 w-full rounded-xl overflow-hidden shadow-2xl shadow-primary/20">
        <Image
          src="https://imgur.com/Xaaz0c3.png"
          alt="Homem e mulher conversando em um bar"
          layout="fill"
          objectFit="cover"
          data-ai-hint="couple talking"
          className="transform hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>
    </section>
  );
}

const modules = [
  {
    title: "MÓDULO 1: MAGNETISMO INTERIOR",
    description: "Desenvolva sua confiança autêntica, presença magnética e energia que atrai naturalmente.",
  },
  {
    title: "MÓDULO 2: LINGUAGEM CORPORAL HIPNÓTICA",
    description: "Domine o olhar magnético, postura de comando e voz que transmite liderança.",
  },
  {
    title: "MÓDULO 3: PSICOLOGIA DA ATRAÇÃO FEMININA",
    description: "Descubra os gatilhos emocionais femininos e como criar tensão e mistério irresistíveis.",
  },
  {
    title: "MÓDULO 4: SEDUÇÃO SOCIAL",
    description: "Aprenda a dominar ambientes sociais, construir prova social e elevar seu status.",
  },
  {
    title: "MÓDULO 5: COMUNICAÇÃO PERSUASIVA",
    description: "Torne-se um mestre em storytelling magnético e escuta profunda que gera conexão.",
  },
];

export function ModulosSection() {
  return (
    <section className="flex flex-col items-center text-center">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        O Que Você Vai Aprender
      </h2>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Uma visão geral do conteúdo transformador que espera por você.
      </p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {modules.map((module, index) => (
          <Card key={index} className="bg-card/50 border-primary/30 text-left p-4 flex flex-col">
            <CardHeader className="flex-row items-start gap-4 space-y-0 pb-4">
              <div className="p-2 bg-primary/20 rounded-md">
                <Package className="w-6 h-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-lg font-bold leading-tight">{module.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-grow pt-0">
              <p className="text-muted-foreground">{module.description}</p>
            </CardContent>
          </Card>
        ))}
        <Card className="bg-card/50 border-primary/30 text-left p-4 flex flex-col md:col-span-2 lg:col-span-1">
          <CardHeader className="flex-row items-start gap-4 space-y-0 pb-4">
            <div className="p-2 bg-primary/20 rounded-md">
                <Package className="w-6 h-6 text-primary" />
            </div>
            <div>
              <CardTitle className="text-lg font-bold leading-tight">E MUITO MAIS...</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="flex-grow pt-0">
            <p className="text-muted-foreground">O curso completo contém 10 módulos com atualizações futuras para garantir sua maestria na arte da atração.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

const includedItems = [
  { name: "Magnetismo Oculto", value: "R$ 147,00" },
  { name: "Manual de Frases Prontas", value: "R$ 47,00" },
  { name: "Guia de Postura Masculina", value: "R$ 67,00" },
  { name: "Técnicas Anti-Nervosismo", value: "R$ 33,00" },
];

export function OfertaSection() {
  return (
    <section id="oferta" className="flex flex-col items-center">
      <div className="w-full max-w-lg bg-black text-white py-12 px-6 sm:px-10 rounded-2xl border-2 border-primary/30 shadow-2xl shadow-primary/10">
        <div className="max-w-md mx-auto text-center">
          <div className="relative w-full h-96 mb-8">
            <Image
              src="https://imgur.com/MFzEPpx.png"
              alt="Magnetismo Oculto - A Ciência da Atração Invisível"
              layout="fill"
              objectFit="contain"
              data-ai-hint="product mockup"
            />
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Qual o valor do investimento?
          </h2>
          <p className="mt-4 text-lg text-neutral-300">
            Acesso ao Magnetismo Oculto + bônus por menos de um café por dia.
          </p>

          <div className="mt-8 text-left space-y-3">
            {includedItems.map((item, index) => (
              <div key={index} className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-300">{item.name}</span>
                </div>
                <span className="text-neutral-400 whitespace-nowrap">{item.value}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-12">
            <p className="text-lg text-neutral-400">De <span className="line-through">R$ 294,00</span> Por apenas</p>
            <p className="text-7xl md:text-8xl font-bold text-primary my-2">
              R$ 37,90
            </p>
          </div>

          <Link href="https://payment.ticto.app/O37ED94FD" target="_blank">
            <Button 
              size="lg" 
              className="mt-10 h-auto px-12 py-4 bg-primary text-primary-foreground text-lg font-bold rounded-lg transition-all duration-300 ease-in-out hover:bg-primary/90 hover:shadow-[0_0_25px_hsl(var(--primary))] shadow-[0_0_15px_hsl(var(--primary))] border-2 border-primary/50"
            >
              EU QUERO
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

const qaItems: QAItem[] = [
  {
    question: "O que acontece se eu não conseguir resultados?",
    answer: "Oferecemos uma garantia de devolução do dinheiro de 7 dias, sem perguntas. Se você não estiver satisfeito por qualquer motivo, basta entrar em contato conosco para um reembolso total."
  },
  {
    question: "Esta é uma compra única ou uma assinatura?",
    answer: "A oferta atual é para uma compra única, garantindo acesso vitalício ao produto e a todas as futuras atualizações da versão atual."
  },
  {
    question: "Como funciona o suporte ao cliente?",
    answer: "Oferecemos suporte premium por e-mail em até 24 horas para todos os nossos clientes. Você também terá acesso ao nosso grupo exclusivo no Telegram, onde poderá fazer perguntas e trocar experiências com outros homens."
  },
  {
    question: "Posso usar em múltiplos dispositivos?",
    answer: "Com certeza. Sua licença permite que você instale e use o produto em todos os seus dispositivos pessoais, em desktop e mobile."
  },
  {
    question: "Em quanto tempo verei resultados?",
    answer: "Embora os resultados variem para cada indivíduo, muitos de nossos clientes relatam melhorias notáveis em sua confiança e interações sociais dentro das primeiras duas a três semanas após a aplicação consistente das técnicas do curso."
  },
  {
    question: "Este curso funciona para homens tímidos ou introvertidos?",
    answer: "Absolutamente. O curso foi projetado especificamente para ajudar homens de todos os tipos de personalidade, incluindo tímidos e introvertidos, a desenvolver uma confiança autêntica que não exige que eles mudem quem são, mas sim que aprimorem suas qualidades naturais."
  },
  {
    question: "Preciso ter experiência prévia com mulheres?",
    answer: "Não é necessário. O Magnetismo Oculto foi desenvolvido tanto para iniciantes quanto para homens que já têm alguma experiência. Começamos do básico e evoluímos gradualmente, respeitando o ritmo de cada pessoa."
  }
];

export function PerguntasRespostasSection() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">Está com alguma dúvida?</h2>
      <p className="mt-4 max-w-2xl text-lg text-center text-muted-foreground whitespace-pre-line">
        Da uma olhada nas perguntas mais frequentes sobre o Magnetismo Oculto:
      </p>
      <div className="mt-12 w-full max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {qaItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-primary/20">
              <AccordionTrigger className="text-lg font-semibold text-left hover:text-primary transition-colors">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

const persuasaoFeatures = [
  {
    icon: (
      <BrainCircuit className="w-12 h-12 text-primary" />
    ),
    title: "NEUROCIÊNCIA COMPORTAMENTAL",
    description: "Baseado em estudos de Harvard sobre microexpressões e gatilhos primitivos. Você aprende a linguagem não-verbal que o cérebro feminino interpreta como 'homem de valor'.",
  },
  {
    icon: (
       <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: "LINGUAGEM CORPORAL DE ELITE",
    description: "Técnicas de presença usadas por atores de Hollywood e CEOs carismáticos. Como comunicar confiança, status e liderança sem falar uma palavra.",
  },
  {
    icon: <Users className="w-12 h-12 text-primary" />,
    title: "CALIBRAÇÃO FEMININA",
    description: "Entenda o sistema de como ela realmente escolhe e pare de adivinhar. Decodifique os sinais que mulheres enviam e que 90% dos homens não percebem.",
  },
];

export function PersuasaoOcultaSection() {
  return (
    <section className="flex flex-col items-center text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
        MAGNETISMO OCULTO: <span className="text-primary">A CIÊNCIA DA ATRAÇÃO INVISÍVEL</span>
      </h2>
      
      <div className="mt-12 w-full max-w-4xl space-y-12">
        <div>
            <h3 className="text-2xl font-bold text-foreground">O QUE É ESTE MÉTODO?</h3>
            <p className="mt-2 text-lg text-muted-foreground max-w-3xl mx-auto">
              O Magnetismo Oculto é um sistema completo baseado em neurociência comportamental que ensina homens a desenvolverem uma presença magnética autêntica. Não é sobre truques ou manipulação, é sobre despertar qualidades masculinas que naturalmente atraem respeito e interesse.
            </p>
        </div>

        <div>
            <h3 className="text-2xl font-bold text-foreground">COMO FUNCIONA?</h3>
            <div className="mt-8 grid md:grid-cols-3 gap-12 w-full">
                {persuasaoFeatures.map((feature, index) => (
                <div key={index} className="flex flex-col items-center gap-4">
                    {feature.icon}
                    <h4 className="text-xl font-bold text-foreground">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}

const problemItems = [
  "Você fica apenas observando ela de longe",
  "Quando tenta puxar conversa, ela responde com monossilabos",
  "Você trava, gagueja e não sabe dar continuidade",
  "Ela perde o interesse rapidamente e você se sente rejeitado",
];

const solutionItems = [
  "Como iniciar conversas de forma natural e envolvente",
  "As primeiras frases que despertam curiosidade instantânea",
  "Como manter o papo fluindo sem momentos constrangedores",
  "Como fazer ela querer continuar falando com você",
];

export function ProblemaSolucaoSection() {
  return (
    <section className="flex flex-col items-center text-center">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Cansado de Não Conseguir Chegar Nela?</h2>
      <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
        Entendemos a frustração de ver a garota que você gosta e simplesmente não conseguir falar com ela. Veja como mudamos o jogo.
      </p>
      <div className="mt-12 grid md:grid-cols-2 gap-8 w-full">
        <Card className="bg-card/80 border-destructive/50 text-left">
          <CardHeader className="flex-row items-center gap-4">
            <XCircle className="w-10 h-10 text-destructive flex-shrink-0" />
            <CardTitle className="text-2xl font-semibold text-destructive/90">O PROBLEMA</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-muted-foreground mb-4">Você vê aquela garota que desperta seu interesse, mas na hora de chegar nela, sua mente fica em branco. Você não sabe como começar, o que falar, ou como manter uma conversa interessante.</p>
            <p className="font-semibold text-foreground mb-3">A dura realidade:</p>
            <ul className="space-y-2">
              {problemItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-destructive/80 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card className="bg-card/80 border-green-500/50 text-left">
           <CardHeader className="flex-row items-center gap-4">
            <CheckCircle className="w-10 h-10 text-green-500 flex-shrink-0" />
            <CardTitle className="text-2xl font-semibold text-green-400/90">A SOLUÇÃO</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-muted-foreground mb-4">Um método científico que ensina exatamente como chegar em qualquer garota com naturalidade e segurança. O Magnetismo Oculto decodifica a arte da primeira abordagem e te dá as ferramentas para nunca mais travar.</p>
            <p className="font-semibold text-foreground mb-3">O que você vai dominar:</p>
            <ul className="space-y-2">
                {solutionItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <ShieldCheck className="w-5 h-5 text-green-500/80 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                    </li>
                ))}
            </ul>
            <p className="text-sm italic text-muted-foreground/80 mt-6">Não é sobre decorar frases prontas. É sobre desenvolver a habilidade natural de se conectar com qualquer mulher.</p>
          </CardContent>
        </Card>
      </div>
      <p className="mt-8 text-xl font-semibold text-primary">Pare de ser mais um na multidão. Seja o cara que ela quer conhecer.</p>
    </section>
  );
}

const images = [
  { src: "https://imgur.com/A6ZVX8S.png", alt: "Resultado de aluno 1", hint: "chat screenshot" },
  { src: "https://imgur.com/6BEKjME.png", alt: "Resultado de aluno 2", hint: "chat screenshot" },
  { src: "https://imgur.com/A6ZVX8S.png", alt: "Resultado de aluno 3", hint: "chat screenshot" },
  { src: "https://imgur.com/1UglZ9R.png", alt: "Resultado de aluno 4", hint: "chat screenshot" },
  { src: "https://imgur.com/um33MLj.png", alt: "Resultado de aluno 5", hint: "chat screenshot" },
];

export function ResultadosSection() {
  return (
    <section className="flex flex-col items-center text-center">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-4xl">
        Funciona Mesmo? Veja Você Mesmo. <span className="text-primary">500+ Relatos de Transformação</span> deles tendo resultados com o Magnetismo Oculto, como você pode ver nas imagens abaixo.
      </h2>
      <div className="mt-12 w-full max-w-5xl">
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {images.map((image, index) => (
              <CarouselItem key={index} className="basis-4/5 md:basis-1/3 pl-4">
                <div className="p-1">
                  <Card className="overflow-hidden border-2 border-transparent bg-gradient-to-br from-primary/20 to-card shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
                    <CardContent className="p-0 flex items-center justify-center aspect-[9/16] relative">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-contain"
                        data-ai-hint={image.hint}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-primary hover:text-primary-foreground hover:bg-primary" />
          <CarouselNext className="text-primary hover:text-primary-foreground hover:bg-primary" />
        </Carousel>
      </div>
    </section>
  );
}

const situations = [
  {
    title: "Viu ela olhando e não teve coragem de chegar.",
    description: "Aquela gata no bar te deu várias olhadas, mas você ficou lá parado igual um idiota assistindo outro cara chegar nela."
  },
  {
    title: "Ela estava claramente interessada mas você não soube o que fazer.",
    description: "Todos os sinais estavam ali - risadas, toques, olhares - mas você travou como um beta e ela perdeu o interesse."
  },
  {
    title: "Perdeu a mulher que você queria para um cara inferior.",
    description: "Ela escolheu um babaca que ganha menos, é mais feio e trata ela mal... enquanto você, o \"cara legal\", ficou assistindo."
  },
  {
    title: "Levou um fora por demonstrar fraqueza.",
    description: "Ela se afastou porque você ficou carente, inseguro ou ciumento demais. Mostrou que não é o cara alfa que ela pensava."
  },
  {
    title: "Ela esfriou do nada e você não entendeu o porquê.",
    description: "Tudo perfeito até que ela começou a te ignorar, demorar pra responder e inventar desculpas. Você virou apenas mais um."
  }
];

export function SituacoesSection() {
  return (
    <section className="flex flex-col items-center text-center w-full max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
        Você já passou por alguma dessas situações?
      </h2>
      <div className="w-full flex flex-col gap-6">
        {situations.map((situation, index) => (
          <div key={index} className="flex items-start gap-4 p-4 rounded-lg border border-primary/30 bg-card/50 text-left shadow-lg">
            <XCircle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <p className="text-lg font-semibold text-foreground">{situation.title}</p>
              <p className="text-base text-muted-foreground mt-1">{situation.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center space-y-2 text-lg text-muted-foreground">
        <p>Se você se identificou com pelo menos uma dessas situações, é porque você ainda não aprendeu as regras do jogo.</p>
        <p className="font-semibold text-primary">Enquanto você fica na sua, outros homens estão levando as mulheres que você quer.</p>
      </div>
    </section>
  );
}

export function FooterSection() {
  return (
    <footer className="w-full bg-background py-8">
      <div className="container mx-auto flex flex-col items-center justify-center gap-2 text-center text-sm text-muted-foreground">
        <p>Magnetismo Oculto © 2025</p>
        <div className="flex justify-center gap-2">
          <Link href="/politica-de-privacidade" className="hover:text-primary transition-colors">
            Política de Privacidade
          </Link>
          <span>|</span>
          <Link href="/termos-de-uso" className="hover:text-primary transition-colors">
            Termos de Uso
          </Link>
        </div>
      </div>
      <div className="container mx-auto max-w-5xl text-center text-xs text-muted-foreground/70 mt-8 space-y-4 px-4">
        <p>
          ESTE SITE NÃO É do FACEBOOK: Este site não faz parte do site do Facebook ou do Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira. FACEBOOK é uma marca comercial independente da FACEBOOK, Inc.
        </p>
        <p>
          Os resultados referentes ao serviço foram avaliados e comprovados por nossos clientes. Não garantimos os resultados iguais para todos, estes variam de pessoa para pessoa dependendo de diversos fatores individuais. As informações fornecidas neste site destina-se ao seu conhecimento geral e não garantimos um resultado específico, todo resultado será de inteira responsabilidade do cliente. Essa página/produto não tem vínculo com o Facebook.
        </p>
      </div>
    </footer>
  );
}
