
export const metadata = {
  title: "SuperNPro Finance | Latest Finance News, Economy & Market Updates ",
  description: "Explore financial news, stock market updates, economic analysis, and expert tips on personal finance and investing.",
  metadataBase: new URL("https://supernpro.com"),
  alternates: {
    canonical: "./",
  },
  // robots: {
  //   index: false, 
  //   follow: false, 
  // },
};

import { Blog } from "@/components/blog/Blog"
const page = () => {



  return (
    <div>
        <Blog url="finance"/>
    </div>
  )
}

export default page
