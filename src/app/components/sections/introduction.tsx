import Image from "next/image";

export function IntroductionSection() {
  return (
    <section className="grid md:grid-cols-2 gap-12 items-center">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">The Future of Productivity is Here</h2>
        <p className="text-lg text-muted-foreground">
          In a world full of distractions, Luminous provides the clarity and focus you need. We've engineered a revolutionary platform that integrates seamlessly into your workflow, eliminating friction and amplifying your results. Stop juggling tools and start achieving mastery.
        </p>
        <p className="text-lg text-muted-foreground">
          Our methodology is backed by science, designed to tap into your peak performance states. Experience a new level of efficiency and unlock hours of your time each week.
        </p>
      </div>
      <div className="relative h-80 w-full rounded-xl overflow-hidden shadow-2xl shadow-primary/20">
        <Image
          src="https://placehold.co/600x400.png"
          alt="Abstract representation of productivity"
          layout="fill"
          objectFit="cover"
          data-ai-hint="abstract technology"
          className="transform hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>
    </section>
  );
}
