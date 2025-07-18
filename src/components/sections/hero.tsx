import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="text-center flex flex-col items-center">
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-primary/70 pb-4">
        Unlock Your True Potential
      </h1>
      <p className="mt-4 max-w-2xl text-lg md:text-xl text-muted-foreground">
        Discover the ultimate solution to supercharge your productivity and achieve your goals faster than ever before. Join thousands of successful users today.
      </p>
      <Button size="lg" className="mt-8 font-bold text-lg bg-gradient-to-r from-primary to-purple-600 text-primary-foreground transition-all duration-300 ease-in-out hover:shadow-[0_0_25px_hsl(var(--primary))] shadow-[0_0_15px_hsl(var(--primary))] border-2 border-primary/50">
        Get Started Now
      </Button>
    </section>
  );
}
