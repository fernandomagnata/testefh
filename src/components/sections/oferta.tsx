import { Button } from "@/components/ui/button";
import Link from "next/link";

export function OfertaSection() {
  return (
    <section className="flex flex-col items-center">
      <div className="w-full max-w-lg bg-black text-white py-12 px-6 sm:px-10 rounded-2xl border-2 border-primary/30 shadow-2xl shadow-primary/10">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Qual o valor do investimento?
          </h2>
          <p className="mt-4 text-lg text-neutral-300">
            Acesso ao Aulão de V.S.M. + bônus por menos de um café por dia.
          </p>
          
          <div className="mt-12">
            <p className="text-lg text-neutral-400">De <span className="line-through">R$ 147,00</span></p>
            <p className="text-7xl md:text-8xl font-bold text-primary my-2">
              R$ 37,90
            </p>
          </div>

          <Link href="https://www.youtube.com/" target="_blank">
            <Button 
              size="lg" 
              className="mt-10 w-full h-14 bg-primary text-primary-foreground text-lg font-bold rounded-lg transition-all duration-300 ease-in-out hover:bg-primary/90 hover:shadow-[0_0_25px_hsl(var(--primary))] shadow-[0_0_15px_hsl(var(--primary))] border-2 border-primary/50"
            >
              QUERO GARANTIR MINHA VAGA AGORA
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
