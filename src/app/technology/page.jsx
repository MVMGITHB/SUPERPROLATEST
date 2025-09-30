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
  return (
    <div>
      <Blog url="technology" />
    </div>
  );
};

export default page;
