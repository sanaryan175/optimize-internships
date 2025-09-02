import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Building2, 
  Users, 
  ArrowRight,
  BarChart3,
  UserPlus,
  Brain,
  FileCheck,
  Search,
  Award
} from "lucide-react";

const roles = [
  {
    id: "government",
    title: "Government Portal",
    description: "PMO oversight and program management",
    icon: Shield,
    color: "success",
    features: [
      { icon: BarChart3, text: "Analytics & Monitoring" },
      { icon: FileCheck, text: "Policy Management" },
      { icon: Brain, text: "AI Oversight Controls" }
    ],
    href: "/government",
    stats: { primary: "15+", secondary: "Programs Managed" }
  },
  {
    id: "companies",
    title: "Company Dashboard",
    description: "Post internships and find talent",
    icon: Building2,
    color: "info",
    features: [
      { icon: UserPlus, text: "Post Opportunities" },
      { icon: Search, text: "AI-Suggested Candidates" },
      { icon: BarChart3, text: "Hiring Analytics" }
    ],
    href: "/companies",
    stats: { primary: "500+", secondary: "Partner Companies" }
  },
  {
    id: "students",
    title: "Student Portal",
    description: "Discover and apply for internships",
    icon: Users,
    color: "primary",
    features: [
      { icon: Brain, text: "Personalized Matches" },
      { icon: Search, text: "Smart Search & Filters" },
      { icon: Award, text: "Application Tracking" }
    ],
    href: "/students",
    stats: { primary: "10K+", secondary: "Active Students" }
  }
];

const colorMap = {
  success: {
    border: "border-success/20",
    bg: "bg-gradient-success/5",
    icon: "bg-gradient-success",
    button: "success"
  },
  info: {
    border: "border-info/20", 
    bg: "bg-info/5",
    icon: "bg-info",
    button: "default"
  },
  primary: {
    border: "border-primary/20",
    bg: "bg-gradient-primary/5", 
    icon: "bg-gradient-primary",
    button: "default"
  }
};

export const RoleCards = () => {
  return (
    <section className="py-24 bg-surface/50">
      <div className="container space-y-12">
        {/* Section header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Choose Your Portal
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access role-specific dashboards designed for your unique needs in the internship ecosystem.
          </p>
        </div>

        {/* Role cards grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {roles.map((role) => {
            const colors = colorMap[role.color as keyof typeof colorMap];
            const IconComponent = role.icon;
            
            return (
              <Card 
                key={role.id}
                className={`p-8 transition-all duration-300 hover:shadow-lg hover:scale-105 ${colors.border} ${colors.bg}`}
              >
                <div className="space-y-6">
                  {/* Header */}
                  <div className="space-y-4">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-xl ${colors.icon}`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">{role.title}</h3>
                      <p className="text-muted-foreground">{role.description}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    {role.features.map((feature, index) => {
                      const FeatureIcon = feature.icon;
                      return (
                        <div key={index} className="flex items-center space-x-3">
                          <FeatureIcon className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{feature.text}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Stats */}
                  <div className="pt-4 border-t border-border/50">
                    <div className="text-center">
                      <div className="text-2xl font-bold">{role.stats.primary}</div>
                      <div className="text-sm text-muted-foreground">{role.stats.secondary}</div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    asChild 
                    variant={colors.button as any}
                    size="lg" 
                    className="w-full gap-2"
                  >
                    <Link to={role.href}>
                      Access Portal
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};