// Metadata for SEO and social sharing
export const metadata = {
  title:
    " SuperNPro Politics | Latest Political News, Opinions & Global Affairs",
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
  return (
    <div>
      <Blog url="politics" />
    </div>
  );
};

export default page;
