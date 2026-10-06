import { ShieldCheck, Settings, HeadphonesIcon } from "lucide-react";

export default function TrustStrip() {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-orange-600 mb-4" />,
      title: "Reliable Products",
      description: "Industrial products selected for demanding applications.",
    },
    {
      icon: <Settings className="w-8 h-8 text-orange-600 mb-4" />,
      title: "Technical Focus",
      description: "A product-focused approach to industrial flow control.",
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8 text-orange-600 mb-4" />,
      title: "Professional Support",
      description: "Support for customers throughout product selection and enquiry.",
    },
  ];

  return (
    <section className="bg-steel-50 border-b border-steel-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4 tracking-tight">
            Flow Control Solutions for Industrial Applications
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-charcoal/80">
            T&T Traders focuses on industrial valves and flow-control products, providing professional service for your engineering requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-sm border border-steel-100 hover:shadow-md transition-shadow duration-300"
            >
              {feature.icon}
              <h3 className="text-xl font-bold text-navy-900 mb-3">{feature.title}</h3>
              <p className="text-charcoal/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
