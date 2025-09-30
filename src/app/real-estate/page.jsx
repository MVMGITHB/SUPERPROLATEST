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
  return (
    <div>
      <Blog url="real-estate" />
    </div>
  );
};

export default page;
