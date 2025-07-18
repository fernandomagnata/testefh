'use client';

import { useState } from 'react';
import type { Testimonial } from '@/app/lib/types';
import { Card, CardContent } from '@/app/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/app/components/ui/avatar';
import { Button } from '@/app/components/ui/button';
import { useToast } from '@/app/hooks/use-toast';
import { handleSummarizeTestimonial } from '@/app/actions';
import { StarRating } from '@/app/components/shared/star-rating';
import { Sparkles, Loader2 } from 'lucide-react';

const testimonialsData: Testimonial[] = [
  { id: '1', name: 'Sarah J.', avatarUrl: 'https://placehold.co/100x100.png', rating: 5, quote: "This product completely transformed my workflow. I'm saving at least 10 hours a week. The interface is intuitive, and the features are incredibly powerful. I can't imagine going back to how I worked before. It's an absolute game-changer for anyone serious about productivity." },
  { id: '2', name: 'Mike R.', avatarUrl: 'https://placehold.co/100x100.png', rating: 5, quote: "I was skeptical at first, but Luminous delivered on all its promises. The AI insights are surprisingly accurate and have helped me identify bottlenecks I didn't even know I had. The team collaboration features are also top-notch, making it easy to keep everyone on the same page." },
  { id: '3', name: 'Emily K.', avatarUrl: 'https://placehold.co/100x100.png', rating: 4, quote: "A fantastic tool that has genuinely improved my focus and organization. There was a slight learning curve with some of the advanced features, but the customer support was excellent in guiding me through it. Highly recommended for professionals looking to level up." },
];

export function TestimonialsSection() {
  const [summaries, setSummaries] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState<Record<string, boolean>>({});
  const { toast } = useToast();

  const onSummarize = async (id: string, quote: string) => {
    setLoading((prev) => ({ ...prev, [id]: true }));
    const result = await handleSummarizeTestimonial(quote);
    if (result.success && result.summary) {
      setSummaries((prev) => ({ ...prev, [id]: result.summary! }));
    } else {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: result.error,
      });
    }
    setLoading((prev) => ({ ...prev, [id]: false }));
  };

  return (
    <section className="flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">Loved by Professionals Worldwide</h2>
      <p className="mt-4 max-w-2xl text-lg text-center text-muted-foreground">
        Don't just take our word for it. Here's what our users have to say.
      </p>
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
        {testimonialsData.map((testimonial) => (
          <Card key={testimonial.id} className="bg-card/70 border-primary/20 flex flex-col justify-between">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Avatar>
                  <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} data-ai-hint="person portrait" />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <StarRating rating={testimonial.rating} />
                </div>
              </div>
              
              {summaries[testimonial.id] ? (
                <div className="border-l-2 border-accent pl-4">
                  <p className="text-muted-foreground italic">&quot;{summaries[testimonial.id]}&quot;</p>
                  <p className="text-xs text-accent mt-2">Summarized by AI</p>
                </div>
              ) : (
                <p className="text-muted-foreground italic">&quot;{testimonial.quote}&quot;</p>
              )}
            </CardContent>
            <div className="p-6 pt-0">
              <Button
                variant="outline"
                className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                onClick={() => onSummarize(testimonial.id, testimonial.quote)}
                disabled={loading[testimonial.id]}
              >
                {loading[testimonial.id] ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <Sparkles className="w-4 h-4 mr-2" />
                )}
                {summaries[testimonial.id] ? 'View Original' : 'Summarize with AI'}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
