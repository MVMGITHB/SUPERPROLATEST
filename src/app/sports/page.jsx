// seo for this page is in Blog.jsx
export const metadata = {
  title: " SuperNPro Sports | Live Scores, Highlights & Athlete Stories",
  description:
    "Catch up on sports news, match highlights, player interviews, and updates across cricket, football, and more.",
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
import ReadMore from "@/components/readMorebtn/ReadMore";
const page = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://supernpro.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "advertiser",
        item: "https://supernpro.com/sports",
      },
    ],
  };

const content = `
<p style="line-height:1.85; margin-bottom:14px;">
  Welcome to <span style="color:#0ea5e9; font-weight:600;">SuperNPro Sports News</span>, your all-in-one destination for everything happening in the world of sports. Whether you’re a cricket fanatic, a football lover, or a follower of multiple sports, we ensure you never miss a moment of the action.
</p>

<p style="line-height:1.85; margin-bottom:14px;">
  Stay updated with live scores, real-time match updates, team line-ups, and performance stats from major tournaments and leagues worldwide. From 
  <span style="color:#2563eb; font-weight:600;">IPL</span> to the 
  <span style="color:#16a34a; font-weight:600;">Premier League</span>, 
  <span style="color:#9333ea; font-weight:600;">World Cups</span> to national championships, SuperNPro delivers coverage that’s fast, accurate, and highly engaging.
</p>

<p style="line-height:1.85; margin-bottom:14px;">
  Every game-changing moment is easier to understand through our in-depth match analyses, expert perspectives, and detailed post-game breakdowns. We highlight standout performances, tactical shifts, and defining moments that shape the outcome of each contest.
</p>

<p style="line-height:1.85; margin-bottom:14px;">
  Stay tuned to the biggest stories in sports—from 
  <span style="font-weight:600; color:#dc2626;">player transfers</span> and 
  <span style="font-weight:600; color:#0284c7;">injury updates</span> to 
  <span style="font-weight:600; color:#10b981;">rankings</span>, interviews, controversies, and behind-the-scenes insights that keep the global sports community buzzing.
</p>

<p style="line-height:1.85; margin-bottom:14px;">
  Whether it's cricket, football, tennis, badminton, hockey, or emerging sports, we bring you the top highlights, viral moments, and exclusive coverage that fans enjoy and depend on.
</p>

<p style="line-height:1.9; font-weight:700; color:#1e3a8a; font-size:1.12rem; margin-top:20px;">
  With unmatched speed, accuracy, and passion, SuperNPro Sports News keeps you connected to your favourite games anytime, anywhere.
</p>
`;


  return (
    <div>
      <h1 className="text-4xl text-gray-700 mt-2 p-3 lg:p-0 flex justify-center items-center font-sans font-extrabold ">
        Sports News – SuperNPro: Live Scores, Matches & Highlights
      </h1>
      <h2 className="text-gray-600 text-xl mt-2 p-3 lg:p-0 flex justify-center items-center font-sans">
        From cricket to football — get the latest updates, exclusive insights,
        and top sporting moments.
      </h2>

      <div className="p-3 lg:p-0 flex mt-5 justify-center">
              <div className="max-w-3xl">
                <ReadMore text={content} limit={200} className="mt-1.5" />
              </div>
            </div>


      <Blog url="sports" />
    </div>
  );
};

export default page;
