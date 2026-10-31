"use client";
import { handleWhatsappClick } from "@/track";
import { ArrowRight } from "lucide-react";


export default function HighQualityCTA() {
  return (
    <section className="w-full mx-auto overflow-hidden rounded-xl">
      
      <div className="relative bg-red-900 py-8 sm:py-10 md:py-12 flex items-center">
        
        {/* Dot Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20px 20px, white 2px, transparent 2px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* CONTENT WRAPPER */}
        <div className="relative w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
          
          {/* TEXT */}
          <div className=" text-center md:text-left">
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3">
              Premium Dates by Vishal Enterprise
            </h2>

            <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed">
              Fresh quality dates at the best prices. Bulk supply with reliable delivery.
            </p>
          </div>

          {/* BUTTON */}
          <a  onClick={() => handleWhatsappClick({ source: "Website Home CTA", })} href="https://wa.me/919818059818">
            <button className="group flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 transition text-white px-6 py-3 sm:py-4 rounded-xl font-medium whitespace-nowrap animate-pulse">
              
              <span>Whatsapp Us Now</span>

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </a>

        </div>
      </div>
    </section>
  );
}