export const metadata = {
  title: " SuperNPro Automobile | Car Launches, Reviews & Industry News",
  description:
    "Discover the latest automobile trends, new car launches, expert reviews, and updates from the auto industry.",
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
      <Blog url="automobile" />
    </div>
  );
};

export default page;
