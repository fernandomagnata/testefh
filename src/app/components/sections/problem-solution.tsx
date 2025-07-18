import { Card, CardHeader, CardTitle, CardDescription } from "@/app/components/ui/card";
import { XCircle, CheckCircle } from "lucide-react";

export function ProblemSolutionSection() {
  return (
    <section className="flex flex-col items-center text-center">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Tired of the Old Way?</h2>
      <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
        We understand the frustrations of scattered workflows and inefficient processes. Here’s how we change the game.
      </p>
      <div className="mt-12 grid md:grid-cols-2 gap-8 w-full">
        <Card className="bg-card/80 border-destructive/50">
          <CardHeader className="items-center">
            <XCircle className="w-12 h-12 text-destructive mb-4" />
            <CardTitle className="text-2xl font-semibold text-destructive/90">The Problem</CardTitle>
            <CardDescription className="text-muted-foreground mt-2 text-base">
              Scattered information, missed deadlines, and constant context-switching drain your energy and potential. Your tools should help, not hinder.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="bg-card/80 border-green-500/50">
          <CardHeader className="items-center">
            <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
            <CardTitle className="text-2xl font-semibold text-green-400/90">The Solution</CardTitle>
            <CardDescription className="text-muted-foreground mt-2 text-base">
              A unified command center for all your work. Luminous brings everything together, providing a single source of truth and a clear path to success.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
}
