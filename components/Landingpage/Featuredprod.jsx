"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";
import { handleWhatsappClick } from "@/track";

const products = [
  {
    id: 1,
    name: "Premium Ajwa Dates",
    image: "/product/ajwa.webp",
    discount: "-60%",
  },
  {
    id: 2,
    name: "Zahidi Dates",
    image: "/product/zahidiDates.webp",
    discount: "-54%",
  },
  {
    id: 3,
    name: "Tunisian Dates",
    image: "/product/tunisian3kg.webp",
    discount: "-20%",
  },

   {
    id: 10,
    name: "Dry Figs Afgan Platinum", 
    image: "/product/dryFigsAfganPlatinum250g.webp",
    discount: "-20%",
  },

  {
    id: 4,
    name: "Medjool Dates",
    image: "/product/medjoolDatesLarge.webp",
    discount: "-20%",
  },


  
    {
    id: 5,
    name: "Kalmi Dates",
    image: "/product/kalmiLoose.webp",
    discount: "-20%",
  },
    {
    id: 6,
    name: "Premium Cashew ",
    image: "/product/cashewNutsPouch.webp",
    discount: "-20%",
  },

   {
    id: 7,
    name: "California Almonds",
    image: "/product/CaliforniaAlmondsNonPariel.webp",
    discount: "-20%",
  },

   {
    id: 8,
    name: "Turkish Apricot", 
    image: "/product/apricotTurkel.webp",
    discount: "-20%",
  },

   {
    id: 9,
    name: "Taj Mahal Zahidi Dates", 
    image: "/product/zahidiTajMahal.webp",
    discount: "-20%",
  },

    
];

export default function FeaturedProducts() {
  const phoneNumber = "+919818059818"; 

  const handleWhatsApp = (productName) => {
    const message = `Hello, I am interested in ${productName}. Please share more details about price, bulk availability, and delivery.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="w-full py-6 md:py-16 bg-white">
      
      {/* HEADING */}
      <div className="text-center mb-6 md:mb-13 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide">
          OUR FEATURED PRODUCTS
        </h2>
      </div>

      {/* SWIPER */}
      <div className=" mx-auto px-12">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {products.map((item) => (
            <SwiperSlide key={item.id}>
              
              <div className="relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
                
                {/* DISCOUNT BADGE */}
                <div className="absolute top-4 left-4 z-10 bg-red-600 text-white text-sm font-semibold px-4 py-2 rounded-full">
                  {item.discount}
                </div>

                {/* IMAGE */}
                <div className="relative w-full h-[280px]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-4 text-center">
                  <p className="font-semibold text-black text-2xl mb-3">
                    {item.name}
                  </p>

                  {/* WHATSAPP BUTTON */}
                  <button
                  
                    onClick={() =>{ handleWhatsApp(item.name) ;  handleWhatsappClick({ source: "Website Home Featured Products", obj:item.name })}}
                    className="bg-black  text-white px-5 py-3 rounded-lg text-sm font-medium transition"
                  >
                    Enquire Now
                  </button>
                </div>

              </div>

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}