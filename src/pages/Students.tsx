import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Brain, 
  Search, 
  Bookmark,
  MapPin,
  Clock,
  DollarSign,
  Building2,
  Star,
  Calendar,
  CheckCircle,
  AlertCircle,
  TrendingUp
} from "lucide-react";

const Students = () => {
  const studentStats = [
    { label: "Profile Match Score", value: "87%", icon: Brain, color: "primary" },
    { label: "Applications Sent", value: "12", icon: Users, color: "info" },
    { label: "Interviews Scheduled", value: "3", icon: Calendar, color: "warning" },
    { label: "Offers Received", value: "1", icon: Star, color: "success" }
  ];

  const recommendedInternships = [
    {
      id: 1,
      title: "Full Stack Development Intern",
      company: "TechCorp Solutions",
      match: 95,
      location: "Mumbai",
      duration: "3 months",
      stipend: "₹25,000/month",
      skills: ["React", "Node.js", "MongoDB"],
      deadline: "5 days left",
      applicants: 87
    },
    {
      id: 2,
      title: "Data Science Intern",
      company: "Analytics Pro",
      match: 92,
      location: "Bangalore",
      duration: "4 months",
      stipend: "₹30,000/month", 
      skills: ["Python", "ML", "SQL"],
      deadline: "2 weeks left",
      applicants: 54
    },
    {
      id: 3,
      title: "Product Management Intern",
      company: "StartupXYZ",
      match: 89,
      location: "Delhi",
      duration: "6 months",
      stipend: "₹28,000/month",
      skills: ["Strategy", "Analytics", "User Research"],
      deadline: "1 week left",
      applicants: 43
    }
  ];

  const applicationStatus = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "WebTech Inc",
      status: "Interview Scheduled",
      appliedDate: "2 days ago",
      nextStep: "Technical Interview - Jan 25"
    },
    {
      id: 2,
      title: "Mobile App Developer",
      company: "AppCraft Studios",
      status: "Under Review", 
      appliedDate: "1 week ago",
      nextStep: "Awaiting response"
    },
    {
      id: 3,
      title: "DevOps Intern",
      company: "CloudSystems",
      status: "Offer Received",
      appliedDate: "2 weeks ago",
      nextStep: "Accept by Jan 30"
    }
  ];

  return (
    <Layout>
      <div className="container py-8 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tight">Student Portal</h1>
            <p className="text-muted-foreground">Discover personalized internship opportunities</p>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Search className="h-4 w-4" />
              Advanced Search
            </Button>
            <Button variant="hero" size="sm" className="gap-2">
              <TrendingUp className="h-4 w-4" />
              Improve Profile
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {studentStats.map((stat, index) => {
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
                  <Brain className="h-5 w-5" />
                  AI-Recommended For You
                </h2>
                <Button variant="outline" size="sm" className="gap-2">
                  <Search className="h-4 w-4" />
                  Browse All
                </Button>
              </div>
              
              <div className="space-y-4">
                {recommendedInternships.map((internship) => (
                  <div key={internship.id} className="p-4 border border-border rounded-lg bg-background/50 space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <h3 className="font-medium">{internship.title}</h3>
                          <Badge variant="secondary" className="bg-primary text-primary-foreground">
                            {internship.match}% Match
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Building2 className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{internship.company}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Bookmark className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {internship.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {internship.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="h-3 w-3" />
                        {internship.stipend}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {internship.applicants} applied
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex space-x-1">
                        {internship.skills.slice(0, 3).map((skill, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-warning">{internship.deadline}</span>
                        <Button variant="default" size="sm">
                          Apply Now
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button variant="outline" className="w-full mt-4">
                Show More Recommendations
              </Button>
            </Card>
          </div>

          {/* Application Tracking */}
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Application Status</h2>
              
              <div className="space-y-4">
                {applicationStatus.map((application) => (
                  <div key={application.id} className="p-4 border border-border rounded-lg space-y-3">
                    <div className="space-y-2">
                      <h3 className="font-medium text-sm">{application.title}</h3>
                      <p className="text-xs text-muted-foreground">{application.company}</p>
                      <div className="flex items-center space-x-2">
                        {application.status === 'Offer Received' && (
                          <CheckCircle className="h-4 w-4 text-success" />
                        )}
                        {application.status === 'Interview Scheduled' && (
                          <Calendar className="h-4 w-4 text-warning" />
                        )}
                        {application.status === 'Under Review' && (
                          <AlertCircle className="h-4 w-4 text-info" />
                        )}
                        <Badge variant={
                          application.status === 'Offer Received' ? 'default' :
                          application.status === 'Interview Scheduled' ? 'secondary' :
                          'outline'
                        } className="text-xs">
                          {application.status}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">Applied: {application.appliedDate}</p>
                      <p className="text-xs font-medium">{application.nextStep}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Profile Enhancement */}
            <Card className="p-6 border-success/20 bg-gradient-success/5">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Boost Your Profile
              </h2>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span>Profile Completeness</span>
                  <span className="font-semibold">87%</span>
                </div>
                <div className="h-2 bg-muted rounded-full">
                  <div className="h-2 bg-gradient-success rounded-full" style={{ width: '87%' }} />
                </div>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li>• Add more project details</li>
                  <li>• Upload portfolio samples</li>
                  <li>• Complete skill assessments</li>
                </ul>
                <Button variant="success" size="sm" className="w-full mt-3">
                  Complete Profile
                </Button>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <Button variant="outline" size="sm" className="w-full justify-start gap-2">
                  <Search className="h-4 w-4" />
                  Search Internships
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start gap-2">
                  <Bookmark className="h-4 w-4" />
                  Saved Opportunities
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start gap-2">
                  <Calendar className="h-4 w-4" />
                  Interview Schedule
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start gap-2">
                  <Building2 className="h-4 w-4" />
                  Company Research
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Students;