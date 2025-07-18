import { BrainCircuit, Eye, Users } from "lucide-react";

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--destructive))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
        <path d="M12 2a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3c.3 0 .5.1.8.2" />
        <path d="M12 2a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3c-.3 0-.5.1-.8.2" />
        <path d="M12 12v2.5a2.5 2.5 0 1 0 5 0V12" />
        <path d="M12 12v2.5a2.5 2.5 0 1 1-5 0V12" />
        <path d="M12 22a2.5 2.5 0 1 0 5 0v-2.5" />
        <path d="M12 22a2.5 2.5 0 1 1-5 0v-2.5" />
        <path d="M7 12a2.5 2.5 0 0 0-5 2.5V12" />
        <path d="M17 12a2.5 2.5 0 0 1 5 2.5V12" />
      </svg>
    ),
    title: "Neurociência Comportamental",
    description: "Baseado em estudos de Harvard sobre microexpressões e gatilhos primitivos.",
  },
  {
    icon: (
       <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--destructive))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: "Linguagem Corporal de Elite",
    description: "Técnicas de presença usadas por atores de Hollywood e CEOs carismáticos.",
  },
  {
    icon: <Users className="w-12 h-12 text-destructive" />,
    title: "Calibração Feminina",
    description: "Entenda o sistema de como ela realmente escolhe e pare de adivinhar.",
  },
];


export function PersuasaoOcultaSection() {
  return (
    <section className="flex flex-col items-center text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
        PERSUASÃO OCULTA: <span className="text-destructive">A CIÊNCIA DA ATRAÇÃO INVISÍVEL</span>
      </h2>
      <p className="mt-4 text-lg text-muted-foreground">
        Desperte seu campo magnético masculino em 21 dias.
      </p>
      <div className="mt-16 grid md:grid-cols-3 gap-12 w-full max-w-5xl">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center gap-4">
            {feature.icon}
            <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
