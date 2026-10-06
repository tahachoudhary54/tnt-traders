import IndustriesSection from "@/components/IndustriesSection";

export default function IndustriesPage() {
  return (
    <div className="bg-white">
      <section className="bg-navy-900 py-16 border-b-4 border-orange-600 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Industries Served</h1>
        <p className="text-steel-300 max-w-2xl mx-auto px-4">
          Flow-control applications across various industrial sectors.
        </p>
      </section>
      <IndustriesSection />
    </div>
  );
}
