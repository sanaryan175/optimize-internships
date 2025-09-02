import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  Building2, 
  Users, 
  Shield, 
  Bot, 
  Menu,
  User,
  Bell
} from "lucide-react";

const navigation = [
  { name: "Platform", href: "/", icon: Bot },
  { name: "Government", href: "/government", icon: Shield },
  { name: "Companies", href: "/companies", icon: Building2 },
  { name: "Students", href: "/students", icon: Users },
];

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-primary">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-semibold">AI InternMatch</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link key={item.name} to={item.href}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    size="sm"
                    className="gap-2"
                  >
                    <item.icon className="h-4 w-4" />
                    {item.name}
                  </Button>
                </Link>
              );
            })}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-surface">
        <div className="container py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="flex h-6 w-6 items-center justify-center rounded bg-gradient-primary">
                  <Bot className="h-4 w-4 text-white" />
                </div>
                <span className="font-semibold">AI InternMatch</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Optimizing internship allocation through intelligent AI matching.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Platform</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/government" className="hover:text-foreground">Government Portal</Link></li>
                <li><Link to="/companies" className="hover:text-foreground">Company Dashboard</Link></li>
                <li><Link to="/students" className="hover:text-foreground">Student Portal</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Documentation</a></li>
                <li><a href="#" className="hover:text-foreground">API Reference</a></li>
                <li><a href="#" className="hover:text-foreground">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-foreground">Terms of Service</a></li>
                <li><a href="#" className="hover:text-foreground">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2024 AI InternMatch Platform. Built for the PM Internship Scheme.
          </div>
        </div>
      </footer>
    </div>
  );
};