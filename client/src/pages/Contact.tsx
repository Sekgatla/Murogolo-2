import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-heading font-bold text-primary text-center mb-12">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground">
              We are located in the beautiful rural community of Ha Muila. The best way to reach us is to visit the school directly during office hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Physical Address</h3>
                  <p className="text-muted-foreground">
                    Ha Muila, Kwaaidraai<br/>
                    Tshitale, Makhado<br/>
                    Limpopo Province
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Postal Address</h3>
                  <p className="text-muted-foreground">
                    P.O. Box 354<br/>
                    Muila
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Visiting Hours</h3>
                  <p className="text-muted-foreground">
                    Mon - Fri: 08:00 - 13:00<br/>
                    <span className="text-sm italic text-amber-600">Please report to reception upon arrival.</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl">
              <h4 className="font-bold text-primary mb-2">Note on Phone/Email</h4>
              <p className="text-sm text-blue-800">
                Our direct contact details are currently being updated. For urgent matters, please visit the school or contact the Vhembe West District education office.
              </p>
            </div>
          </div>

          <div className="h-full min-h-[400px] bg-slate-100 rounded-xl overflow-hidden relative border shadow-inner">
            <iframe 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed/v1/place?key=REPLACE_WITH_GOOGLE_MAPS_API_KEY&q=Murogolo+Primary+School,Ha+Muila,Limpopo"
              allowFullScreen
            ></iframe>
            {/* Fallback for mockup if key is missing */}
            <div className="absolute inset-0 flex items-center justify-center flex-col text-muted-foreground bg-muted/30 pointer-events-none">
              <MapPin className="h-12 w-12 mb-2 opacity-50" />
              <p className="font-bold">Murogolo Primary School</p>
              <p className="text-xs text-center px-8 mt-1">
                Ha Muila, Kwaaidraai, Tshitale
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
