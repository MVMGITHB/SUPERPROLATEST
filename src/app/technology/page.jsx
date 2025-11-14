export const metadata = {
  title: " SuperNPro Tech | Gadgets, AI & Digital Trends",
  description:
    " Stay ahead with SuperNPro’s tech coverage - featuring gadgets, AI breakthroughs, startup news, and digital trends.",
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
        item: "https://supernpro.com/technology",
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

      <h1 className="text-4xl text-gray-700 mt-2  flex justify-center items-center font-sans font-extrabold ">
        Latest Technology News, Trends & Innovations
      </h1>

      <h2 className="text-gray-600 text-xl mt-2 flex justify-center items-center font-sans">
        Stay ahead with insights on emerging technologies, industry trends, and
        future innovations
      </h2>
      <Blog url="technology" />
    </div>
  );
};

export default page;
