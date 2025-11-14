// Metadata for SEO and social sharing
export const metadata = {
  title: "Supernpro Politics – Latest Political News, Analysis & Updates",
  description:
    "Stay updated with SuperNPro’s in-depth coverage of political developments, elections, policies, and global diplomacy.",
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
  // added breadcum schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "home",
        item: "https://supernpro.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "politics",
        item: "https://supernpro.com/politics",
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

      <h1 className="text-4xl text-gray-700  mt-2  flex justify-center items-center font-sans font-extrabold ">
        Politics: Breaking News, Insights, and Analysis
      </h1>
      <h2 className="text-gray-600 text-xl mt-2 flex justify-center items-center font-sans">
        From elections to global affairs — explore unbiased news and detailed
        political analysis.
      </h2>
      <Blog url="politics" />
    </div>
  );
};

export default page;
