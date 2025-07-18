import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { QAItem } from "@/lib/types";

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
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">Perguntas Frequentes</h2>
      <p className="mt-4 max-w-2xl text-lg text-center text-muted-foreground">
        Tem perguntas? Nós temos respostas.
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
