import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  { src: "https://placehold.co/400x600.png", alt: "Resultado de aluno 1", hint: "chat screenshot" },
  { src: "https://placehold.co/400x600.png", alt: "Resultado de aluno 2", hint: "chat screenshot" },
  { src: "https://placehold.co/400x600.png", alt: "Resultado de aluno 3", hint: "chat screenshot" },
  { src: "https://placehold.co/400x600.png", alt: "Resultado de aluno 4", hint: "chat screenshot" },
  { src: "https://placehold.co/400x600.png", alt: "Resultado de aluno 5", hint: "chat screenshot" },
];

export function ResultadosSection() {
  return (
    <section className="flex flex-col items-center text-center">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-4xl">
        Além disso, possuo mais de <span className="text-primary">5.000 alunos</span> nos meus cursos e mais de <span className="text-primary">2.500 relatos</span> deles tendo resultados com o que eu ensino, como você pode ver nas imagens abaixo.
      </h2>
      <div className="mt-12 w-full max-w-5xl">
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2">
            {images.map((image, index) => (
              <CarouselItem key={index} className="basis-4/5 md:basis-1/3 pl-2">
                <div className="p-1">
                  <div className="relative aspect-[9/14] w-full overflow-hidden rounded-lg">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      data-ai-hint={image.hint}
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-primary hover:text-primary-foreground hover:bg-primary" />
          <CarouselNext className="text-primary hover:text-primary-foreground hover:bg-primary" />
        </Carousel>
      </div>
    </section>
  );
}
