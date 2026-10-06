import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Industries", href: "/industries" },
  { name: "Contact", href: "/contact" },
];

const products = [
  { name: "Butterfly Valves", href: "/products/butterfly-valves" },
  { name: "Ball Valves", href: "/products/ball-valves" },
  { name: "Gate & Globe Valves", href: "/products/gate-globe-valves" },
  { name: "Plug Valves", href: "/products/plug-valves" },
  { name: "Check Valves", href: "/products/check-valves" },
  { name: "Control Valves", href: "/products/control-valves" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8 border-t-4 border-orange-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              T&T TRADERS
            </h2>
            <p className="text-steel-300 max-w-sm">
              Industrial Valves & Flow Control Solutions
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Navigation</h3>
            <ul className="grid grid-cols-2 gap-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-steel-300 hover:text-orange-500 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Products</h3>
            <ul className="space-y-2">
              {products.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-steel-300 hover:text-orange-500 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-steel-300">
                <MapPin className="w-5 h-5 text-orange-500 shrink-0" />
                <span>[Company address to be provided]</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-steel-300">
                <Phone className="w-5 h-5 text-orange-500 shrink-0" />
                <span>7777003323</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-steel-300">
                <Mail className="w-5 h-5 text-orange-500 shrink-0" />
                <span>gentlemanyusuf@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-navy-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-steel-400 text-sm">
            © 2026 T&T Traders. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="text-steel-400 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-steel-400 hover:text-white text-sm transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
