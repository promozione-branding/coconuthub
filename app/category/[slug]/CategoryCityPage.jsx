
"use client";

import FormLayout from "@/components/FormLayout";
import Categories from "@/components/Landingpage/Categories";
import ProductSlider from "@/components/ProductSlider";
import { handleCallClick } from "@/track";

export default function CategoryCityPage({ categoryName, cityName, content }) {
    if (!content) {
        return (
            <h2 className="text-center text-red-500 mt-20 text-xl">
                Not found
            </h2>
        );
    }

    const handleContactClick = () => {
        handleCallClick({ source: "Website City Pg" });
    };

    return (
        <>
            {/* Hero */}
            <section
                style={{
                    backgroundImage: `url(${content?.mainImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
                className="py-35 relative z-10"
            >
                <div className="absolute inset-0 bg-gray-900/50" />

                <h1 className="text-center font-serif leading-snug relative font-bold text-white text-2xl px-5 md:py-14 capitalize md:text-6xl">
                    {categoryName} Supplier in {cityName}
                </h1>
            </section>

            {/* Main */}
            <section className="mx-auto lg:px-15 px-5 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">
                            {content?.h2}
                        </h1>

                        <p className="text-black mb-4">{content?.intro}</p>

                        <p className="text-black mb-4">{content?.intro2}</p>
                    </div>

                    <div className="w-full h-full">
                        <img
                            src={content?.introImg}
                            alt="Office Workstation"
                            className="w-full h-[28rem] object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Categories */}
            <Categories />

            {/* Why Us */}
            <section className="mx-auto lg:px-16 px-5 py-8 bg-gradient-to-b from-gray-50 to-gray-100">
                <h2 className="text-center text-3xl md:text-4xl font-bold mb-6">
                    {content?.whyChooseHeading}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {content?.whyChoose?.map((item, i) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={i}
                                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 p-5 relative overflow-hidden cursor-pointer hover:-translate-y-3"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

                                <div className="relative z-10 place-items-center mb-4">
                                    {Icon && (
                                        <Icon
                                            size={40}
                                            className="text-amber-500 group-hover:scale-110 transition-transform duration-300"
                                        />
                                    )}
                                </div>

                                <h3 className="font-semibold text-xl mb-2 relative z-10">
                                    {item.title}
                                </h3>

                                <p className="text-black relative z-10 leading-relaxed">
                                    {item.desc}
                                </p>

                                <span className="absolute bottom-0 left-0 h-1 w-0 bg-amber-500 group-hover:w-full transition-all duration-500"></span>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Products */}
            <ProductSlider />

            {/* Details */}
            <section className="mx-auto lg:px-16 px-5 py-8 bg-white">
                <div className="text-center mx-auto mb-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        {content?.Details?.title}
                    </h2>

                    <p className="text-black text-center leading-relaxed max-w-4xl mx-auto">
                        {content?.Details?.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {content?.Details?.sections?.map((section, i) => (
                        <div
                            key={i}
                            className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 p-5 relative overflow-hidden cursor-pointer hover:-translate-y-3"
                        >
                            <h3 className="text-xl font-bold mb-4 text-amber-500">
                                {section.title}
                            </h3>

                            <p>{section.point}</p>

                            <span className="absolute bottom-0 left-0 h-1 w-0 bg-amber-500 group-hover:w-full transition-all duration-500"></span>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section
                className="relative py-10 px-4"
                style={{
                    backgroundImage: 'url("/banner2.webp")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="relative max-w-7xl mx-auto text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">
                        Contact Vishal Enterprise Today
                    </h2>

                    <p className="mb-6 text-white/90">
                        Stock premium-quality dates for your business with Vishal Enterprise,
                        {cityName}’s trusted supplier for wholesalers, retailers, and bulk buyers.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-left max-w-5xl mx-auto">
                        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                            • Bulk Orders: Flexible quantities to suit your business needs
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                            • Fast Delivery: Timely supply across {cityName}
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                            • Competitive Pricing: Best value for premium dates
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                            • Hygienic Packaging: Freshness guaranteed
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="/contact"
                            className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition"
                        >
                            Place Your Order
                        </a>

                        <a
                            onClick={handleContactClick}
                            href="tel:+919818059818"
                            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="mx-auto lg:px-15 px-5 py-8 bg-gray-50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="w-full flex justify-center flex-col">
                        <div className="w-96 h-96 self-center">
                            <img
                                src={content?.KeyFeatures?.img}
                                alt="Key Features"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>

                        <h2 className="text-xl font-bold">
                            {content?.KeyFeatures?.heading}
                        </h2>

                        <p className="ml-2">{content?.KeyFeatures?.p}</p>
                    </div>

                    <div>
                        <h3 className="text-3xl md:text-4xl font-bold mb-6">
                            {content?.KeyFeatures?.title}
                        </h3>

                        <ul className="space-y-4 text-black">
                            {content?.KeyFeatures?.list?.map((item, idx) => (
                                <li className="flex items-start gap-2" key={idx}>
                                    ●
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Form */}
            <FormLayout />

            {/* FAQ */}
            <section className="mx-auto lg:px-15 px-5 py-8 bg-gray-100">
                <div className="max-w-6xl mx-auto text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-extrabold">
                        {content?.faqs?.title}
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto space-y-4">
                    {content?.faqs?.items?.map((item, idx) => (
                        <details
                            key={idx}
                            className="group bg-gray-50 rounded-xl p-5 cursor-pointer"
                        >
                            <summary className="flex justify-between items-center font-semibold text-lg">
                                {item?.q}

                                <span className="transition-transform group-open:rotate-180">
                                    ⌄
                                </span>
                            </summary>

                            <p className="mt-3 text-gray-600 leading-relaxed">
                                {item?.a}
                            </p>
                        </details>
                    ))}
                </div>
            </section>
        </>
    );
}
