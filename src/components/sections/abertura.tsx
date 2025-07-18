import { Button } from "@/components/ui/button";

export function AberturaSection() {
  return (
    <section className="text-center flex flex-col items-center">
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-primary/70 pb-4">
        Desbloqueie Seu Verdadeiro Potencial
      </h1>
      <p className="mt-4 max-w-2xl text-lg md:text-xl text-muted-foreground">
        Descubra a solução definitiva para impulsionar sua produtividade e alcançar seus objetivos mais rápido do que nunca. Junte-se a milhares de usuários de sucesso hoje.
      </p>
      <div className="my-8 w-full max-w-3xl aspect-video bg-card rounded-lg border border-primary/20 overflow-hidden">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <Button size="lg" className="font-bold text-lg bg-gradient-to-r from-primary to-purple-600 text-primary-foreground transition-all duration-300 ease-in-out hover:shadow-[0_0_25px_hsl(var(--primary))] shadow-[0_0_15px_hsl(var(--primary))] border-2 border-primary/50">
        Comece Agora
      </Button>
    </section>
  );
}
