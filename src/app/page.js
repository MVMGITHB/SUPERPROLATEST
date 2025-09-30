
export const metadata = {
  title: "MVM Business Services | Data-Driven Digital Marketing Agency",
  description: "Grow your brand with MVM Business Services – experts in digital marketing, SEO, social media, and web development.",
  metadataBase: new URL("https://supernpro.com"),
  alternates: {
    canonical: "./",
  },
  // robots: {
  //   index: false, 
  //   follow: false, 
  // },
};
import { Home } from "@/components/Home/Home";
export default function Page() {
  return (
    <div >
     <Home/>
    </div>
  );
}
