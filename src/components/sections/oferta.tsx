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
    <section className="flex flex-col items-center text-center bg-black text-white py-16 px-6 rounded-2xl border-2 border-[#ff4f00]/30 shadow-2xl shadow-[#ff4f00]/10">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Qual o valor do investimento?
        </h2>
        <p className="mt-4 text-lg text-neutral-300">
          Acesso ao Aulão de V.S.M. + bônus por menos de um café por dia.
        </p>
        
        <ul className="mt-10 space-y-4 text-left">
          {includedItems.map((item, index) => (
            <li key={index} className="flex justify-between items-center text-lg border-b border-neutral-700 pb-2">
              <span className={index === 0 ? "text-[#ff4f00] font-bold" : "text-neutral-200"}>
                <span className="text-[#ff4f00] mr-2">•</span>{item.name}
              </span>
              <span className={`font-bold ${index === 0 ? 'text-[#ff4f00]' : 'text-neutral-200'}`}>
                {item.price}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-12">
          <p className="text-xl text-neutral-400">De <span className="line-through">R$ 1.065,00</span></p>
          <p className="text-2xl mt-1">por 12x de:</p>
          <p className="text-7xl md:text-8xl font-bold text-[#ff4f00] my-2">
            R$ 20,37
          </p>
          <p className="text-xl text-neutral-300">ou R$ 197,00 à vista</p>
        </div>

        <Button 
          size="lg" 
          className="mt-10 w-full max-w-lg h-16 bg-[#ff4f00] text-black text-xl font-bold rounded-full transition-all duration-300 ease-in-out hover:bg-[#ff6a29] hover:shadow-[0_0_25px_#ff4f00] shadow-[0_0_15px_#ff4f00] border-2 border-[#ff4f00]/50"
        >
          QUERO GARANTIR MINHA VAGA AGORA
        </Button>
      </div>
    </section>
  );
}