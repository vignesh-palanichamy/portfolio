import { cn } from '@/lib/utils';

interface MarqueeTextProps {
  items: string[];
  className?: string;
  speed?: 'slow' | 'normal' | 'fast';
}

export const MarqueeText = ({ items, className, speed = 'normal' }: MarqueeTextProps) => {
  const speedClass = {
    slow: 'animate-marquee-slow',
    normal: 'animate-marquee',
    fast: 'animate-marquee-fast'
  };

  return (
    <div
      className={cn('relative overflow-hidden', className)}
      style={{
        maskImage: 'linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)'
      }}
    >
      <div className={cn('flex whitespace-nowrap', speedClass[speed])}>
        {[...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center">
            <span className={cn(
              'text-xl font-semibold px-8',
              index % 3 === 1 ? 'text-gray-900' : 'text-gray-600'
            )}>
              {item}
            </span>
            <div className="w-4 h-4 bg-gray-300/50 rounded-full mx-4 flex-shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};