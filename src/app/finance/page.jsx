import { Blog } from "@/components/blog/Blog";
import ReadMore from "@/components/readMorebtn/ReadMore";


export const metadata = {
  title: "Supernpro Finance – Latest Market News, Banking & Investment Updates",
  description:
    "Explore financial news, stock market updates, economic analysis, and expert tips on personal finance and investing.",
  metadataBase: new URL("https://supernpro.com"),
  alternates: {
    canonical: "./",
  },
  // robots: {
  //   index: false,
  //   follow: false,
  // },
};



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
        item: "https://supernpro.com/finance",
      },
    ],
  };

  const content = `
<p style="line-height:1.85; margin-bottom:14px;">
  Stay ahead in the fast-moving world of finance with 
  <span style="color:#0ea5e9; font-weight:600;">expert insights</span>, 
  <span style="color:#16a34a; font-weight:600;">daily updates</span>, and 
  <span style="color:#7c3aed; font-weight:600;">practical strategies</span> 
  designed to grow and protect your money.
</p>

<p style="line-height:1.85; margin-bottom:14px;">
  Our Finance category covers everything from banking innovations and investment opportunities to the latest business trends shaping global markets. Whether you're a beginner learning the basics of saving and budgeting or a seasoned investor tracking the stock market, this space offers valuable guidance for every financial goal.
</p>

<p style="line-height:1.85; margin-bottom:14px;">
  Get real-time updates on the stock market, policy changes, RBI announcements, and economic indicators that truly impact your financial decisions. We simplify complex subjects like 
  <span style="font-weight:600; color:#dc2626;">mutual funds</span>, 
  <span style="font-weight:600; color:#2563eb;">SIPs</span>, 
  <span style="font-weight:600; color:#0284c7;">insurance</span>, 
  <span style="font-weight:600; color:#9333ea;">credit cards</span>, and 
  <span style="font-weight:600; color:#16a34a;">tax planning</span> 
  into clear, actionable guidance.
</p>

<p style="line-height:1.85; margin-bottom:14px;">
  Explore smart money-management techniques, learn how to build long-term wealth through disciplined investing, and stay informed about emerging sectors like 
  <strong style="color:#2563eb;">fintech</strong>, 
  <strong style="color:#10b981;">digital banking</strong>, and 
  <strong style="color:#9333ea;">sustainable finance</strong>.
</p>

<p style="line-height:1.85; margin-bottom:14px;">
  Our expertly curated coverage highlights major business developments, corporate earnings, mergers, and industry trends that shape India’s financial landscape. From beginners to business professionals, this category equips you with the clarity and confidence needed to navigate today’s dynamic financial world.
</p>

<p style="line-height:1.9; font-weight:700; color:#1e3a8a; font-size:1.12rem; margin-top:20px;">
  Explore, learn, and stay financially empowered with reliable, timely, and easy-to-understand finance content — crafted just for you.
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
        Finance News – SuperNPro: Markets, Economy & Investing
      </h1>
      <h2 className="text-gray-600 text-xl mt-2 p-3 lg:p-0 flex justify-center items-center font-sans">
        Explore business updates, stock market movements, and smart money
        management strategies.
      </h2>

      <div className="p-3 lg:p-0 flex justify-center">
              <div className="max-w-3xl">
                <ReadMore text={content} limit={100} className="mt-1.5" />
              </div>
            </div>

      <Blog url="finance" />
    </div>
  );
};

export default page;
