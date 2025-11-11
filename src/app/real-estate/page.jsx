// Metadata for SEO and social sharing

export const metadata = {
  title: "SuperNPro Real Estate | Property News & Housing Trends",
  description:
    "Get insights into property markets, housing trends, real estate investments, and expert advice for buyers and sellers",
  metadataBase: new URL("https://supernpro.com"),
  alternates: {
    canonical: "./",
  },
  // robots: {
  //   index: false,
  //   follow: false,
  // },
};

import { Blog } from "@/components/blog/Blog";
const page = () => {


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
        name: "advertiser",
        item: "https://supernpro.com/real-estate",
      },
    ],
  };



  return (
    <div>


       {/* // add breadcrumbSchema  */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />


      <h1 className="text-4xl text-gray-700  flex justify-center items-center font-sans font-extrabold ">Latest Real Estate News, Trends & Market Insights</h1>
      <Blog url="real-estate" />
    </div>
  );
};

export default page;
