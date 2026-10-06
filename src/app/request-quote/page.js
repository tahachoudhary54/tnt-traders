"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

export default function RequestQuotePage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, submit form data to backend here.
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white min-h-[70vh] flex items-center justify-center">
        <div className="text-center p-8 max-w-md">
          <CheckCircle2 className="w-16 h-16 text-orange-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-navy-900 mb-4">Enquiry Received</h2>
          <p className="text-charcoal/80 mb-8">
            Thank you for your request. Our team will review your requirements and respond shortly.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="text-orange-600 font-bold hover:text-navy-900 transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-steel-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4 tracking-tight">Request a Quote</h1>
          <p className="text-lg text-charcoal/80">
            Tell us what you need and our team can help you with the appropriate product information and quotation.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-steel-200 overflow-hidden">
          <form onSubmit={handleSubmit} className="p-8 md:p-12">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Personal Info */}
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-navy-900 border-b border-steel-200 pb-2">Contact Details</h3>
                
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-charcoal mb-2">Full Name *</label>
                  <input type="text" id="fullName" required className="w-full px-4 py-3 rounded border border-steel-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all" />
                </div>
                
                <div>
                  <label htmlFor="companyName" className="block text-sm font-semibold text-charcoal mb-2">Company Name *</label>
                  <input type="text" id="companyName" required className="w-full px-4 py-3 rounded border border-steel-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all" />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-charcoal mb-2">Email Address *</label>
                  <input type="email" id="email" required className="w-full px-4 py-3 rounded border border-steel-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all" />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-charcoal mb-2">Phone Number</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded border border-steel-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all" />
                </div>
                
                <div>
                  <label htmlFor="country" className="block text-sm font-semibold text-charcoal mb-2">Country</label>
                  <input type="text" id="country" className="w-full px-4 py-3 rounded border border-steel-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all" />
                </div>
              </div>

              {/* Product Requirements */}
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-navy-900 border-b border-steel-200 pb-2">Requirement Details</h3>
                
                <div>
                  <label htmlFor="product" className="block text-sm font-semibold text-charcoal mb-2">Product Category</label>
                  <select id="product" className="w-full px-4 py-3 rounded border border-steel-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all bg-white">
                    <option value="">Select a product...</option>
                    <option value="ball-valves">Ball Valves</option>
                    <option value="gate-valves">Gate Valves</option>
                    <option value="globe-valves">Globe Valves</option>
                    <option value="butterfly-valves">Butterfly Valves</option>
                    <option value="check-valves">Check Valves</option>
                    <option value="control-valves">Control Valves</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="quantity" className="block text-sm font-semibold text-charcoal mb-2">Required Quantity</label>
                  <input type="number" id="quantity" min="1" className="w-full px-4 py-3 rounded border border-steel-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all" />
                </div>
                
                <div>
                  <label htmlFor="application" className="block text-sm font-semibold text-charcoal mb-2">Application / Industry</label>
                  <input type="text" id="application" className="w-full px-4 py-3 rounded border border-steel-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all" />
                </div>
                
                <div>
                  <label htmlFor="specifications" className="block text-sm font-semibold text-charcoal mb-2">Required Specifications (Size, Pressure, Material)</label>
                  <input type="text" id="specifications" className="w-full px-4 py-3 rounded border border-steel-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all" />
                </div>
              </div>
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-semibold text-charcoal mb-2">Additional Message or Notes</label>
              <textarea id="message" rows="4" className="w-full px-4 py-3 rounded border border-steel-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all"></textarea>
            </div>
            
            <div className="mb-10">
              <label htmlFor="file" className="block text-sm font-semibold text-charcoal mb-2">Upload File (Datasheet, Drawing, BOM)</label>
              <input type="file" id="file" className="w-full text-sm text-charcoal file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-steel-100 file:text-navy-900 hover:file:bg-steel-200 transition-colors" />
            </div>

            <div className="text-center">
              <button type="submit" className="inline-flex items-center justify-center bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded font-bold tracking-wide transition-all shadow-md w-full md:w-auto">
                <Send className="mr-2 w-5 h-5" />
                Submit RFQ
              </button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
}
