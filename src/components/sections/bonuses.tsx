import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Gift, BookOpen, Video } from "lucide-react";

export function BonusesSection() {
  return (
    <section className="flex flex-col items-center bg-card/50 rounded-xl p-8 md:p-12 border border-primary/20">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
        Get These Exclusive Bonuses <span className="text-primary">(Value: $497)</span>
      </h2>
      <p className="mt-4 max-w-2xl text-lg text-center text-muted-foreground">
        Act now and you'll also receive these limited-time bonuses to accelerate your success.
      </p>
      <div className="mt-12 grid md:grid-cols-3 gap-8 w-full">
        <Card className="text-center bg-card/50 border-accent/30 hover:border-accent/60 transition-colors">
          <CardHeader className="items-center">
            <Gift className="w-10 h-10 text-accent mb-3" />
            <CardTitle className="text-xl font-bold">Bonus #1: The Productivity Toolkit</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>A curated collection of templates, checklists, and resources to get you started fast.</CardDescription>
          </CardContent>
        </Card>
        <Card className="text-center bg-card/50 border-accent/30 hover:border-accent/60 transition-colors">
          <CardHeader className="items-center">
            <BookOpen className="w-10 h-10 text-accent mb-3" />
            <CardTitle className="text-xl font-bold">Bonus #2: The 'Deep Work' Masterclass</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>An in-depth guide to eliminating distractions and achieving peak concentration.</CardDescription>
          </CardContent>
        </Card>
        <Card className="text-center bg-card/50 border-accent/30 hover:border-accent/60 transition-colors">
          <CardHeader className="items-center">
            <Video className="w-10 h-10 text-accent mb-3" />
            <CardTitle className="text-xl font-bold">Bonus #3: Expert Interview Series</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>Exclusive interviews with industry leaders on their productivity secrets.</CardDescription>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
