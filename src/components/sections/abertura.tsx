import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AberturaSection() {
  return (
    <section className="text-center flex flex-col items-center">
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-primary/70 pb-4">
        Desbloqueie Seu Magnetismo Masculino Oculto
      </h1>
      <p className="mt-4 max-w-2xl text-lg md:text-xl text-muted-foreground">
        Descubra o método científico secreto que transforma homens invisíveis em magnetos de atração feminina em menos de 21 dias.
      </p>
      <div className="my-8 w-full max-w-3xl aspect-video bg-card rounded-lg border border-primary/20 overflow-hidden">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/jfKfPfyJRdk"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <Link href="https://www.youtube.com/" target="_blank">
        <Button size="lg" className="font-bold text-lg bg-gradient-to-r from-primary to-purple-600 text-primary-foreground transition-all duration-300 ease-in-out hover:shadow-[0_0_25px_hsl(var(--primary))] shadow-[0_0_15px_hsl(var(--primary))] border-2 border-primary/50">
          Comece Agora
        </Button>
      </Link>
    </section>
  );
}
