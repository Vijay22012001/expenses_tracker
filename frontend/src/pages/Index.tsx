import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { TrendingUp, Wallet, PieChart, ArrowRight, CalendarClock, HardDriveDownload, BriefcaseBusiness } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
              Business Analysis
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Smart Expense Tracking & Financial Management
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" onClick={() => navigate("/login")} className="gap-2">
              Get Started <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="secondary" onClick={() => navigate("/signup")}>
              Sign Up Free
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Wallet className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Track Expenses</CardTitle>
              <CardDescription>
                Monitor every transaction with ease and precision
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Keep detailed records of all your business expenses in one centralized location.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <PieChart className="w-6 h-6 text-accent" />
              </div>
              <CardTitle>Visual Reports</CardTitle>
              <CardDescription>
                Understand your spending with beautiful analytics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Get instant insights with interactive charts and comprehensive reports.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Growth Insights</CardTitle>
              <CardDescription>
                Make informed decisions with data-driven insights
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Identify trends and optimize your business spending patterns.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <BriefcaseBusiness className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Investment - Profit</CardTitle>
              <CardDescription>
                Make informed decisions with data-driven insights
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Identify trends and optimize your business spending patterns.
              </p>
            </CardContent>
          </Card>


          <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <CalendarClock className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Weekly - Montly Updates</CardTitle>
              <CardDescription>
                Expenditure Updates sent to your email - Weekly - Monthly
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Easily stay informed about your spending habits with regular email updates.
              </p>
            </CardContent>
          </Card>


          <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <HardDriveDownload className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Download</CardTitle>
              <CardDescription>
                Know your expenditure data in Excel for easy analysis and record-keeping.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Export your financial data effortlessly to Excel format for further analysis and reporting.
              </p>
            </CardContent>
          </Card>


        </div>
      </div>
    </div>
  );
};

export default Index;