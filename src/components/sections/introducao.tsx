import Image from "next/image";

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
