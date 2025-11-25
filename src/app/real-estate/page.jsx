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
        item: "https://supernpro.com/real-estate",
      },
    ],
  };

  const content = `
<p style="line-height:1.85; margin-bottom:14px;">
  Welcome to <span style="color:#0ea5e9; font-weight:600;">SuperNPro Real-Estate News</span>, your trusted source for everything happening in the dynamic world of property and infrastructure. Whether you're a homebuyer, investor, real estate professional, or simply curious about market trends, we deliver accurate, timely, and insightful updates from across the realty landscape.
</p>

<p style="line-height:1.85; margin-bottom:14px;">
  Stay informed with daily property news covering 
  <span style="color:#16a34a; font-weight:600;">new project launches</span>, 
  <span style="color:#7c3aed; font-weight:600;">construction updates</span>, 
  <span style="color:#0284c7; font-weight:600;">regulatory changes</span>, 
  and key developments from leading builders. We help you understand how government policies, interest rate movements, and economic shifts influence property prices and buyer demand.
</p>

<p style="line-height:1.85; margin-bottom:14px;">
  Planning to buy or invest? SuperNPro offers 
  <span style="font-weight:600; color:#dc2626;">expert buying guides</span>, 
  <span style="font-weight:600; color:#2563eb;">locality reviews</span>, 
  <span style="font-weight:600; color:#10b981;">ROI insights</span>, 
  and detailed comparison breakdowns to support confident and informed decision-making. From premium real estate to affordable housing, and from emerging hotspots to established neighborhoods—we analyze the trends so you don't have to.
</p>

<p style="line-height:1.85; margin-bottom:14px;">
  Our market reports dive deep into how 
  <strong style="color:#2563eb;">infrastructure growth</strong>, 
  <strong style="color:#10b981;">rental patterns</strong>, 
  <strong style="color:#9333ea;">commercial performance</strong>, 
  and <strong style="color:#ea580c;">price fluctuations</strong> shape the future of India’s cities. We also track home loan updates, real estate finance, NRI investments, and professional guidance you can trust.
</p>

<p style="line-height:1.85; margin-bottom:14px;">
  Beyond numbers, we keep you connected with the lifestyle side of real estate — from 
  <strong style="color:#7c3aed;">interior design trends</strong> and 
  <strong style="color:#0ea5e9;">home improvement ideas</strong> to 
  <strong style="color:#16a34a;">sustainable living</strong> and modern home concepts shaping the next generation of residential spaces.
</p>

<p style="line-height:1.9; font-weight:700; color:#1e3a8a; font-size:1.12rem; margin-top:20px;">
  At SuperNPro, we make real estate simple, clear, and accessible. Stay tuned for reliable insights, smarter decisions, and a deeper understanding of the ever-evolving real estate world.
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
        Real-Estate News – SuperNPro: Market Trends & Property Updates
      </h1>
      <h2 className="text-gray-600 text-xl mt-2 p-3 lg:p-0 flex justify-center items-center font-sans">
        Discover property updates, buying guides, and market movements shaping
        the real estate sector.
      </h2>

      <div className="p-3 lg:p-0 flex mt-5 justify-center">
              <div className="max-w-3xl">
                <ReadMore text={content} limit={200} className="mt-1.5" />
              </div>
            </div>



      <Blog url="real-estate" />
    </div>
  );
};

export default page;
