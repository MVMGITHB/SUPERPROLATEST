import Home from "@/components/Home/Home";
import { base_url } from "@/components/Helper/helper";

export const metadata = {
  title: "Supernpro | Breaking News, Trends & Insights Across Every Industry",
  description:
    "Stay informed with Supernpro – your trusted source for the latest news in politics, finance, lifestyle, entertainment, real estate, and more.",
  metadataBase: new URL("https://supernpro.com"),
  alternates: {
    canonical: "./",
  },
};

// SERVER SIDE DATA FETCHING (SEO Optimized)
async function getBlogData() {
  const res = await fetch(`${base_url}/api/blog/getAllBlog`, {
    cache: "no-store", // ensures latest news 
  });

  return res.json();
}

export default async function Page() {
  const blog = await getBlogData(); // Fetch on server

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://supernpro.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "politics",
        item: "https://supernpro.com/politics",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Finance",
        item: "https://supernpro.com/finance",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Automobile",
        item: "https://supernpro.com/automobile",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Entertainment",
        item: "https://supernpro.com/entertainment",
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Real Estate",
        item: "https://supernpro.com/real-estate",
      },
      {
        "@type": "ListItem",
        position: 7,
        name: "Fashion & Lifestyle",
        item: "https://supernpro.com/fashion-lifestyle",
      },
      {
        "@type": "ListItem",
        position: 8,
        name: "Technology",
        item: "https://supernpro.com/technology",
      },
      {
        "@type": "ListItem",
        position: 9,
        name: "Sports",
        item: "https://supernpro.com/sports",
      },
    ],
  };

  const corporationSchema = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    name: "SuperNPro",
    url: "https://supernpro.com/",
    logo: "https://supernpro.com/SuperNpro.webp",
    sameAs: [
      "https://www.facebook.com/supernproofficial/",
      "https://www.instagram.com/supernproinfo/",
    ],
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(corporationSchema),
        }}
      />

      {/* Pass server-fetched blog data */}
      <Home blog={blog} />
    </div>
  );
}
