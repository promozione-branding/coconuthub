
import React from "react";
import CategoryCityPage from "./CategoryCityPage";
import { notFound } from "next/navigation";
import { categoryCityContent } from "./data";

export async function generateMetadata({ params }) {
    const { slug } = await params;

    const parts = slug.split("-in-");
    const citySlug = parts.pop();
    const categorySlug = parts.join("-");

    const format = (text) =>
        text
            .split("-")
            .filter((w) => !["in", "supplier"].includes(w.toLowerCase()))
            .map((w) => w[0].toUpperCase() + w.slice(1))
            .join(" ");

    const categoryName = format(categorySlug);
    const cityName = format(citySlug);

    return {
        title: `${categoryName} Supplier in ${cityName} - Bulk, Wholesale & Retail Supply | Vishal Enterprise`,
        description: `Trusted ${categoryName} supplier in ${cityName} offering premium quality ${categoryName} for wholesalers, retailers, and bulk buyers. Get best prices, bulk supply, and fast delivery with Vishal Enterprise.`,
    };
}

const Page = async ({ params }) => {
    const { slug } = await params;

    if (!slug.includes("-in-")) {
        notFound();
    }

    const parts = slug.split("-in-");

    if (parts.length !== 2 || !parts[0] || !parts[1]) {
        notFound();
    }

    const citySlug = parts[1];
    const categorySlug = parts[0];

    const format = (text) =>
        text
            .split("-")
            .filter((w) => !["in", "supplier"].includes(w.toLowerCase()))
            .map((w) => w[0].toUpperCase() + w.slice(1))
            .join(" ");

    const categoryName = format(categorySlug);
    const cityName = format(citySlug);

    const originalContent = categoryCityContent[categorySlug];

    if (!originalContent) {
        notFound();
    }

    // Execute all functions on the server
    const cityContent = {
        mainImg: originalContent.mainImg,
        introImg: originalContent.introImg,

        h2: originalContent.h2(cityName),
        intro: originalContent.intro(cityName),
        intro2: originalContent.intro2(cityName),

        whyChooseHeading: originalContent.whyChooseHeading(cityName),

        whyChoose: originalContent.whyChoose(cityName).map((item) => ({
            title: item.title,
            desc: item.desc,
            iconName: item.iconName || item.icon?.displayName || item.icon?.name,
        })),

        Details: originalContent.Details(cityName),

        KeyFeatures: originalContent.KeyFeatures,

        faqs: originalContent.faqs(cityName),
    };

    return (
        <CategoryCityPage
            categoryName={categoryName}
            cityName={cityName}
            content={cityContent}
        />
    );
};

export default Page;
