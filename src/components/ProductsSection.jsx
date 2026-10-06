import Link from "next/link";
import { ArrowRight } from "lucide-react";

const products = [
  {
    id: "butterfly-valves",
    name: "Butterfly Valves",
    description: "Compact and lightweight butterfly valves for efficient flow regulation.",
    image: "/images/butterfly-valve.png",
  },
  {
    id: "ball-valves",
    name: "Ball Valves",
    description: "Robust industrial ball valves suitable for a variety of isolation applications.",
    image: "/images/ball-valve.png",
  },
  {
    id: "gate-globe-valves",
    name: "Gate & Globe Valves",
    description: "Reliable valves designed for on/off flow control and precise throttling.",
    image: "/images/gate-valve.png",
  },
  {
    id: "plug-valves",
    name: "Plug Valves",
    description: "Durable plug valves offering excellent shut-off performance in demanding conditions.",
    image: "/images/ball-valve.png",
  },
  {
    id: "check-valves",
    name: "Check Valves",
    description: "Durable check valves engineered to prevent backflow in industrial piping.",
    image: "/images/gate-valve.png",
  },
  {
    id: "control-valves",
    name: "Control Valves",
    description: "Advanced control valves for accurate regulation of process variables.",
    image: "/images/butterfly-valve.png",
  },
];

export default function ProductsSection() {
  return (
    <section className="py-24 bg-white" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4 tracking-tight">
              Our Product Range
            </h2>
            <div className="w-16 h-1 bg-orange-500 mb-6"></div>
            <p className="text-lg text-charcoal/80">
              Explore industrial valve solutions designed for a wide range of flow-control applications.
            </p>
          </div>
          <Link
            href="/products"
            className="hidden md:inline-flex items-center font-bold text-navy-900 hover:text-orange-600 transition-colors group"
          >
            View All Products
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link 
              key={product.id} 
              href={`/products/${product.id}`}
              className="group block bg-white border border-steel-200 rounded-lg overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-72 overflow-hidden bg-white flex items-center justify-center border-b border-steel-100">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-contain p-8 transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-2.5 py-1 bg-orange-100/50 text-orange-600 text-[10px] font-bold tracking-wider uppercase rounded mb-3 border border-orange-200/50">
                  INDUSTRIAL VALVE
                </span>
                <h3 className="text-xl font-bold text-navy-900 mb-2 transition-colors">
                  {product.name}
                </h3>
                <p className="text-charcoal/70 text-sm mb-6 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center text-sm font-bold text-navy-900 group-hover:text-navy-700 transition-colors">
                  View More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Link
            href="/products"
            className="inline-flex items-center font-bold text-navy-900 hover:text-orange-600 transition-colors group"
          >
            View All Products
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
