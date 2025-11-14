import { Blog } from "@/components/blog/Blog";

export const metadata = {
  title: "SuperNPro Automobile | Car Launches, Reviews & Industry News",
  description:
    "Discover the latest automobile trends, new car launches, expert reviews, and updates from the auto industry.",
  metadataBase: new URL("https://supernpro.com"),
  alternates: {
    canonical: "/automobile",
  },
};

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
        name: "automobile",
        item: "https://supernpro.com/automobile",
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

      <h1 className="text-4xl text-gray-700 mt-2 p-3 lg:p-0  flex justify-center items-center font-sans font-extrabold ">
        Latest Automobile News, Launches & Reviews
      </h1>

      <h2 className="text-gray-600 text-xl mt-2 p-3 lg:p-0 flex justify-center items-center font-sans">
        From electric vehicles to luxury rides — explore what’s new and next in
        the world of automobiles.
      </h2>
      <Blog url="automobile" />
    </div>
  );
};

export default page;
