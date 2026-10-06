import Link from "next/link";
import { ArrowRight } from "lucide-react";

const industries = [
  {
    name: "Oil & Gas",
    description: "Proposed solutions for extraction, processing, and distribution facilities.",
    image: "/images/industrial-bg.png",
  },
  {
    name: "Water & Wastewater",
    description: "Proposed equipment for treatment plants and municipal fluid transport.",
    image: "/images/industrial-bg.png",
  },
  {
    name: "Chemical Processing",
    description: "Proposed corrosion-resistant valves for aggressive media and chemicals.",
    image: "/images/industrial-bg.png",
  },
  {
    name: "Power Generation",
    description: "Proposed high-pressure and high-temperature flow control applications.",
    image: "/images/industrial-bg.png",
  },
  {
    name: "Manufacturing",
    description: "Proposed reliable valves for general industrial manufacturing processes.",
    image: "/images/industrial-bg.png",
  },
  {
    name: "Process Industries",
    description: "Proposed solutions tailored for various continuous process requirements.",
    image: "/images/industrial-bg.png",
  },
];

export default function IndustriesSection() {
  return (
    <section className="py-24 bg-steel-50 border-t border-steel-200" id="industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4 tracking-tight">
            Industries & Applications
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-charcoal/80">
            T&T Traders aims to support a diverse range of demanding industrial environments with appropriate valve solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="group relative h-80 rounded-lg overflow-hidden flex flex-col justify-end"
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src={industry.image} 
                  alt={industry.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/60 to-transparent"></div>
              </div>
              
              <div className="relative z-10 p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {industry.name}
                </h3>
                <p className="text-steel-300 text-sm mb-4">
                  {industry.description}
                </p>
                <div className="flex items-center text-orange-500 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Application <ArrowRight className="ml-1 w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
