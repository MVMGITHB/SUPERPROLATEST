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
        name: "entertainment",
        item: "https://supernpro.com/entertainment",
      },
    ],
  };


  const content = `
<p style="line-height:1.85; margin-bottom:14px;">
  Welcome to <span style="color:#0ea5e9; font-weight:600;">SuperNPro</span>, your ultimate destination for everything entertainment. Whether you’re a movie lover, a celebrity follower, or someone who enjoys the glam and sparkle of lifestyle trends, SuperNPro brings you the most intriguing updates from the entertainment world—all in one place.
</p>

<p style="line-height:1.85; margin-bottom:14px;">
  We cover everything with precision, flair, and a fresh perspective—from 
  <span style="color:#16a34a; font-weight:600;">red carpet moments</span> that set fashion standards to 
  <span style="color:#7c3aed; font-weight:600;">reel-life stories</span> that captivate millions. Stay ahead with the latest movie reviews, OTT releases, box office reports, trailer breakdowns, and insider insights shaping the industry.
</p>

<p style="line-height:1.85; margin-bottom:14px;">
  Love celebrity news? We bring you closer to your favourite stars with 
  <span style="font-weight:600; color:#dc2626;">exclusive interviews</span>, 
  <span style="font-weight:600; color:#2563eb;">relationship updates</span>, 
  <span style="font-weight:600; color:#0284c7;">fashion breakdowns</span>, and 
  <span style="font-weight:600; color:#9333ea;">behind-the-scenes moments</span> from film sets and major events.
</p>

<p style="line-height:1.85; margin-bottom:14px;">
  SuperNPro dives deep into modern pop culture—covering 
  <strong style="color:#2563eb;">fashion trends</strong>, 
  <strong style="color:#10b981;">beauty tips</strong>, 
  <strong style="color:#9333ea;">fitness routines</strong>, 
  and <strong style="color:#ea580c;">travel inspirations</strong>. It's much more than movies and celebrities—it’s your guide to today’s dynamic lifestyle and entertainment ecosystem.
</p>

<p style="line-height:1.85; margin-bottom:14px;">
  Whether you're searching for trending entertainment updates, detailed movie analysis, or style inspiration, SuperNPro delivers content that is engaging, reliable, and consistently in tune with what’s buzzing across the entertainment landscape.
</p>

<p style="line-height:1.9; font-weight:700; color:#1e3a8a; font-size:1.12rem; margin-top:20px;">
  Explore, enjoy, and stay connected with SuperNPro—your trusted source for the latest and most exciting entertainment content.
</p>
`;


  return (

    <div>
      {/* // add breadcrumbSchema  */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <h1 className="text-4xl text-gray-700 mt-2 p-3 lg:p-0 flex justify-center items-center font-sans font-extrabold ">
        Entertainment News – SuperNPro: Movies, Celebs & Lifestyle
      </h1>
      <h2 className="text-gray-600 text-xl mt-2 p-3 lg:p-0 flex justify-center items-center font-sans">
        From red carpets to reel life — get all the gossip, reviews, and
        behind-the-scenes moments from the world of entertainment.
      </h2>

      <div className="p-3 lg:p-0 flex mt-5 justify-center">
              <div className="max-w-3xl">
                <ReadMore text={content} limit={200} className="mt-1.5" />
              </div>
            </div>
      <Blog url="entertainment" />
    </div>
  );
};

export default page;
