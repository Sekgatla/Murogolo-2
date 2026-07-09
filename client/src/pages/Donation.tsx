import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heart, CreditCard, Landmark, Wallet, ArrowRight, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Donation() {
  const { toast } = useToast();
  const [amount, setAmount] = useState("");

  const handleDonate = (method: string) => {
    toast({
      title: "Redirecting...",
      description: `You are being redirected to our secure ${method} payment gateway.`,
    });
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Heart className="h-12 w-12 text-secondary mx-auto mb-4 animate-pulse" />
          <h1 className="text-4xl font-heading font-bold mb-4">Support Our School</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Your contributions help us provide better resources, facilities, and opportunities for the children of Ha Muila.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Donation Form */}
          <div className="md:col-span-2 space-y-8">
            <Card className="border-none shadow-lg">
              <CardHeader className="bg-slate-50 border-b">
                <CardTitle className="text-primary flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Make a Contribution
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-8 space-y-6">
                <div className="space-y-4">
                  <Label className="text-lg font-bold">Select or Enter Amount (ZAR)</Label>
                  <div className="grid grid-cols-4 gap-3">
                    {["100", "200", "500", "1000"].map((a) => (
                      <Button 
                        key={a} 
                        variant={amount === a ? "default" : "outline"}
                        className="font-bold py-6 text-lg"
                        onClick={() => setAmount(a)}
                      >
                        R{a}
                      </Button>
                    ))}
                  </div>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 font-bold text-gray-500">R</span>
                    <Input 
                      type="number" 
                      placeholder="Other Amount" 
                      className="pl-8 py-6 text-lg"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <Label className="text-lg font-bold">Payment Method</Label>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <Button 
                      variant="outline" 
                      className="h-24 flex flex-col gap-2 hover:border-primary hover:bg-primary/5 transition-all"
                      onClick={() => handleDonate("Card")}
                    >
                      <CreditCard className="h-6 w-6 text-primary" />
                      <span>Credit/Debit</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="h-24 flex flex-col gap-2 hover:border-primary hover:bg-primary/5 transition-all"
                      onClick={() => handleDonate("EFT")}
                    >
                      <Landmark className="h-6 w-6 text-primary" />
                      <span>Instant EFT</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="h-24 flex flex-col gap-2 hover:border-primary hover:bg-primary/5 transition-all"
                      onClick={() => handleDonate("Wallet")}
                    >
                      <Wallet className="h-6 w-6 text-primary" />
                      <span>SnapScan / Zapper</span>
                    </Button>
                  </div>
                </div>

                <Button className="w-full py-8 text-xl font-bold rounded-xl shadow-lg mt-4 group">
                  Proceed to Secure Payment
                  <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Button>

                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground pt-4">
                  <ShieldCheck className="h-4 w-4 text-accent" />
                  Secure 256-bit encrypted payment processing
                </div>
              </CardContent>
            </Card>

            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="bg-secondary/10 border-none">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-primary mb-2">School Bank Account</h3>
                  <div className="space-y-1 text-sm text-gray-700">
                    <p><span className="font-medium">Bank:</span> FNB (First National Bank)</p>
                    <p><span className="font-medium">Acc Name:</span> Murogolo Primary School</p>
                    <p><span className="font-medium">Acc Number:</span> 62345678901</p>
                    <p><span className="font-medium">Branch Code:</span> 250655</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-accent/10 border-none">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-primary mb-2">Resource Donations</h3>
                  <p className="text-sm text-gray-700">
                    We also welcome donations of books, stationery, sports equipment, and school uniforms. Please contact the office for physical drop-offs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Impact Sidebar */}
          <div className="space-y-6">
            <h3 className="text-2xl font-heading font-bold text-primary">Your Impact</h3>
            <div className="space-y-4">
              {[
                { title: "Learning Materials", desc: "Providing textbooks and stationery for our learners." },
                { title: "Sporting Equipment", desc: "Upgrading our soccer and netball facilities." },
                { title: "School Nutrition", desc: "Supporting our daily meal program for students." },
                { title: "Infrastructure", desc: "Maintaining and improving our school buildings." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 bg-white rounded-lg border shadow-sm">
                  <div className="h-10 w-10 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                    <span className="font-bold text-primary">{i+1}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">{item.title}</h4>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Card className="bg-primary text-white overflow-hidden">
              <div className="p-6">
                <h4 className="font-bold mb-2">Transparency</h4>
                <p className="text-sm opacity-80 leading-relaxed">
                  Every cent donated is accounted for by the School Governing Body (SGB) and used exclusively for the betterment of Murogolo Primary.
                </p>
              </div>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
}
