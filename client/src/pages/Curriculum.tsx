import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Calculator, Globe, Heart, FlaskConical, Briefcase } from "lucide-react";
import sportsImage from "@/assets/school-sports.png";

export default function Curriculum() {
  const SubjectItem = ({ icon: Icon, title }: { icon: any, title: string }) => (
    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border shadow-sm hover:border-primary/50 transition-colors">
      <div className="bg-primary/5 p-2 rounded-md">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <span className="font-medium text-gray-700">{title}</span>
    </div>
  );

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-slate-50 border-b py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-heading font-bold text-primary mb-4">Academic Curriculum</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            We follow the South African CAPS national curriculum, ensuring a standardized and high-quality education for all learners.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="foundation" className="w-full">
          <div className="flex justify-center mb-10">
            <TabsList className="grid w-full max-w-md grid-cols-3 h-auto p-1 bg-muted/50">
              <TabsTrigger value="foundation" className="py-2 text-sm md:text-base font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm">Foundation</TabsTrigger>
              <TabsTrigger value="intermediate" className="py-2 text-sm md:text-base font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm">Intermediate</TabsTrigger>
              <TabsTrigger value="senior" className="py-2 text-sm md:text-base font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm">Senior</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="foundation" className="space-y-8">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h2 className="text-2xl font-bold text-primary mb-2">Foundation Phase (Grade R – 3)</h2>
              <p className="text-muted-foreground">Focus on basic literacy, numeracy, and life skills to build a strong base.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              <SubjectItem icon={BookOpen} title="Home Language" />
              <SubjectItem icon={Globe} title="First Additional Language" />
              <SubjectItem icon={Calculator} title="Mathematics" />
              <SubjectItem icon={Heart} title="Life Skills (Creative Arts & PE)" />
            </div>
          </TabsContent>

          <TabsContent value="intermediate" className="space-y-8">
             <div className="text-center max-w-2xl mx-auto mb-8">
              <h2 className="text-2xl font-bold text-primary mb-2">Intermediate Phase (Grade 4 – 6)</h2>
              <p className="text-muted-foreground">Expanding knowledge and introducing specific subjects.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              <SubjectItem icon={BookOpen} title="Home Language" />
              <SubjectItem icon={Globe} title="First Additional Language" />
              <SubjectItem icon={Calculator} title="Mathematics" />
              <SubjectItem icon={FlaskConical} title="Natural Sciences & Technology" />
              <SubjectItem icon={Globe} title="Social Sciences" />
              <SubjectItem icon={Heart} title="Life Skills & Creative Arts" />
            </div>
          </TabsContent>

          <TabsContent value="senior" className="space-y-8">
             <div className="text-center max-w-2xl mx-auto mb-8">
              <h2 className="text-2xl font-bold text-primary mb-2">Senior Phase (Grade 7)</h2>
              <p className="text-muted-foreground">Preparing learners for high school with specialized subjects.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              <SubjectItem icon={BookOpen} title="Home Language" />
              <SubjectItem icon={Globe} title="First Additional Language" />
              <SubjectItem icon={Calculator} title="Mathematics" />
              <SubjectItem icon={FlaskConical} title="Natural Sciences" />
              <SubjectItem icon={Globe} title="Social Sciences" />
              <SubjectItem icon={Briefcase} title="Economic Management Sciences" />
              <SubjectItem icon={Heart} title="Life Orientation" />
              <SubjectItem icon={Heart} title="Creative Arts" />
            </div>
          </TabsContent>
        </Tabs>

        {/* Extra Curricular */}
        <div className="mt-24">
          <div className="grid md:grid-cols-2 gap-12 items-center bg-primary/5 rounded-3xl overflow-hidden p-8 md:p-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-primary-foreground text-sm font-bold mb-4">
                <TrophyIcon className="w-4 h-4" />
                Beyond the Classroom
              </div>
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">Extra-Curricular Activities</h2>
              <p className="text-muted-foreground mb-6">
                We believe in developing the whole child. Depending on resources and season, we offer various activities to keep learners active and engaged.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {['Soccer', 'Netball', 'Athletics', 'Speech & Performance'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-secondary rounded-full" />
                    <span className="font-medium text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img 
                src={sportsImage} 
                alt="Students playing sports" 
                className="rounded-xl shadow-lg w-full h-64 object-cover transform md:rotate-2 hover:rotate-0 transition-transform duration-500" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrophyIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  )
}
