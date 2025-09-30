
export const metadata = {
  title: "SuperNPro News | Breaking Stories, Insights & Global Headlines",
  description: "Stay informed with SuperNPro—your source for breaking news, trending stories, expert analysis, and global updates across politics, tech, business, and culture.",
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
