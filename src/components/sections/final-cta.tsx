import { Button } from "@/components/ui/button";

export function FinalCtaSection() {
  return (
    <section className="text-center flex flex-col items-center bg-card/50 rounded-xl p-8 md:p-16 border border-primary/20">
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter">
        Ready to Change Your Life?
      </h2>
      <p className="mt-4 max-w-2xl text-lg md:text-xl text-muted-foreground">
        The opportunity to revolutionize your productivity is here. Don't let it slip away. Join the ranks of high-achievers and start your journey to mastery today.
      </p>
      <Button size="lg" className="mt-8 font-bold text-lg bg-gradient-to-r from-primary to-purple-600 text-primary-foreground transition-all duration-300 ease-in-out hover:shadow-[0_0_25px_hsl(var(--primary))] shadow-[0_0_15px_hsl(var(--primary))] border-2 border-primary/50">
        Claim Your Access Now
      </Button>
      <p className="mt-4 text-sm text-muted-foreground">30-Day Money-Back Guarantee</p>
    </section>
  );
}
