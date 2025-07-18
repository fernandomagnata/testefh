import { Button } from "@/components/ui/button";

const includedItems = [
    { name: "Aulão de VSM Completo", price: "R$ 497" },
    { name: "Os 7 Passos Para Reconquistar Qualquer Mulher", price: "R$ 97" },
    { name: "Como funciona a cabeça das mulheres", price: "R$ 147" },
    { name: "Como Ser o Homem Ideal para Ela", price: "R$ 127" },
    { name: "Massagem e Prazer", price: "R$ 197" },
    { name: "Comunidade V.S.M.", price: "Valor imensurável" },
];

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
          
          <ul className="mt-10 space-y-4 text-left">
            {includedItems.map((item, index) => (
              <li key={index} className="flex justify-between items-center text-base border-b border-neutral-700 pb-2">
                <span className={index === 0 ? "text-primary font-bold" : "text-neutral-200"}>
                  <span className="text-primary mr-2">•</span>{item.name}
                </span>
                <span className={`font-bold ${index === 0 ? 'text-primary' : 'text-neutral-200'}`}>
                  {item.price}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-12">
            <p className="text-lg text-neutral-400">De <span className="line-through">R$ 1.065,00</span></p>
            <p className="text-xl mt-1">por 12x de:</p>
            <p className="text-7xl md:text-8xl font-bold text-primary my-2">
              R$ 20,37
            </p>
            <p className="text-xl text-neutral-300">ou R$ 197,00 à vista</p>
          </div>

          <Button 
            size="lg" 
            className="mt-10 w-full h-14 bg-primary text-primary-foreground text-lg font-bold rounded-lg transition-all duration-300 ease-in-out hover:bg-primary/90 hover:shadow-[0_0_25px_hsl(var(--primary))] shadow-[0_0_15px_hsl(var(--primary))] border-2 border-primary/50"
          >
            QUERO GARANTIR MINHA VAGA AGORA
          </Button>
        </div>
      </div>
    </section>
  );
}
