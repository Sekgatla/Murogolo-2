import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Map, Building2, Flag } from "lucide-react";
import heroImage from "@/assets/hero-school.png";

export default function About() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Page Header */}
      <div className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">About Our School</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Get to know Murogolo Primary School, our leadership, and our commitment to the community.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">Who We Are</h2>
              <div className="prose prose-lg text-muted-foreground">
                <p className="mb-4">
                  Murogolo Primary School is a pillar of the Ha Muila community in Kwaaidraai, Tshitale. 
                  As a public primary school, we serve the children of the Vhembe District with pride and dedication.
                </p>
                <p className="mb-4">
                  We are a <strong>Quintile 2/3 No-Fee school</strong>, funded by the government to ensuring that education 
                  is accessible to all children in our area without financial barriers.
                </p>
                <p>
                  Our school caters to learners from <strong>Grade R (Reception Year)</strong> through to <strong>Grade 7</strong>, 
                  covering the Foundation, Intermediate, and Senior Phases of the South African education system.
                </p>
              </div>
            </section>

            <img 
              src={heroImage} 
              alt="School Campus" 
              className="w-full h-64 object-cover rounded-xl shadow-lg my-8" 
            />

            <section>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">Our Mission</h2>
              <Card className="bg-blue-50 border-none">
                <CardContent className="pt-6">
                  <p className="text-lg italic text-blue-900 font-medium text-center">
                    "To provide basic foundational education with a strong focus on literacy, numeracy, 
                    and life skills, empowering the youth of rural Limpopo."
                  </p>
                </CardContent>
              </Card>
            </section>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader className="bg-muted/50 pb-4">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-primary" />
                  School Details
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4 text-sm">
                <div>
                  <span className="block font-bold text-gray-900">EMIS Number</span>
                  <span className="text-muted-foreground">919341897</span>
                </div>
                <div>
                  <span className="block font-bold text-gray-900">School Type</span>
                  <span className="text-muted-foreground">Public Primary</span>
                </div>
                <div>
                  <span className="block font-bold text-gray-900">Phase</span>
                  <span className="text-muted-foreground">Foundation - Senior (Gr R-7)</span>
                </div>
                <div>
                  <span className="block font-bold text-gray-900">District</span>
                  <span className="text-muted-foreground">Vhembe West</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-muted/50 pb-4">
                <CardTitle className="text-lg flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  Leadership
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Mulaudzi N V</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">Principal</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-muted/50 pb-4">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Map className="h-5 w-5 text-primary" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <address className="not-italic text-muted-foreground">
                  Ha Muila, Kwaaidraai<br/>
                  Tshitale, Makhado<br/>
                  Limpopo Province
                </address>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
}
