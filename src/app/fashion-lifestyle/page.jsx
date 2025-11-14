export const metadata = {
  title: "Supernpro | Breaking Entertainment Stories, Gossip & Film Reviews",
  description:
    "Explore fashion trends, beauty tips, wellness guides, and lifestyle inspiration curated for modern living.",
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
  return (
    <div>
      <h1 className="text-4xl text-gray-700 mt-2 p-3 lg:p-0  flex justify-center items-center font-sans font-extrabold ">
        Latest Fashion & Lifestyle Trends, Tips & Stories
      </h1>

      <h2 className="text-gray-600 text-xl mt-2 p-3 lg:p-0 flex justify-center items-center font-sans">
        Discover the newest fashion trends, styling tips, and lifestyle
        inspiration from around the world.
      </h2>

      <Blog url="fashion-lifestyle" />
    </div>
  );
};

export default page;
