export const Footer = () => {
  return (
    <footer className="w-full py-8 bg-background relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Logo */}
        <div className="mb-4">
          <span className="text-2xl font-bold text-primary tracking-tight">
            Vignesh Palanichamy
          </span>
          <p className="text-xs text-muted-foreground mt-1 font-mono">
            Full Stack Developer • React • Next.js • Three.js • Node.js
          </p>
        </div>
        
        {/* Copyright */}
        <p className="text-xs text-muted-foreground/70">
          © {new Date().getFullYear()} Vignesh Palanichamy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};