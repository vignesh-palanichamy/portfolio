interface TestimonialCardProps {
  name: string;
  title: string;
  company: string;
  quote: string;
  avatar: string;
}

export const TestimonialCard = ({ name, title, company, quote, avatar }: TestimonialCardProps) => {
  return (
    <div className="liquid-glass rounded-3xl p-6">
      <div className="flex items-center space-x-4 mb-6">
        <img 
          src={avatar} 
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="text-lg font-semibold text-foreground">{name}</h4>
          <p className="text-sm text-foreground/60">{title}, {company}</p>
        </div>
      </div>
      
      <blockquote className="text-muted-foreground leading-relaxed">
        "{quote}"
      </blockquote>
    </div>
  );
};