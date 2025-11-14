export const metadata = {
  title: "SuperNPro Entertainment | Celebrity News, Movies & Pop Culture",
  description:
    "Dive into the world of entertainment with SuperNPro - covering movies, music, celebrity gossip, and pop culture news.",
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
        name: "entertainment",
        item: "https://supernpro.com/entertainment",
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

      <h1 className="text-4xl text-gray-700 mt-2 p-3 lg:p-0 flex justify-center items-center font-sans font-extrabold ">
        Entertainment: Bollywood, Hollywood & OTT Buzz
      </h1>
      <h2 className="text-gray-600 text-xl mt-2 p-3 lg:p-0 flex justify-center items-center font-sans">
        From red carpets to reel life — get all the gossip, reviews, and
        behind-the-scenes moments from the world of entertainment.
      </h2>
      <Blog url="entertainment" />
    </div>
  );
};

export default page;
