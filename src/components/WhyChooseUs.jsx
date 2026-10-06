export default function WhyChooseUs() {
  const reasons = [
    {
      number: "01",
      title: "Product Reliability",
      description: "Focus on dependable industrial flow-control products suitable for various challenging conditions.",
    },
    {
      number: "02",
      title: "Technical Approach",
      description: "Product information and technical support presented clearly to assist your engineering team.",
    },
    {
      number: "03",
      title: "Professional Service",
      description: "A straightforward B2B enquiry and support experience designed around industry expectations.",
    },
    {
      number: "04",
      title: "Customer Focus",
      description: "Solutions centered around customer requirements, prioritizing practical and effective outcomes.",
    },
  ];

  return (
    <section className="py-24 bg-navy-900 text-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Why Choose T&T Traders
            </h2>
            <div className="w-16 h-1 bg-orange-500 mb-8"></div>
            <p className="text-steel-300 text-lg leading-relaxed">
              We are committed to providing professional service, technical clarity, and reliable products for the industrial valve sector.
            </p>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            {reasons.map((reason, index) => (
              <div key={index} className="relative pl-6 border-l border-steel-700 hover:border-orange-500 transition-colors duration-300">
                <span className="absolute left-0 top-0 -translate-x-1/2 bg-navy-900 text-orange-500 font-mono text-sm font-bold px-1">
                  {reason.number}
                </span>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {reason.title}
                </h3>
                <p className="text-steel-400 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
