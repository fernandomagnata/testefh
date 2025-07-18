import Image from "next/image";

export function IntroducaoSection() {
  return (
    <section className="grid md:grid-cols-2 gap-12 items-center">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">O Futuro da Produtividade é Aqui</h2>
        <p className="text-lg text-muted-foreground">
          Em um mundo cheio de distrações, Luminous fornece a clareza e o foco que você precisa. Criamos uma plataforma revolucionária que se integra perfeitamente ao seu fluxo de trabalho, eliminando atritos e amplificando seus resultados. Pare de jonglar com ferramentas e comece a alcançar a maestria.
        </p>
        <p className="text-lg text-muted-foreground">
          Nossa metodologia é respaldada pela ciência, projetada para explorar seus estados de pico de desempenho. Experimente um novo nível de eficiência e desbloqueie horas do seu tempo a cada semana.
        </p>
      </div>
      <div className="relative h-80 w-full rounded-xl overflow-hidden shadow-2xl shadow-primary/20">
        <Image
          src="https://placehold.co/600x400.png"
          alt="Representação abstrata de produtividade"
          layout="fill"
          objectFit="cover"
          data-ai-hint="abstract technology"
          className="transform hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>
    </section>
  );
}
