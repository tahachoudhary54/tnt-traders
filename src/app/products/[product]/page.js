import Link from "next/link";
import { ArrowLeft, Download, FileText } from "lucide-react";

export default function ProductDetailPage({ params }) {
  // In a real app, you would fetch product details based on params.product
  const productName = params.product.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  return (
    <div className="bg-white">
      {/* Breadcrumb / Back */}
      <div className="bg-steel-50 border-b border-steel-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/products" className="inline-flex items-center text-sm font-semibold text-charcoal hover:text-orange-600 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Products
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left: Gallery */}
          <div className="lg:w-1/2">
            <div className="bg-navy-900 rounded-lg overflow-hidden border border-navy-800 aspect-[4/3] flex items-center justify-center relative shadow-2xl">
               {/* Dark industrial background texture */}
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-30"></div>
               <div className="absolute inset-0 bg-gradient-to-tr from-navy-900 via-transparent to-navy-900/80"></div>
               <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
               
               {/* Product Image */}
               <img 
                  src="https://images.unsplash.com/photo-1621643195222-293e5066db2b?auto=format&fit=crop&q=80&w=800" 
                  alt={productName}
                  className="w-[85%] h-[85%] object-contain relative z-10 drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]"
                />

                {/* Specification Badge Overlay */}
                <div className="absolute bottom-6 left-6 z-20 bg-navy-900/90 backdrop-blur border border-steel-600/50 p-3 rounded shadow-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                    <span className="text-[10px] font-bold text-steel-300 tracking-widest uppercase">CLASS 150</span>
                  </div>
                  <div className="text-white text-sm font-semibold tracking-wide uppercase">
                    FLANGED {productName}
                  </div>
                </div>
            </div>
            {/* Thumbnails placeholder */}
            <div className="grid grid-cols-4 gap-4 mt-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square bg-navy-900 rounded border border-steel-200 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent z-10"></div>
                  <img src="https://images.unsplash.com/photo-1621643195222-293e5066db2b?auto=format&fit=crop&q=80&w=200" alt="thumbnail" className="w-full h-full object-contain p-2" />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Info */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">{productName}</h1>
            <p className="text-lg text-charcoal/80 mb-8 leading-relaxed">
              [Product description to be provided. This placeholder will describe the general applications and benefits of this valve type once the official catalog is confirmed.]
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/request-quote"
                className="inline-flex items-center justify-center bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 rounded font-bold tracking-wide transition-colors shadow-sm"
              >
                <FileText className="mr-2 w-5 h-5" />
                Request a Quote
              </Link>
              <button
                disabled
                className="inline-flex items-center justify-center bg-steel-100 border-2 border-steel-200 text-steel-400 px-6 py-3 rounded font-bold tracking-wide cursor-not-allowed"
              >
                <Download className="mr-2 w-5 h-5" />
                Datasheet to be provided
              </button>
            </div>
          </div>
        </div>

        {/* Details Tabs / Sections */}
        <div className="mt-20">
          <div className="border-b-2 border-steel-200 mb-8 flex gap-8">
            <h2 className="text-xl font-bold text-navy-900 border-b-2 border-orange-500 pb-2 -mb-[2px]">Product Overview</h2>
          </div>
          
          <div className="prose max-w-none text-charcoal/80 mb-16">
            <p>[Detailed overview to be provided]</p>
          </div>

          <h3 className="text-2xl font-bold text-navy-900 mb-6">Technical Specifications</h3>
          <div className="overflow-x-auto mb-16">
            <table className="w-full text-left border-collapse">
              <tbody>
                {[
                  { label: "Product Type", val: "[Specification to be provided]" },
                  { label: "Size Range", val: "[Specification to be provided]" },
                  { label: "Pressure Rating", val: "[Specification to be provided]" },
                  { label: "Body Material", val: "[Specification to be provided]" },
                  { label: "Seat Material", val: "[Specification to be provided]" },
                  { label: "End Connection", val: "[Specification to be provided]" },
                  { label: "Operation", val: "[Specification to be provided]" },
                  { label: "Temperature Range", val: "[Specification to be provided]" },
                  { label: "Applicable Standard", val: "[Specification to be provided]" },
                ].map((spec, i) => (
                  <tr key={i} className="border-b border-steel-200 even:bg-steel-50">
                    <th className="py-4 px-6 font-semibold text-navy-900 w-1/3 bg-steel-100/50">{spec.label}</th>
                    <td className="py-4 px-6 text-charcoal/80">{spec.val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-bold text-navy-900 mb-6">Applications</h3>
          <ul className="list-disc pl-6 space-y-2 text-charcoal/80 mb-16">
            <li>[General application placeholder 1]</li>
            <li>[General application placeholder 2]</li>
            <li>[General application placeholder 3]</li>
          </ul>

          <h3 className="text-2xl font-bold text-navy-900 mb-6">Related Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="bg-white border border-steel-200 rounded p-4 text-center group cursor-pointer hover:shadow-md transition-shadow">
                <div className="aspect-square bg-white border border-steel-100 rounded flex items-center justify-center mb-4 overflow-hidden relative">
                  <img src={`/images/valve-hero-dark.png`} alt="related product" className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h4 className="font-bold text-navy-900 text-sm group-hover:text-orange-600 transition-colors">Related Product</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
