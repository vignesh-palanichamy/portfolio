import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const WorkTogetherCard = () => {
  return (
    <div className="liquid-glass liquid-glass-hover rounded-[26px] p-6 h-full flex flex-col items-center justify-center text-center">
      <h3 className="text-xl font-semibold text-gray-900 mb-8">
        Let's Work Together
      </h3>
      <Button asChild variant="ghost" className="group text-gray-700 hover:text-gray-900 hover:bg-black/[0.04]"><a href="mailto:Vigneshpalanichamy.in@gmail.com">
        <span className="text-sm font-medium uppercase tracking-wide">Let's Talk</span>
        <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </a></Button>
    </div>
  );
};
