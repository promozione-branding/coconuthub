"use client";
import React, { useState } from "react";
import { categories } from "@/Data";
import Image from "next/image";
import Head from "next/head";
import { useCartStore } from "@/store/cart";
import { Star } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

import { Autoplay } from "swiper/modules";
import { Leaf, Handshake, ShieldCheck } from "lucide-react";
import { handleWhatsappClick } from "@/track";
export default function ProductPage({ params }) {
  const { productId } = React.use(params);

  const allProducts = categories.flatMap((c) => c.products);
  const product = allProducts.find((p) => p.id === productId);

  const [activeImage, setActiveImage] = useState(product.image[0]);
  const [quantity, setQuantity] = useState(1);

  const addItem = useCartStore((state) => state.addToCart);

  const addToCart = () => {
    const image = activeImage.src;
    addItem(product, quantity, image);
  };

  if (!product) return <h2>Product not found</h2>;




  const reviews = [
    {
      text: "Amazing quality dates. Fresh, soft, and naturally sweet.",
    },
    {
      text: "The packaging was premium and delivery was very fast.",
    },
    {
      text: "Best Ajwa dates I have tried. Highly recommended!",
    },
    {
      text: "Very fresh dry fruits. My family loved the taste.",
    },
    {
      text: "Excellent quality and great customer service, Recommended for bulk order.",
    },
    {
      text: "Perfect for gifting. Beautiful packaging and quality.",
    },
    {
      text: "Natural sweetness and great freshness in every bite.",
    },
  ];


  return (
    <>
      <Head>
        <title>{product.name}</title>
      </Head>

      <section className="bg-[#FFF8F3] py-10 px-4 md:px-8">
        <div className="w-full mt-27 mx-auto grid md:grid-cols-2 gap-15">
          {/* LEFT IMAGE */}
          <div className="flex xl:flex-row flex-col-reverse gap-4">
            {/* THUMBNAILS */}
            <div className="flex xl:flex-col flex-row overflow-auto gap-3">
              {product.image.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(img)}
                  className={`bg-[#efe3d6] p-2 rounded-lg border ${activeImage.src === img.src[0] ? "border-[#b45309]" : "border-transparent"
                    }`}
                >
                  <Image
                    src={img.src}
                    width={70}
                    height={70}
                    alt={activeImage.alt}
                    className="rounded-md object-cover"
                  />
                </button>
              ))}
            </div>

            {/* MAIN IMAGE */}
            <div className="flex-1  p-4 rounded-xl">
              <Image
                src={activeImage.src}
                alt=""
                width={500}
                height={500}
                className="rounded-xl object-cover w-full lg:h-[700px] h-[500px]"
              />
            </div>

          </div>

          {/* RIGHT DETAILS */}
          <div className="space-y-6">

            {/* TOP META */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="bg-[#C2ED8D] text-green-700 text-xs px-3 py-1 rounded-full">
                  PREMIUM HARVEST
                </span>

                <div className="flex items-center gap-1 text-[#b45309]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#b45309" />
                  ))}
                  <span className="text-gray-600 text-sm ml-1">(48 Reviews)</span>
                </div>
              </div>

              {/* TITLE */}
              <h1 className="text-3xl md:text-5xl font-serif font-semibold leading-tight">
                {product.name}
              </h1>
            </div>

            {/* PRICE BLOCK */}
            <div className="flex items-end gap-3">
              <span className="text-3xl text-[#b45309] font-semibold">
                ₹{product.price}
              </span>
              <span className="line-through text-gray-400 text-lg">
                ₹{product.oldPrice || product.price + 200}
              </span>
              <span className="text-sm text-gray-500 mb-1">/ KG</span>
            </div>

            {/* DESCRIPTION */}
            <p className="text-black leading-relaxed max-w-xl">
              {product.shortDescription ||
                "Naturally sweet, rich in fiber, and premium quality dates sourced from the finest farms."}
            </p>

            {/* ACTION CARD */}
            <div className="border rounded-xl p-4 space-y-4 bg-[#fffaf5]">

              {/* QUANTITY + CART */}
              <div className="flex items-center gap-3">
                <div className="flex items-center border rounded-lg overflow-hidden">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-4 py-2 bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-4">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-4 py-2 bg-gray-100"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={addToCart}
                  className="flex-1 bg-[#b45309] text-white px-6 py-3 rounded-lg shadow hover:bg-[#92400e] transition"
                >
                  Add to Cart
                </button>
              </div>

              {/* SECONDARY ACTIONS */}
              <div className="flex gap-3">
                <button
                  onClick={() => window.location.href = "/contact"}
                  className="flex-1 border border-[#b45309] text-[#b45309] px-6 py-3 rounded-lg hover:bg-[#b45309] hover:text-white transition"
                >
                  Enquire
                </button>

                <a
                 onClick={() => handleWhatsappClick({ source: "Website Product Pg", obj:product.name })}
                  href="https://wa.me/919818059818?text=Hi,%20I%20want%20to%20enquire%20about%20this%20product"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg text-center hover:bg-green-700 transition"
                >
                  WhatsApp
                </a>
              </div>

            </div>

            {/* SPECS */}
            <div className="border-t pt-6 space-y-4">
              <h3 className="text-lg font-semibold text-[#3b2f2f]">
                Nutritional Information
              </h3>

              <p className="text-sm text-black">
                Rich in fiber, antioxidants, and essential nutrients that support a healthy lifestyle.
              </p>

              <div className="overflow-hidden rounded-xl border">
                <table className="w-full text-sm">
                  <tbody>
                    {product.specs?.map((spec, i) => (
                      <tr
                        key={i}
                        className={`${i % 2 === 0 ? "bg-[#fffaf5]" : "bg-white"} border-b`}
                      >
                        <td className="px-4 py-3 font-medium text-[#3b2f2f] w-1/2">
                          {spec.label}
                        </td>
                        <td className="px-4 py-3 text-black">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-[#f3e6d8] py-18">
        <div className="max-w-7xl mx-auto text-center px-4">

          <h2 className="text-2xl md:text-5xl italic font-serif mb-10 text-[#3b2f2f]">
            Grown by Nature, Crafted by Heritage
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {/* Organic */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-green-100">
                <Leaf className="text-green-600" size={26} />
              </div>

              <h3 className="font-semibold text-lg text-[#3b2f2f]">
                Organic Certified
              </h3>

              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                100% natural and pesticide-free dates, grown with care to preserve
                purity, nutrition, and authentic taste from farm to table.
              </p>
            </div>

            {/* Ethical */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-orange-100">
                <Handshake className="text-orange-600" size={26} />
              </div>

              <h3 className="font-semibold text-lg text-[#3b2f2f]">
                Ethically Sourced
              </h3>

              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                Sourced directly from trusted farmers, ensuring fair trade practices
                and supporting sustainable agricultural communities.
              </p>
            </div>

            {/* No Sugar */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-yellow-100">
                <ShieldCheck className="text-yellow-600" size={26} />
              </div>

              <h3 className="font-semibold text-lg text-[#3b2f2f]">
                No Added Sugar
              </h3>

              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                Naturally sweet with zero additives — enjoy pure caramel-like flavor
                straight from nature without any artificial enhancement.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-[#f7efe7] py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-5xl font-serif mb-2">Customer Stories</h2>
          <p className="py-4">See Why Our Customer keep coming back </p>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 3500 }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {reviews.map((review, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white p-6 rounded-xl shadow-sm h-full">
                  <div className="flex gap-1 text-[#b45309] mb-2">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={14} fill="#b45309" />
                    ))}
                  </div>

                  <p className="text-gray-600 text-sm">"{review.text}"</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>


      {/* PRODUCT DESCRIPTION (AFTER REVIEWS) */}
      <section className="bg-[#fff8f3] py-14 px-4">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-2xl md:text-3xl font-serif mb-8 text-[#3b2f2f]">
            Product Details & Description
          </h2>

          <div className="space-y-8">
            {Array.isArray(product.description) &&
              product.description.map((block, i) => {

                if (block.type === "h2") {
                  return (
                    <h3
                      key={i}
                      className="text-xl md:text-2xl font-semibold text-[#b45309] mt-6"
                    >
                      {block.text}
                    </h3>
                  );
                }

                if (block.type === "p") {
                  return (
                    <p
                      key={i}
                      className="text-gray-600 leading-relaxed text-sm md:text-base"
                      dangerouslySetInnerHTML={{ __html: block.text }}
                    />
                  );
                }

                if (block.type === "ul") {
                  return (
                    <ul key={i} className="space-y-3 mt-3">
                      {block.items.map((item, j) => (
                        <li
                          key={j}
                          className="flex gap-3 text-gray-600 text-sm md:text-base leading-relaxed"
                        >
                          <span className="mt-1 w-2 h-2 bg-[#b45309] rounded-full flex-shrink-0"></span>
                          <span dangerouslySetInnerHTML={{ __html: item }} />
                        </li>
                      ))}
                    </ul>
                  );
                }

                return null;
              })}
          </div>
        </div>
      </section>






    </>
  );
}