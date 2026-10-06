import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, ShieldCheck, Wrench, Mouse } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] lg:min-h-screen flex flex-col justify-center bg-[#050B14] overflow-hidden -mt-[88px] pt-[88px]">
      {/* Cinematic Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[url('/images/premium-hero-bg.png')] bg-cover bg-center lg:bg-right opacity-90 mix-blend-lighten"></div>
      </div>
      
      {/* Dark gradient vignette for readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#050B14] via-[#050B14]/80 to-transparent lg:w-[70%]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pt-12 pb-24 flex-grow flex flex-col justify-center">
        
        <div className="flex flex-col lg:flex-row items-center justify-between">
          
          {/* LEFT: Content */}
          <div className="w-full lg:w-3/5 flex flex-col relative z-20">
            
            {/* Top Label */}
            <div className="inline-flex items-center gap-2 mb-6 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              <span className="text-xs font-bold tracking-[0.2em] text-steel-300 uppercase">
                INDUSTRIAL VALVES & FLOW CONTROL
              </span>
            </div>
            
            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-extrabold text-white tracking-tight leading-[1.05] mb-8 animate-fade-in-up" style={{animationDelay: '100ms'}}>
              Engineered Flow<br className="hidden md:block" /> Control. <br className="hidden md:block" />
              <span className="relative inline-block mt-2">
                Built for Reliability.
                <span className="absolute bottom-1 lg:bottom-3 left-0 w-full h-2 bg-orange-500/80 -z-10"></span>
              </span>
            </h1>
            
            {/* Supporting Text */}
            <p className="text-lg md:text-xl text-steel-300 mb-10 max-w-[550px] leading-relaxed animate-fade-in-up" style={{animationDelay: '200ms'}}>
              T&T Traders provides industrial valve and flow-control solutions for demanding applications, with a focus on dependable products and professional service.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-5 mb-16 animate-fade-in-up" style={{animationDelay: '300ms'}}>
              <Link
                href="/products"
                className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-400 text-navy-950 px-8 py-4 rounded font-bold tracking-wide transition-all duration-300 shadow-[0_4px_20px_rgba(249,115,22,0.3)] hover:shadow-[0_4px_25px_rgba(249,115,22,0.5)] group hover:-translate-y-0.5"
              >
                Explore Products
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/request-quote"
                className="inline-flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/20 text-white px-8 py-4 rounded font-bold tracking-wide transition-all duration-300 hover:border-orange-500/50 backdrop-blur-sm"
              >
                Request a Quote
                <ArrowUpRight className="ml-2 w-4 h-4 opacity-70" />
              </Link>
            </div>
            
            {/* Trust Features */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 animate-fade-in-up" style={{animationDelay: '400ms'}}>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-orange-500" />
                  <span className="text-sm font-bold text-white">Reliable Products</span>
                </div>
                <span className="text-xs text-steel-400">Built for demanding applications.</span>
              </div>
              <div className="hidden sm:block w-[1px] h-10 bg-white/10"></div>
              
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-orange-500" />
                  <span className="text-sm font-bold text-white">Technical Focus</span>
                </div>
                <span className="text-xs text-steel-400">Product knowledge and support.</span>
              </div>
              <div className="hidden sm:block w-[1px] h-10 bg-white/10"></div>
              
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-orange-500" />
                  <span className="text-sm font-bold text-white">Professional Support</span>
                </div>
                <span className="text-xs text-steel-400">From enquiry to selection.</span>
              </div>
            </div>
          </div>
          
          {/* RIGHT: Technical Badge (Valve is in the background image) */}
          <div className="w-full lg:w-2/5 flex justify-end items-end h-[300px] lg:h-[600px] relative z-20 mt-10 lg:mt-0 animate-fade-in-up" style={{animationDelay: '500ms'}}>
             <div className="bg-[#0A1220]/80 backdrop-blur-md border border-white/10 p-5 rounded-lg shadow-2xl mb-10 mr-4 lg:mr-0 lg:mb-20">
               <div className="flex items-center gap-3 mb-1">
                 <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                 <span className="text-xs font-bold tracking-widest text-steel-300 uppercase">PRECISION ENGINEERED</span>
               </div>
               <div className="text-white font-bold tracking-wide text-lg">INDUSTRIAL VALVE</div>
             </div>
          </div>

        </div>

      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-fade-in-up" style={{animationDelay: '600ms'}}>
        <span className="text-steel-400 text-[10px] font-bold tracking-widest uppercase">Scroll Down</span>
        <div className="animate-bounce">
          <Mouse className="w-5 h-5 text-orange-500" />
        </div>
      </div>
      
    </section>
  );
}
