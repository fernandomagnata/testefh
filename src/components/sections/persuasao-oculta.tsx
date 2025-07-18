import { BrainCircuit, Users } from "lucide-react";

const features = [
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
              O Magnetismo Oculto é um sistema completo baseado em neurociência comportamental que ensina homens a desenvolverem uma presença magnética autêntica. Não é sobre truques ou manipulação - é sobre despertar qualidades masculinas que naturalmente atraem respeito e interesse.
            </p>
        </div>

        <div>
            <h3 className="text-2xl font-bold text-foreground">COMO FUNCIONA?</h3>
            <div className="mt-8 grid md:grid-cols-3 gap-12 w-full">
                {features.map((feature, index) => (
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
