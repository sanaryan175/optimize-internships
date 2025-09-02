import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Users, 
  Plus, 
  Search, 
  Filter,
  Eye,
  MessageSquare,
  Star,
  Calendar,
  MapPin,
  Clock,
  DollarSign
} from "lucide-react";

const Companies = () => {
  const companyStats = [
    { label: "Active Postings", value: "8", icon: Building2, color: "primary" },
    { label: "Applications Received", value: "247", icon: Users, color: "info" },
    { label: "Interviews Scheduled", value: "32", icon: Calendar, color: "warning" },
    { label: "Selections Made", value: "12", icon: Star, color: "success" }
  ];

  const aiSuggestions = [
    {
      id: 1,
      name: "Priya Sharma",
      match: 95,
      skills: ["React", "Node.js", "MongoDB"],
      location: "Mumbai",
      rating: 4.8,
      experience: "2nd Year, Computer Science"
    },
    {
      id: 2,
      name: "Rahul Kumar",
      match: 92,
      skills: ["Python", "Django", "PostgreSQL"],
      location: "Delhi",
      rating: 4.6,
      experience: "3rd Year, Software Engineering"
    },
    {
      id: 3,
      name: "Ananya Patel",
      match: 89,
      skills: ["Java", "Spring Boot", "MySQL"],
      location: "Bangalore",
      rating: 4.7,
      experience: "2nd Year, Information Technology"
    }
  ];

  const internshipPostings = [
    {
      id: 1,
      title: "Full Stack Development Intern",
      applications: 87,
      status: "Active",
      duration: "3 months",
      stipend: "₹25,000/month",
      posted: "5 days ago"
    },
    {
      id: 2,
      title: "Data Science Intern",
      applications: 54,
      status: "Active", 
      duration: "4 months",
      stipend: "₹30,000/month",
      posted: "2 weeks ago"
    },
    {
      id: 3,
      title: "UI/UX Design Intern",
      applications: 32,
      status: "Reviewing",
      duration: "3 months", 
      stipend: "₹20,000/month",
      posted: "1 week ago"
    }
  ];

  return (
    <Layout>
      <div className="container py-8 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tight">Company Dashboard</h1>
            <p className="text-muted-foreground">Manage your internship programs and find top talent</p>
          </div>
          <Button variant="hero" size="lg" className="gap-2">
            <Plus className="h-4 w-4" />
            Post New Internship
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
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
          {/* AI Recommendations */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6 border-primary/20 bg-gradient-primary/5">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  AI-Recommended Candidates
                </h2>
                <Button variant="outline" size="sm" className="gap-2">
                  <Filter className="h-4 w-4" />
                  Filters
                </Button>
              </div>
              
              <div className="space-y-4">
                {aiSuggestions.map((candidate) => (
                  <div key={candidate.id} className="flex items-center justify-between p-4 border border-border rounded-lg bg-background/50">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <h3 className="font-medium">{candidate.name}</h3>
                        <Badge variant="secondary" className="bg-primary text-primary-foreground">
                          {candidate.match}% Match
                        </Badge>
                        <div className="flex items-center space-x-1">
                          <Star className="h-3 w-3 fill-warning text-warning" />
                          <span className="text-xs">{candidate.rating}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{candidate.experience}</p>
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-3 w-3" />
                          <span>{candidate.location}</span>
                        </div>
                        <div className="flex space-x-1">
                          {candidate.skills.map((skill, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="default" size="sm">
                        <MessageSquare className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button variant="outline" className="w-full mt-4">
                View All Candidates ({aiSuggestions.length * 3}+)
              </Button>
            </Card>
          </div>

          {/* Current Postings */}
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Your Postings</h2>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-4">
                {internshipPostings.map((posting) => (
                  <div key={posting.id} className="p-4 border border-border rounded-lg space-y-3">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-sm">{posting.title}</h3>
                        <Badge variant={posting.status === 'Active' ? 'default' : 'secondary'}>
                          {posting.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{posting.applications} applications</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {posting.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="h-3 w-3" />
                        {posting.stipend}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-xs text-muted-foreground">{posting.posted}</span>
                      <Button variant="outline" size="sm">
                        Review
                      </Button>
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
                  <Plus className="h-4 w-4" />
                  Create New Posting
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start gap-2">
                  <Users className="h-4 w-4" />
                  Browse Candidates
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start gap-2">
                  <Calendar className="h-4 w-4" />
                  Schedule Interviews
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Message Students
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Companies;