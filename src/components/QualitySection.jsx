import { FileCheck } from "lucide-react";

export default function QualitySection() {
  const focusAreas = [
    "Rigorous product inspection",
    "Comprehensive documentation",
    "Strict adherence to specifications",
    "Reliable component sourcing",
    "Alignment with customer requirements",
  ];

  return (
    <section className="py-24 bg-steel-50 border-t border-steel-200" id="quality">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-steel-200">
          
          <div className="lg:w-1/2 p-12 lg:p-16 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4 tracking-tight">
              Quality Comes First
            </h2>
            <div className="w-16 h-1 bg-orange-500 mb-8"></div>
            
            <p className="text-charcoal/80 text-lg mb-8 leading-relaxed">
              We understand that in industrial flow control, quality cannot be compromised. Our focus is on delivering robust solutions that perform reliably in the field.
            </p>
            
            <ul className="space-y-3 mb-10">
              {focusAreas.map((area, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-orange-500 mt-2 mr-3 shrink-0"></span>
                  <span className="text-charcoal/90">{area}</span>
                </li>
              ))}
            </ul>
            
            <div className="bg-steel-50 p-6 border-l-4 border-navy-900 rounded-r-lg">
              <div className="flex items-center gap-3 mb-2">
                <FileCheck className="w-6 h-6 text-navy-900" />
                <h3 className="font-bold text-navy-900">Certifications & Standards</h3>
              </div>
              <p className="text-sm text-charcoal/70 italic">
                [Certification information to be provided.]
              </p>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative min-h-[400px]">
            <img
              src="/images/industrial-bg.png"
              alt="Quality Inspection"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-navy-900/20 mix-blend-multiply"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
