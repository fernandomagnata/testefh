import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const bonusItems = [
  { name: "Aulão de VSM Completo", value: "R$ 497" },
  { name: "Os 7 Passos Para Reconquistar Qualquer Mulher", value: "R$ 97" },
  { name: "Como funciona a cabeça das mulheres", value: "R$ 147" },
  { name: "Como Ser o Homem Ideal para Ela", value: "R$ 127" },
  { name: "Massagem e Prazer", value: "R$ 197" },
  { name: "Comunidade V.S.M.", value: "Valor imensurável" },
];

export function OfertaSection() {
  return (
    <section className="flex flex-col items-center">
      <div className="w-full max-w-lg bg-black text-white py-12 px-6 sm:px-10 rounded-2xl border-2 border-primary/30 shadow-2xl shadow-primary/10">
        <div className="max-w-md mx-auto text-center">
          <div className="relative w-full h-64 mb-8">
            <Image
              src="https://placehold.co/600x400.png"
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
            Acesso ao Aulão de V.S.M. + bônus por menos de um café por dia.
          </p>

          <div className="mt-8 text-left space-y-3">
            {bonusItems.map((item, index) => (
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
            <p className="text-lg text-neutral-400">De <span className="line-through">R$ 147,00</span></p>
            <p className="text-7xl md:text-8xl font-bold text-primary my-2">
              R$ 37,90
            </p>
          </div>

          <Link href="https://www.youtube.com/" target="_blank">
            <Button 
              size="lg" 
              className="mt-10 h-14 bg-primary text-primary-foreground text-lg font-bold rounded-lg transition-all duration-300 ease-in-out hover:bg-primary/90 hover:shadow-[0_0_25px_hsl(var(--primary))] shadow-[0_0_15px_hsl(var(--primary))] border-2 border-primary/50"
            >
              EU QUERO
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
