// seo for this page is in Blog.jsx
export const metadata = {
  title: " SuperNPro Sports | Live Scores, Highlights & Athlete Stories",
  description:
    "Catch up on sports news, match highlights, player interviews, and updates across cricket, football, and more.",
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
        item: "https://supernpro.com/sports",
      },
    ],
  };

  return (
    <div>
      <h1 className="text-4xl text-gray-700 mt-2 p-3 lg:p-0 flex justify-center items-center font-sans font-extrabold ">
        Latest Sports News, Scores, and Highlights
      </h1>
      <h2 className="text-gray-600 text-xl mt-2 p-3 lg:p-0 flex justify-center items-center font-sans">
        From cricket to football — get the latest updates, exclusive insights,
        and top sporting moments.
      </h2>

      <Blog url="sports" />
    </div>
  );
};

export default page;
