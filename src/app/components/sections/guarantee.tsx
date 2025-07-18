import { ShieldCheck } from 'lucide-react';
import { Card, CardContent } from '@/app/components/ui/card';

export function GuaranteeSection() {
  return (
    <section className="w-full flex justify-center">
      <Card className="max-w-3xl w-full bg-gradient-to-br from-card/60 to-background border-2 border-primary/40 shadow-xl shadow-primary/10">
        <CardContent className="p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
          <ShieldCheck className="w-24 h-24 md:w-32 md:h-32 text-primary flex-shrink-0" />
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold">Our 30-Day Money-Back Guarantee</h3>
            <p className="mt-4 text-lg text-muted-foreground">
              We are so confident that you'll love Luminous that we're offering a risk-free 30-day guarantee. If you're not 100% satisfied with your purchase, simply let us know within 30 days, and we'll give you a full refund. No hoops to jump through, no questions asked.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
