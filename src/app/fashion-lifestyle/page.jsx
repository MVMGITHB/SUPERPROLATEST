export const metadata = {
  title: " SuperNPro Fashion & Lifestyle | Fashion News & Lifestyle Tips",
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
      <Blog url="fashion-lifestyle" />
    </div>
  );
};

export default page;
