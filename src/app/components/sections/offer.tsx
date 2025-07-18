import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Zap, BrainCircuit, BarChart, Users, CheckSquare } from "lucide-react";
import type { OfferFeature } from "@/app/lib/types";

const features: OfferFeature[] = [
  { name: "AI-Powered Automation", description: "Automate repetitive tasks and focus on what truly matters." },
  { name: "Intelligent Insights", description: "Get data-driven suggestions to optimize your workflow." },
  { name: "Progress Tracking", description: "Visualize your success with beautiful and intuitive dashboards." },
  { name: "Team Collaboration", description: "Work seamlessly with your team in a synchronized environment." },
  { name: "Task Management", description: "Organize, prioritize, and execute tasks with unparalleled ease." },
];

const icons = [
  <Zap key="zap" className="w-8 h-8 text-primary" />,
  <BrainCircuit key="brain" className="w-8 h-8 text-primary" />,
  <BarChart key="barchart" className="w-8 h-8 text-primary" />,
  <Users key="users" className="w-8 h-8 text-primary" />,
  <CheckSquare key="check" className="w-8 h-8 text-primary" />,
];

export function OfferSection() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">What You'll Get</h2>
      <p className="mt-4 max-w-2xl text-lg text-center text-muted-foreground">
        This isn't just another tool. It's a complete system for achieving excellence.
      </p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {features.map((feature, index) => (
          <Card key={feature.name} className="bg-card/70 border-primary/20 hover:border-primary/50 transition-colors duration-300 transform hover:-translate-y-1">
            <CardHeader>
              <div className="flex items-center gap-4">
                {icons[index % icons.length]}
                <CardTitle className="text-xl font-semibold">{feature.name}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
         <Card className="bg-card/70 border-primary/20 hover:border-primary/50 transition-colors duration-300 transform hover:-translate-y-1 md:col-span-2 lg:col-span-1">
            <CardHeader>
              <div className="flex items-center gap-4">
                <CheckSquare className="w-8 h-8 text-primary" />
                <CardTitle className="text-xl font-semibold">And much more...</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Continuous updates, premium support, and an exclusive community.</p>
            </CardContent>
          </Card>
      </div>
    </section>
  );
}
