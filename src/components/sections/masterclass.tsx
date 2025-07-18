import Image from "next/image";

export function MasterclassSection() {
  return (
    <section className="flex flex-col items-center text-center py-12 bg-black rounded-xl border border-primary/20">
      <div className="relative w-24 h-24 mb-4">
        <Image
          src="https://placehold.co/100x100.png"
          alt="Chess Knight"
          width={100}
          height={100}
          data-ai-hint="chess knight dark"
          className="filter drop-shadow-[0_5px_15px_rgba(var(--primary-hsl),0.4)]"
        />
      </div>
      <div className="flex items-center w-full max-w-lg">
        <div className="flex-grow h-px bg-primary/50"></div>
        <h2 className="mx-6 text-2xl md:text-3xl font-light tracking-[0.3em] text-white">
          MASTERCLASS
        </h2>
        <div className="flex-grow h-px bg-primary/50"></div>
      </div>
    </section>
  );
}
