import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useLocation, Link } from "react-router-dom"

const navItems = [
  { name: "Home", href: "/", isExternal: false },
  { name: "About", href: "/about", isExternal: false },
  { name: "Services", href: "/about", hash: "services", isExternal: false },
  { name: "Projects", href: "/", hash: "projects", isExternal: false },
  { name: "Contact", href: "/contact", isExternal: false },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeNavItem, setActiveNavItem] = useState<string | null>(null)
  const location = useLocation()
  
  // Reset active nav item when location changes
  useEffect(() => {
    setActiveNavItem(null)
  }, [location.pathname])
  
  const scrollToSection = (sectionId: string) => {
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.hash) {
      setActiveNavItem(item.name)
      if (location.pathname === item.href) {
        // Same page, just scroll
        scrollToSection(item.hash);
      } else {
        // Different page, navigate then scroll
        setTimeout(() => scrollToSection(item.hash), 100);
      }
    } else {
      setActiveNavItem(item.name)
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-7xl px-4">
      <div className={cn(
        "bg-background/30 backdrop-blur-md border border-border/20 rounded-xl transition-all duration-500 ease-in-out mx-auto",
        isScrolled ? "md:w-fit md:px-8 w-full" : "w-full"
      )}>
        <div className={cn(
          "flex items-center py-4 transition-all duration-500 ease-in-out",
          isScrolled ? "md:justify-center md:px-0 justify-between px-6" : "justify-between px-6"
        )}>
          {/* Logo - Hidden when scrolled on md+ screens only */}
          <div className={cn(
            "transition-all duration-500 ease-in-out overflow-hidden",
            isScrolled ? "md:w-0 md:opacity-0 md:mr-0 w-auto opacity-100 mr-6" : "w-auto opacity-100 mr-6"
          )}>
            <span className="text-xl font-bold text-primary tracking-tight">
              Vignesh
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              const isActive = item.hash 
                ? activeNavItem === item.name 
                : location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => handleNavClick(item)}
                  className={cn(
                    "text-xs font-medium uppercase tracking-wide transition-all duration-300 whitespace-nowrap px-4 py-2 rounded-full hover:shadow-[inset_0_0_20px_rgba(255,255,255,0.1)] hover:bg-background/10",
                    isActive 
                      ? "text-primary bg-primary/10 shadow-[inset_0_0_20px_rgba(255,136,51,0.2)]" 
                      : "text-foreground/70 hover:text-foreground"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* CTA Button & Mobile Menu - Hidden when scrolled on md+ screens only */}
          <div className={cn(
            "flex items-center space-x-4 transition-all duration-500 ease-in-out overflow-hidden",
            isScrolled ? "md:w-0 md:opacity-0 md:ml-0 w-auto opacity-100 ml-6" : "w-auto opacity-100 ml-6"
          )}>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="hidden sm:inline-flex bg-background/20 border-border/20 text-foreground/70 hover:text-foreground hover:bg-background/30 whitespace-nowrap"
            >
              <Link to="/contact">Get In Touch</Link>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="px-6 py-4 space-y-4 border-t border-border/20">
            {navItems.map((item) => {
              const isActive = item.hash 
                ? activeNavItem === item.name 
                : location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => {
                    handleNavClick(item);
                    setIsMenuOpen(false);
                  }}
                  className={cn(
                    "block text-sm font-medium uppercase tracking-wide transition-colors",
                    isActive 
                      ? "text-primary" 
                      : "text-foreground/70 hover:text-foreground"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
            <Button
              asChild
              variant="outline"
              size="sm"
              className="w-full bg-background/20 border-border/20 text-foreground/70 hover:text-foreground hover:bg-background/30"
            >
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Get In Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}