import ProductsSection from "@/components/ProductsSection";

export default function ProductsPage() {
  return (
    <div className="bg-white">
      <section className="bg-navy-900 py-16 border-b-4 border-orange-600 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Industrial Valve Solutions</h1>
        <p className="text-steel-300 max-w-2xl mx-auto px-4 mb-8">
          Explore our range of industrial valves and flow-control products.
        </p>
        <button className="inline-flex items-center justify-center bg-white border-2 border-navy-900 hover:bg-steel-50 text-navy-900 px-6 py-3 rounded font-bold tracking-wide transition-colors">
          Download Catalogue
        </button>
      </section>
      <ProductsSection />
    </div>
  );
}
