import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand */}
          <div>
            <h3 className="text-white font-heading font-bold text-xl mb-4">Murogolo Primary</h3>
            <p className="text-sm leading-relaxed max-w-xs">
              Providing quality foundation, intermediate, and senior phase education to the community of Ha Muila since its establishment.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-heading font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary shrink-0" />
                <span>Ha Muila, Kwaaidraai, Tshitale,<br />Makhado, Limpopo</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <span>P.O. Box 354, Muila</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-heading font-bold text-lg mb-4">School Hours</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between max-w-[200px]">
                <span>Mon - Thu:</span>
                <span className="text-white">07:30 - 14:30</span>
              </li>
              <li className="flex justify-between max-w-[200px]">
                <span>Friday:</span>
                <span className="text-white">07:30 - 13:00</span>
              </li>
              <li className="flex justify-between max-w-[200px] mt-2 text-yellow-500 font-medium">
                <span>Weekends:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-xs opacity-60">
          <p>&copy; {new Date().getFullYear()} Murogolo Primary School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
