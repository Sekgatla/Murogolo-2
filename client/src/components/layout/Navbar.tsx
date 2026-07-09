import { Link, useLocation } from "wouter";
import { Menu, X, GraduationCap } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/curriculum", label: "Curriculum" },
    { href: "/admissions", label: "Admissions" },
    { href: "/donation", label: "Donate" },
    { href: "/contact", label: "Contact" },
  ];

  const NavLink = ({ href, label, mobile = false }: { href: string; label: string; mobile?: boolean }) => {
    const isActive = location === href;
    return (
      <Link href={href}>
        <a
          className={`
            transition-colors duration-200 font-medium
            ${mobile ? "text-lg py-2 block" : "text-sm hover:text-secondary"}
            ${isActive ? "text-secondary font-bold" : "text-primary-foreground/90"}
          `}
          onClick={() => mobile && setOpen(false)}
        >
          {label}
        </a>
      </Link>
    );
  };

  return (
    <nav className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 group">
            <div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-colors">
              <GraduationCap className="h-6 w-6 text-secondary" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg leading-none tracking-tight">Murogolo</span>
              <span className="text-xs text-secondary/90 font-medium tracking-wide">Primary School</span>
            </div>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
          <Link href="/admissions">
            <Button variant="secondary" size="sm" className="font-bold text-primary hover:bg-white">
              Apply Now
            </Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/10">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-primary text-primary-foreground border-l-primary-foreground/10">
              <div className="flex flex-col gap-6 mt-10">
                {links.map((link) => (
                  <NavLink key={link.href} {...link} mobile />
                ))}
                <Link href="/admissions">
                  <Button variant="secondary" className="w-full font-bold text-primary mt-4">
                    Apply Now
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
