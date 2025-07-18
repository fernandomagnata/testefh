import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/components/ui/accordion";
import type { QAItem } from "@/app/lib/types";

const qaItems: QAItem[] = [
  {
    question: "Is there a money-back guarantee?",
    answer: "Yes! We offer a 30-day, no-questions-asked money-back guarantee. If you're not satisfied for any reason, just contact us for a full refund."
  },
  {
    question: "Is this a one-time purchase or a subscription?",
    answer: "The current offer is for a one-time purchase, granting you lifetime access to the product and all future updates for the current version."
  },
  {
    question: "What if I need help or support?",
    answer: "We offer premium 24/7 email support to all our customers. You'll also get access to our exclusive community forum where you can ask questions and share tips."
  },
  {
    question: "Can I use this on multiple devices?",
    answer: "Absolutely. Your license allows you to install and use the product on all of your personal devices, across desktop and mobile."
  }
];

export function QASection() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">Frequently Asked Questions</h2>
      <p className="mt-4 max-w-2xl text-lg text-center text-muted-foreground">
        Have questions? We have answers.
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
