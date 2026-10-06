import WhyChooseUs from "@/components/WhyChooseUs";
import QualitySection from "@/components/QualitySection";
import Capabilities from "@/components/Capabilities";

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-navy-900 py-20 border-b-4 border-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About T&T Traders</h1>
          <p className="text-xl text-steel-300 max-w-2xl mx-auto">
            Industrial Valves & Flow Control Solutions
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">About T&T Traders</h2>
            <div className="w-12 h-1 bg-orange-500 mb-6"></div>
            <p className="text-charcoal/80 text-lg leading-relaxed bg-steel-50 p-6 rounded border border-steel-200">
              [Placeholder for verified company introduction. T&T Traders is a professional organization dedicated to providing dependable industrial solutions.]
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">What We Do</h2>
            <div className="w-12 h-1 bg-orange-500 mb-6"></div>
            <p className="text-charcoal/80 text-lg leading-relaxed">
              We specialize in providing high-quality industrial valves and flow-control products designed to meet the rigorous demands of various technical applications.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Our Approach</h2>
            <div className="w-12 h-1 bg-orange-500 mb-6"></div>
            <ul className="list-disc pl-6 space-y-3 text-charcoal/80 text-lg">
              <li>Product selection focused on reliability</li>
              <li>Commitment to rigorous quality standards</li>
              <li>Providing clear and accurate technical information</li>
              <li>Dedicated customer support</li>
              <li>Professional service for B2B engineering needs</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Company Information</h2>
            <div className="w-12 h-1 bg-orange-500 mb-6"></div>
            <div className="bg-navy-900 text-white p-8 rounded-lg">
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <strong className="w-24 text-orange-500">Address:</strong>
                  <span className="text-steel-300">[Company address to be provided]</span>
                </li>
                <li className="flex gap-4">
                  <strong className="w-24 text-orange-500">Phone:</strong>
                  <span className="text-steel-300">7777003323</span>
                </li>
                <li className="flex gap-4">
                  <strong className="w-24 text-orange-500">Email:</strong>
                  <span className="text-steel-300">gentlemanyusuf@gmail.com</span>
                </li>
                <li className="flex gap-4">
                  <strong className="w-24 text-orange-500">Registration:</strong>
                  <span className="text-steel-300">[Business registration information if provided]</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Integrated Sections */}
      <WhyChooseUs />
      <QualitySection />
      
      {/* Facilities Section Integrated */}
      <Capabilities />
      <section className="py-20 bg-steel-50 border-t border-steel-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Facilities & Operations</h2>
            <div className="w-12 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-charcoal/80 text-lg max-w-2xl mx-auto">
              [Note: If T&T Traders is a trader/distributor, this section reflects operational and warehouse capabilities rather than manufacturing.]
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
             <div className="aspect-[4/3] bg-white border border-steel-200 rounded flex items-center justify-center text-steel-400 font-semibold">[Warehouse Photo Placeholder]</div>
             <div className="aspect-[4/3] bg-white border border-steel-200 rounded flex items-center justify-center text-steel-400 font-semibold">[Inspection Area Photo Placeholder]</div>
             <div className="aspect-[4/3] bg-white border border-steel-200 rounded flex items-center justify-center text-steel-400 font-semibold">[Packaging Photo Placeholder]</div>
          </div>
        </div>
      </section>
    </div>
  );
}
