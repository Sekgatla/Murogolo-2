import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Users, BookOpen, Trophy } from "lucide-react";
import heroImage from "@/assets/hero-school.png";
import studentImage from "@/assets/students-learning.png";

export default function Home() {
  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Murogolo Primary School Building" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-2xl">
            <div className="inline-block bg-secondary text-primary font-bold px-3 py-1 rounded-full text-sm mb-4">
              Limpopo Province • Vhembe District
            </div>
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              Welcome to <br/>
              <span className="text-secondary">Murogolo Primary</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 font-light">
              Building a strong foundation for future leaders through quality public education in Ha Muila.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold text-lg h-14 px-8">
                  About Our School
                </Button>
              </Link>
              <Link href="/admissions">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 font-bold text-lg h-14 px-8">
                  Admissions Info
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <Users className="h-10 w-10 text-secondary mx-auto mb-3" />
              <div className="text-4xl font-bold font-heading mb-1">~150</div>
              <div className="text-sm opacity-80 uppercase tracking-wider">Learners</div>
            </div>
            <div className="p-4">
              <BookOpen className="h-10 w-10 text-secondary mx-auto mb-3" />
              <div className="text-4xl font-bold font-heading mb-1">8</div>
              <div className="text-sm opacity-80 uppercase tracking-wider">Grades (R-7)</div>
            </div>
            <div className="p-4">
              <Trophy className="h-10 w-10 text-secondary mx-auto mb-3" />
              <div className="text-4xl font-bold font-heading mb-1">5+</div>
              <div className="text-sm opacity-80 uppercase tracking-wider">Educators</div>
            </div>
            <div className="p-4">
              <CheckCircle2 className="h-10 w-10 text-secondary mx-auto mb-3" />
              <div className="text-4xl font-bold font-heading mb-1">No-Fee</div>
              <div className="text-sm opacity-80 uppercase tracking-wider">Public School</div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome / Intro */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="absolute -inset-4 bg-secondary/20 rounded-2xl transform -rotate-2" />
              <img 
                src={studentImage} 
                alt="Students Learning" 
                className="relative rounded-xl shadow-xl w-full object-cover aspect-[4/3]"
              />
            </div>
            
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                Nurturing Potential in <span className="text-secondary">Every Child</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Murogolo Primary School is a public school located in the heart of Ha Muila, Kwaaidraai. 
                We are dedicated to providing accessible, high-quality education to learners from Grade R to Grade 7.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Official CAPS Curriculum followed",
                  "Government funded No-Fee School",
                  "Focus on Literacy and Numeracy",
                  "Community-centered environment"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-secondary" />
                    <span className="font-medium text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/curriculum">
                <Button className="text-primary-foreground font-bold">
                  View Curriculum
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values Cards */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">Why Choose Murogolo?</h2>
            <p className="text-muted-foreground">We strive to create a safe, disciplined, and stimulating environment for all our learners.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-8 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3">Quality Education</h3>
                <p className="text-muted-foreground">
                  Following the national CAPS curriculum with dedicated teachers focused on foundational skills.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-8 text-center">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3">Inclusive Community</h3>
                <p className="text-muted-foreground">
                  A welcoming environment where every child belongs, regardless of their background.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-8 text-center">
                <div className="bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Trophy className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3">Holistic Growth</h3>
                <p className="text-muted-foreground">
                  Beyond academics, we offer sports and cultural activities to develop well-rounded learners.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
