import { CheckCircle2 } from "lucide-react";

export default function Capabilities() {
  const capabilities = [
    "Product Selection",
    "Technical Support",
    "Quality Inspection",
    "Packaging & Dispatch",
    "Customer Support",
  ];

  return (
    <section className="py-24 bg-white" id="capabilities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="relative aspect-square md:aspect-[4/3] w-full rounded-lg overflow-hidden shadow-lg bg-steel-100">
              <img
                src="/images/industrial-bg.png"
                alt="Industrial facilities placeholder"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-navy-900/10"></div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4 tracking-tight">
              Our Capabilities
            </h2>
            <div className="w-16 h-1 bg-orange-500 mb-8"></div>
            <p className="text-lg text-charcoal/80 mb-8 leading-relaxed">
              We provide a comprehensive approach to industrial valve supply, ensuring that each step from product selection to final dispatch is handled professionally and meets your requirements.
            </p>
            
            <ul className="space-y-4">
              {capabilities.map((item, index) => (
                <li key={index} className="flex items-center text-charcoal/90 text-lg font-medium">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 mr-4 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
