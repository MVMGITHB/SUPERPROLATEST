export const metadata = {
  title: "Supernpro Finance – Latest Market News, Banking & Investment Updates",
  description:
    "Explore financial news, stock market updates, economic analysis, and expert tips on personal finance and investing.",
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
        item: "https://supernpro.com/finance",
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
        Finance: Banking, Investments, and Business Trends
      </h1>
      <h2 className="text-gray-600 text-xl mt-2 flex justify-center items-center font-sans">
        Explore business updates, stock market movements, and smart money
        management strategies.
      </h2>
      <Blog url="finance" />
    </div>
  );
};

export default page;
