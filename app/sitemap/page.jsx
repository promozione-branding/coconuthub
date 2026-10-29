import Link from "next/link";
import { categories } from "@/Data";

export const metadata = {
  title: "Sitemap | Vishal Enterprise",
  description:
    "Browse all pages, product categories, and products available from Vishal Enterprise.",
};

const staticPages = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "All Products", href: "/products" },
  { label: "Our Blogs", href: "/our-blogs" },
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms and Conditions", href: "/termsandcondition" },
];

function SitemapLink({ href, children }) {
  return (
    <li>
      <Link
        href={href}
        className="text-[#315b55] transition-colors hover:text-[#137a74] hover:underline"
      >
        {children}
      </Link>
    </li>
  );
}

export default function SitemapPage() {
  const productCount = categories.reduce(
    (total, category) => total + category.products.length,
    0
  );

  return (
    <main className="min-h-screen bg-[#f5efe6] px-5 pb-16 pt-32 text-[#243b36] md:px-10 md:pb-24 md:pt-40">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 border-b border-[#137a74]/20 pb-8 md:mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#137a74]">
            Vishal Enterprise
          </p>
          <h1 className="font-[var(--font-poetsen)] text-4xl leading-tight text-[#183f39] md:text-6xl">
            Sitemap
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#52645e] md:text-lg">
            Find your way around our website, browse product categories, and
            explore our complete product range.
          </p>
        </header>

        <section
          aria-labelledby="pages-heading"
          className="mb-12 rounded-2xl border border-[#137a74]/15 bg-white p-6 shadow-sm md:mb-16 md:p-9"
        >
          <h2
            id="pages-heading"
            className="mb-6 text-2xl font-semibold text-[#183f39] md:text-3xl"
          >
            Website pages
          </h2>
          <ul className="grid list-none grid-cols-1 gap-x-8 gap-y-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
            {staticPages.map((page) => (
              <SitemapLink key={page.href} href={page.href}>
                {page.label}
              </SitemapLink>
            ))}
          </ul>
        </section>

        <section aria-labelledby="categories-heading">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#137a74]">
                Browse by category
              </p>
              <h2
                id="categories-heading"
                className="text-2xl font-semibold text-[#183f39] md:text-3xl"
              >
                Product categories
              </h2>
            </div>
            <p className="text-sm text-[#52645e]">
              {categories.length} categories · {productCount} products
            </p>
          </div>

          <div className="space-y-6">
            {categories.map((category) => (
              <div
                key={category.id}
                className="rounded-2xl border border-[#137a74]/15 bg-white p-6 shadow-sm md:p-8"
              >
                <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2 border-b border-[#137a74]/10 pb-4">
                  <h3
                    id={`category-${category.id}`}
                    className="text-xl font-semibold text-[#183f39] md:text-2xl"
                  >
                    <Link
                      href={`/categories/${category.id}`}
                      className="transition-colors hover:text-[#137a74] hover:underline"
                    >
                      {category.name.trim()}
                    </Link>
                  </h3>
                  <span className="text-sm text-[#718078]">
                    {category.products.length}{" "}
                    {category.products.length === 1 ? "product" : "products"}
                  </span>
                </div>

                <ul className="grid list-none grid-cols-1 gap-x-8 gap-y-3 p-0 sm:grid-cols-2 lg:grid-cols-3">
                  {category.products.map((product) => (
                    <SitemapLink
                      key={product.id}
                      href={`/products/${product.id}`}
                    >
                      {product.name}
                    </SitemapLink>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}