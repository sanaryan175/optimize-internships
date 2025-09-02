import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  BarChart3, 
  Users, 
  Building2, 
  TrendingUp, 
  AlertCircle,
  CheckCircle,
  Clock,
  Settings,
  Download,
  Plus
} from "lucide-react";

const Government = () => {
  const stats = [
    { label: "Active Programs", value: "15", change: "+2 this month", icon: Shield, color: "success" },
    { label: "Total Applications", value: "12,847", change: "+15% vs last year", icon: Users, color: "info" },
    { label: "Partner Companies", value: "547", change: "+23 new this quarter", icon: Building2, color: "primary" },
    { label: "Success Rate", value: "94.7%", change: "+2.1% improvement", icon: TrendingUp, color: "success" }
  ];

  const recentAlerts = [
    { id: 1, type: "warning", message: "High application volume detected for Tech internships", time: "2 hours ago" },
    { id: 2, type: "success", message: "Q4 allocation targets achieved ahead of schedule", time: "5 hours ago" },
    { id: 3, type: "info", message: "New company partnership pending approval", time: "1 day ago" }
  ];

  const programStatus = [
    { name: "Summer Tech Program 2024", applications: 2847, companies: 45, status: "active" },
    { name: "Healthcare Internship Initiative", applications: 1203, companies: 28, status: "pending" },
    { name: "Finance Sector Placement", applications: 956, companies: 23, status: "active" },
    { name: "NGO Social Impact Program", applications: 743, companies: 15, status: "completed" }
  ];

  return (
    <Layout>
      <div className="container py-8 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tight">Government Dashboard</h1>
            <p className="text-muted-foreground">PM Internship Scheme Management Portal</p>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="h-4 w-4" />
              Export Report
            </Button>
            <Button variant="default" size="sm" className="gap-2">
              <Plus className="h-4 w-4" />
              New Program
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-xs text-success">{stat.change}</p>
                  </div>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-${stat.color}`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Program Management */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Active Programs</h2>
                <Button variant="outline" size="sm" className="gap-2">
                  <Settings className="h-4 w-4" />
                  Manage
                </Button>
              </div>
              
              <div className="space-y-4">
                {programStatus.map((program, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-medium">{program.name}</h3>
                        <Badge variant={
                          program.status === 'active' ? 'default' : 
                          program.status === 'pending' ? 'secondary' : 
                          'outline'
                        }>
                          {program.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {program.applications} applications • {program.companies} companies
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      {program.status === 'active' && <CheckCircle className="h-5 w-5 text-success" />}
                      {program.status === 'pending' && <Clock className="h-5 w-5 text-warning" />}
                      {program.status === 'completed' && <CheckCircle className="h-5 w-5 text-muted-foreground" />}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* AI Oversight Panel */}
            <Card className="p-6 border-primary/20 bg-gradient-primary/5">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5" />
                AI Matching Oversight
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium">Match Accuracy</p>
                  <p className="text-2xl font-bold text-primary">96.8%</p>
                  <p className="text-xs text-success">+1.2% this week</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Fairness Score</p>
                  <p className="text-2xl font-bold text-primary">9.4/10</p>
                  <p className="text-xs text-success">Excellent</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="mt-4 w-full">
                Review AI Parameters
              </Button>
            </Card>
          </div>

          {/* Alerts & Notifications */}
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Recent Alerts</h2>
              <div className="space-y-4">
                {recentAlerts.map((alert) => (
                  <div key={alert.id} className="flex items-start space-x-3 p-3 border border-border rounded-lg">
                    <AlertCircle className={`h-4 w-4 mt-0.5 ${
                      alert.type === 'warning' ? 'text-warning' :
                      alert.type === 'success' ? 'text-success' :
                      'text-info'
                    }`} />
                    <div className="space-y-1">
                      <p className="text-sm">{alert.message}</p>
                      <p className="text-xs text-muted-foreground">{alert.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <Button variant="outline" size="sm" className="w-full justify-start gap-2">
                  <BarChart3 className="h-4 w-4" />
                  Generate Analytics Report
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start gap-2">
                  <Users className="h-4 w-4" />
                  Review Applications
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start gap-2">
                  <Building2 className="h-4 w-4" />
                  Approve New Companies
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start gap-2">
                  <Settings className="h-4 w-4" />
                  System Configuration
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Government;