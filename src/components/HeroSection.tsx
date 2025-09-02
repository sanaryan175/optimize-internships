import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Bot, Users, Building2, Shield, Zap, Target, TrendingUp } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-info/5 to-success/5" />
      
      {/* Hero content */}
      <div className="relative container py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <Bot className="h-4 w-4 mr-2" />
                AI-Powered Matching Engine
              </div>
              
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                Smart Internship
                <span className="block bg-gradient-hero bg-clip-text text-transparent">
                  Allocation Platform
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-[600px]">
                Revolutionizing the PM Internship Scheme with AI-driven matching. 
                Connect the right students with the right opportunities, efficiently and fairly.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="gap-2">
                Explore Platform
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Students Matched</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Partner Companies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Match Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right column - Feature cards */}
          <div className="lg:pl-8">
            <div className="grid gap-6">
              {/* AI Matching Card */}
              <Card className="p-6 border-primary/20 bg-gradient-primary/5">
                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-primary">
                    <Bot className="h-6 w-6 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">AI Matching Engine</h3>
                    <p className="text-sm text-muted-foreground">
                      Advanced algorithms analyze skills, preferences, and requirements for optimal matches.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Multi-stakeholder Card */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 text-center border-success/20 bg-gradient-success/5">
                  <Shield className="h-8 w-8 text-success mx-auto mb-2" />
                  <h4 className="font-semibold text-sm">Government</h4>
                  <p className="text-xs text-muted-foreground">Policy & Oversight</p>
                </Card>
                
                <Card className="p-4 text-center border-info/20 bg-info/5">
                  <Building2 className="h-8 w-8 text-info mx-auto mb-2" />
                  <h4 className="font-semibold text-sm">Companies</h4>
                  <p className="text-xs text-muted-foreground">Talent Acquisition</p>
                </Card>
              </div>

              {/* Benefits Card */}
              <Card className="p-6 border-warning/20 bg-warning/5">
                <div className="space-y-4">
                  <h3 className="font-semibold flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-warning" />
                    Key Benefits
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-warning" />
                      <span>Fast Matching</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-warning" />
                      <span>High Accuracy</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-warning" />
                      <span>Fair Allocation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-warning" />
                      <span>Transparent</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};