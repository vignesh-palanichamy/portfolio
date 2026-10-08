import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

export const WorkTogetherSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-4">
      <Card className="liquid-glass liquid-glass-hover rounded-3xl p-8 text-center relative border-0">
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Let's Work Together
        </h2>
        
        <div className="flex items-center justify-center gap-2">
          <span className="text-foreground/90 text-sm font-medium uppercase tracking-wide">
            lets talk
          </span>
          <ArrowUpRight className="w-4 h-4 text-foreground" />
        </div>
      </Card>
    </section>
  );
};