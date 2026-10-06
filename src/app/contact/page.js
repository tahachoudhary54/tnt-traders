import Link from "next/link";
import { Mail, Phone, MapPin, Clock, MessageSquare, FileText } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-white">
      <section className="bg-navy-900 py-16 border-b-4 border-orange-600 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
        <p className="text-steel-300 max-w-2xl mx-auto px-4">
          Let's talk about your requirements.
        </p>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Left: Contact Info */}
            <div className="lg:w-1/3">
              <h2 className="text-2xl font-bold text-navy-900 mb-8">Get In Touch</h2>
              
              <ul className="space-y-8 mb-12">
                <li className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-steel-100 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-900 mb-1">Office Address</h3>
                    <p className="text-charcoal/70">[Company address to be provided]</p>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-steel-100 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-900 mb-1">Phone</h3>
                    <p className="text-charcoal/70">7777003323</p>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-steel-100 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-900 mb-1">WhatsApp</h3>
                    <p className="text-charcoal/70">7777003323</p>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-steel-100 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-900 mb-1">Email</h3>
                    <p className="text-charcoal/70">gentlemanyusuf@gmail.com</p>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-steel-100 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-900 mb-1">Business Hours</h3>
                    <p className="text-charcoal/70">[Business hours to be provided]</p>
                  </div>
                </li>
              </ul>
              
              <div className="bg-steel-50 p-6 rounded border border-steel-200">
                <h3 className="font-bold text-navy-900 mb-2">Need a Quotation?</h3>
                <p className="text-charcoal/70 text-sm mb-4">
                  For detailed product inquiries, please use our dedicated request form.
                </p>
                <Link
                  href="/request-quote"
                  className="inline-flex items-center text-orange-600 font-bold hover:text-navy-900 transition-colors"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Request a Quote
                </Link>
              </div>
            </div>
            
            {/* Right: Form & Map */}
            <div className="lg:w-2/3 space-y-12">
              <div className="bg-white border border-steel-200 rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-bold text-navy-900 mb-6">Send an Enquiry</h2>
                <form>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-charcoal mb-2">Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded border border-steel-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-charcoal mb-2">Company</label>
                      <input type="text" className="w-full px-4 py-3 rounded border border-steel-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-charcoal mb-2">Email</label>
                      <input type="email" className="w-full px-4 py-3 rounded border border-steel-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-charcoal mb-2">Phone</label>
                      <input type="text" className="w-full px-4 py-3 rounded border border-steel-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all" />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-charcoal mb-2">Message</label>
                    <textarea rows="5" className="w-full px-4 py-3 rounded border border-steel-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all"></textarea>
                  </div>
                  <button type="submit" className="bg-navy-900 text-white px-8 py-3 rounded font-bold tracking-wide hover:bg-orange-600 transition-colors shadow-sm">
                    Send Enquiry
                  </button>
                </form>
              </div>
              

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
