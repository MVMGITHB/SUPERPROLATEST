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
  return (
    <div>
      <Blog url="entertainment" />
    </div>
  );
};

export default page;
