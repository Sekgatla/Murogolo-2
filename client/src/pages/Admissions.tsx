import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Shirt, Info, FileText, CalendarCheck } from "lucide-react";

export default function Admissions() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">Admissions Info</h1>
          <p className="text-xl opacity-90">Join the Murogolo family. Here's everything you need to know.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        
        {/* No Fees Alert */}
        <Alert className="mb-10 border-l-4 border-l-secondary bg-blue-50 text-blue-900 border-t-0 border-r-0 border-b-0">
          <Info className="h-5 w-5 text-secondary" />
          <AlertTitle className="font-bold text-lg">No Tuition Fees</AlertTitle>
          <AlertDescription>
            Murogolo Primary is a government-funded <strong>No-Fee School</strong>. We believe quality education should be accessible to everyone in our community.
          </AlertDescription>
        </Alert>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Documents */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <FileText className="h-6 w-6" />
                Required Documents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {[
                  "Child’s certified birth certificate",
                  "Parent/guardian ID document",
                  "Proof of residence",
                  "Last school report (if transferring)"
                ].map((req, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">{i+1}</span>
                    </div>
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Timing */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <CalendarCheck className="h-6 w-6" />
                When to Apply
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Admissions for the next academic year typically open in the second term.
              </p>
              <div className="bg-muted p-4 rounded-lg text-center">
                <span className="block text-sm text-muted-foreground uppercase tracking-wider mb-1">Registration Period</span>
                <span className="block text-2xl font-bold text-primary">April – October</span>
              </div>
              <p className="text-sm text-muted-foreground mt-4 italic">
                * Please visit the school office early to secure a place as space may be limited.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Uniform */}
        <div className="mt-12">
          <h2 className="text-2xl font-heading font-bold text-primary mb-6 flex items-center gap-2">
            <Shirt className="h-6 w-6" />
            School Uniform
          </h2>
          <Card className="bg-slate-50 border-dashed">
            <CardContent className="pt-6">
              <p className="text-gray-700 leading-relaxed">
                Murogolo has a strict school uniform policy to promote discipline, equality, and school pride. 
                The specific colors and designs are set by the School Governing Body (SGB).
              </p>
              <div className="mt-4 flex gap-4">
                <div className="bg-white p-4 rounded border text-center flex-1">
                  <span className="block font-bold text-primary mb-1">Boys</span>
                  <span className="text-sm text-muted-foreground">Standard school uniform (Contact school for specifics)</span>
                </div>
                <div className="bg-white p-4 rounded border text-center flex-1">
                  <span className="block font-bold text-primary mb-1">Girls</span>
                  <span className="text-sm text-muted-foreground">Standard school uniform (Contact school for specifics)</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
}
