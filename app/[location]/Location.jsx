"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import Citeskeyword from "@/components/Citieskeyword";
import Link from "next/link";
import {
  Leaf,
  PackageCheck,
  ShieldCheck,
  Truck,
  BadgeDollarSign,
  Headphones, Phone, Mail, MessageCircle,
  Settings,
  Hotel,
  UtensilsCrossed,
  PartyPopper,
  Store,
  ChevronDown,
} from "lucide-react";
import { handleCallClick, handleWhatsappClick } from "@/track";

const Location = () => {
  const params = useParams();

  const cityRaw = params?.location?.includes("-in-")
    ? params.location.split("-in-")[1]
    : "india";

  const city = cityRaw.charAt(0).toUpperCase() + cityRaw.slice(1);

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const products = [
    { name: "Semi Husked Coconut 100 Count", img: "/product/coconut100.webp", },
    { name: "Semi Husked Coconut 120 Count", img: "/product/coconut120.webp", },
    { name: "Semi Husked Coconut 150 Count", img: "/product/coconut150.webp", },
    { name: "Semi Husked Coconut 175 Count", img: "/product/coconut175.webp", },
    { name: "Husked Coconut 100 Count", img: "/product/coconut100Husked.webp", },
    { name: "Husked Coconut 120 Count", img: "/product/coconut120Husked.webp", },
  ]

  const features = [
    {
      title: "Freshness Guaranteed",
      desc: "We source only the freshest coconuts from trusted farms, ensuring natural flavor and quality.",
      icon: Leaf,
    },
    {
      title: "Reliable Bulk Supply",
      desc: "Consistent bulk supply for restaurants, hotels, wholesalers, and caterers.",
      icon: PackageCheck,
    },
    {
      title: "Hygienically Handled Products",
      desc: "Strict hygiene standards maintained from storage to delivery.",
      icon: ShieldCheck,
    },
    {
      title: `Timely Delivery Across ${city}`,
      desc: `Fast and reliable delivery across all areas of ${city}.`,
      icon: Truck,
    },
    {
      title: "Competitive Pricing",
      desc: "Affordable pricing with premium quality products.",
      icon: BadgeDollarSign,
    },
    {
      title: "Dedicated Customer Support",
      desc: "Friendly support team ready to assist with orders and queries.",
      icon: Headphones,
    },
  ];

  const whyChoose = [
    {
      title: "Fresh & Premium Quality",
      desc: "We source only the finest coconuts ensuring freshness, flavor, and long shelf life.",
      icon: Leaf,
    },
    {
      title: "Reliable Bulk Supply",
      desc: `From small shops to large hotels, we handle orders of any size across ${city}.`,
      icon: PackageCheck,
    },
    {
      title: "Hygienically Handled",
      desc: "Strict hygiene standards maintained during processing and storage.",
      icon: ShieldCheck,
    },
    {
      title: "Timely Delivery",
      desc: "Our logistics team ensures fast and on-time delivery every time.",
      icon: Truck,
    },
    {
      title: "Competitive Pricing",
      desc: "Premium quality coconuts at affordable rates for all businesses.",
      icon: BadgeDollarSign,
    },
    {
      title: "Customized Solutions",
      desc: "Flexible supply tailored for restaurants, cafes, and wholesalers.",
      icon: Settings,
    },
  ];

  const industries = [
    {
      title: "Hotels & Resorts",
      desc: "We supply fresh coconuts in bulk to hotels and resorts.",
      icon: Hotel,
      iconBg: "bg-amber-100 text-amber-600 group-hover:bg-amber-500 group-hover:text-white",
    },
    {
      title: "Restaurants & Cafes",
      desc: "Fresh coconuts for menu enhancement.",
      icon: UtensilsCrossed,
      iconBg: "bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white",
    },
    {
      title: "Event Caterers",
      desc: "Bulk supply for weddings and events.",
      icon: PartyPopper,
      iconBg: "bg-pink-100 text-pink-600 group-hover:bg-pink-500 group-hover:text-white",
    },
    {
      title: "Retailers & Wholesalers",
      desc: "Consistent coconut supply for retail.",
      icon: Store,
      iconBg: "bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
    },
  ];

  const faqs = [
    {
      q: `Do you deliver coconuts across ${city}?`,
      a: `Yes! Vishal Enterprise offers timely delivery across all areas of ${city}, ensuring fresh coconuts every time.`,
    },
    {
      q: "Can I place bulk orders for my business?",
      a: "Absolutely. We cater to restaurants, hotels, caterers, wholesalers, and retailers with customized bulk supply solutions.",
    },
    {
      q: "How do you ensure the coconuts are fresh?",
      a: "We source coconuts from trusted suppliers and inspect every batch carefully. All products are handled hygienically to maintain freshness.",
    },
    {
      q: "Are your coconuts safe and hygienically handled?",
      a: "Yes. Our coconuts are stored, packed, and transported under strict hygiene standards.",
    },
    {
      q: "What is the minimum order quantity?",
      a: "We accommodate orders of all sizes, whether small or bulk.",
    },
    {
      q: `How long does delivery take in ${city}?`,
      a: "Delivery time depends on location, but we aim for same-day or next-day delivery.",
    },
    {
      q: "How can I place an order with Vishal Enterprise?",
      a: "You can place orders via phone, WhatsApp, email, or our online form for quick processing.",
    },
  ];

  return (
    <>
      <div className="">
        <section
          style={{
            backgroundImage: "url('/CtaBackground.webp')",
            backgroundSize: "cover",
            objectPosition: "center",
          }}
          className="pt-35 pb-30 relative z-10"
        >
          <div className="absolute inset-0 bg-gray-900/60" />

          <h1 className="text-center font-serif leading-snug relative font-bold text-white text-2xl px-5 md:py-20 capitalize md:text-6xl">
            Coconut Supplier in {city}
          </h1>
        </section>

        {/* SECOND SECTION */}
        <section className="bg-blue-50 py-10 px-4 md:px-16">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Reliable Coconut Supplier in {city}
              </h1>

              <p className="text-gray-900 mb-4 leading-relaxed">
                Vishal Enterprise is a trusted coconut supplier in {city}, delivering
                fresh coconuts to businesses across the city. We source our coconuts
                carefully to ensure consistent freshness and quality.
              </p>

              <p className="text-gray-900 mb-6 leading-relaxed">
                Are you looking for a steady supply of fresh coconuts in {city}?
                Vishal Enterprise will be your dependable coconut vendor!
              </p>

              <div className="flex md:flex-row flex-col gap-5 justify-between items-center px-10">
                <Link href={"/products"} className="bg-green-700 text-white px-6 py-3 rounded-full font-medium hover:bg-green-800 transition">
                  Discover our Products
                </Link>

                <a  onClick={() => handleCallClick({ source: "Website City Pg", })} href="tel:+919818059818" className="cursor-pointer bg-amber-500 text-white px-6 py-3 rounded-full font-medium hover:bg-amber-600 transition">
                  +91 9818059818
                </a>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <span className="text-4xl font-bold text-gray-800">1</span>
                <div>
                  <h3 className="text-xl font-semibold text-black">
                    Products
                  </h3>
                  <p className="text-gray-900">
                    We supply fresh coconuts, tender coconuts, grated coconut, and
                    desiccated coconut across {city}.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-4xl font-bold text-gray-800">2</span>
                <div>
                  <h3 className="text-xl font-semibold text-black">
                    Services
                  </h3>
                  <p className="text-gray-700">
                    We cater to bulk coconut supply for hotels, restaurants,
                    retailers, and events.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-4xl font-bold text-gray-800">3</span>
                <div>
                  <h3 className="text-xl font-semibold text-black">
                    Logistics
                  </h3>
                  <p className="text-gray-700">
                    We deliver fresh coconuts directly to your doorstep anywhere in {city}.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-10 px-4 md:px-16 bg-white">
          <div className="mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
                Our Products
              </h2>
              <p className="text-gray-800 max-w-5xl mx-auto">
                As a trusted coconut supplier in {city}, Vishal Enterprise provides a wide
                range of premium coconut products to meet the needs of businesses,
                restaurants, hotels, and wholesalers. Every product is carefully sourced
                to ensure freshness and quality.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
                >
                  {/* IMAGE */}
                  <div className="h-60 w-full overflow-hidden">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition duration-300"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {product.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="bg-gray-100 py-10 px-4 md:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
                Key Features – Your Trusted Coconut Supplier in {city}
              </h2>
              <p className="text-gray-800 max-w-5xl mx-auto">
                Vishal Enterprise provides fresh, high-quality coconuts with reliable
                service across {city}. Here’s why businesses trust us.
              </p>
            </div>

            {/* GRID */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition hover:-translate-y-1"
                  >
                    {/* ICON */}
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-green-100 text-green-700 mb-4">
                      <Icon size={24} />
                    </div>

                    {/* TITLE */}
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {item.title}
                    </h3>

                    {/* DESC */}
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>);
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-amber-500 py-10 px-4 md:px-16 text-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get Fresh Coconuts Delivered in {city} Today
            </h2>
            <p className="mb-8 text-white/90 max-w-3xl mx-auto">
              Looking for a reliable coconut supplier in {city}? Vishal Enterprise
              delivers fresh, high-quality coconuts directly to your business or
              doorstep anywhere in {city}. Whether you need coconuts for restaurants,
              hotels, cafes, caterers, or retail, we have you covered.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
               onClick={() => handleCallClick({ source: "Website City Pg", })}
                href="tel:+919818059818"
                className="flex items-center justify-center gap-2 bg-white text-amber-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
              >
                <Phone size={18} />
                Call Us Today
              </a>

              <a
                href="mailto:support@datesuppliers.com"
                className="flex items-center justify-center gap-2 bg-amber-600 border border-white px-6 py-3 rounded-full font-semibold hover:bg-amber-700 transition"
              >
                <Mail size={18} />
                Email Us
              </a>

              <a
               onClick={() => handleWhatsappClick({ source: "Website City Pg", })}
                href="https://wa.me/919818059818"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition"
              >
                <MessageCircle size={18} />
                WhatsApp Order
              </a>
            </div>
          </div>
        </section>

        {/* Why Choose */}
        <section className="py-10 px-4 md:px-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Why Choose Vishal Enterprise
              </h2>
              <p className="text-gray-800 max-w-4xl mx-auto">
                Looking for a reliable coconut supplier in {city}? Vishal Enterprise
                delivers fresh, high-quality coconuts across the city. Here’s why
                businesses trust us.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChoose.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="min-w-[300px] bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition flex-shrink-0"
                  >
                    {/* ICON */}
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-amber-100 text-amber-600 mb-4">
                      <Icon size={24} />
                    </div>

                    {/* TITLE */}
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {item.title}
                    </h3>

                    {/* DESC */}
                    <p className="text-gray-600 text-sm">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-10 px-4 md:px-16 bg-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Industries We Serve
              </h2>
              <p className="text-gray-800 max-w-5xl mx-auto">
                As a trusted coconut supplier in {city}, Vishal Enterprise caters to
                a wide range of industries with high-quality coconuts and reliable supply.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300">
                    <div
                      className={`w-14 h-14 flex items-center justify-center rounded-lg mb-4 transition ${item.iconBg}`}
                    >
                      <Icon size={26} />
                    </div>

                    <h3 className="text-lg font-semibold mb-2 text-gray-800">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-600">
                      {item.desc}
                    </p>
                  </div>);
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-6 px-4 md:px-16 bg-cover bg-center"
          style={{ backgroundImage: "url('/CtaBackground.webp')" }} // your background image
        >
          <div className="absolute inset-0 bg-black/65"></div>
          <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center">
              <img
                src="/CtaCoconut.webp" // your coconut image
                alt="Coconut"
                className="w-72 md:w-102 object-contain drop-shadow-lg"
              />
            </div>

            <div className="text-white">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                {city}’s #1 Coconut Supplier
              </h2>

              <p className="text-lg md:text-2xl mb-3 text-white/90">
                Fresh Coconuts & Premium Coconut Products.
              </p>

              <p className="mb-6 text-white/80">
                Vishal Enterprise – Your one-stop supplier for all things coconut in {city}!
              </p>

              {/* WHATSAPP BUTTON */}
              <a
               onClick={() => handleWhatsappClick({ source: "Website City Pg CTA", })}
                href="https://wa.me/919818059818"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition"
              >
                <MessageCircle size={20} />
                WhatsApp Now
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-10 px-4 md:px-16 bg-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
                FAQs – Coconut Supplier in {city}
              </h2>
              <p className="text-gray-800">
                Find answers to common questions about our coconut supply, delivery, and services.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm border border-gray-100"
                >
                  {/* QUESTION */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center p-5 text-left"
                  >
                    <span className="font-semibold text-gray-800">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`transition-transform ${openIndex === index ? "rotate-180 text-amber-500" : ""
                        }`}
                    />
                  </button>

                  {/* ANSWER */}
                  {openIndex === index && (
                    <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <Citeskeyword />
      </div>
    </>
  );
};

export default Location;
