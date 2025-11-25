// Metadata for SEO and social sharing
export const metadata = {
  title: "Supernpro Politics – Latest Political News, Analysis & Updates",
  description:
    "Stay updated with SuperNPro’s in-depth coverage of political developments, elections, policies, and global diplomacy.",
  metadataBase: new URL("https://supernpro.com"),
  alternates: {
    canonical: "./",
  },
};

import { Blog } from "@/components/blog/Blog";
import ReadMore from "@/components/readMorebtn/ReadMore";

const page = () => {
  // added breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "home",
        item: "https://supernpro.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "politics",
        item: "https://supernpro.com/politics",
      },
    ],
  };

  // YOUR LONG TEXT (1–2 pages or more)
 const content = `
<p style="line-height:1.8; margin-bottom:12px;">
  Nations, societies, and the decisions that affect our day-to-day existence are all shaped by politics. It is more crucial than ever to keep up with 
  <span style="font-weight:600; color:#2563eb;">political developments</span> 
  in a world that is constantly changing.
</p>

<p style="line-height:1.8; margin-bottom:12px;">
  To help you comprehend what's going on and why it matters, our Politics section provides you with 
  <span style="color:#16a34a; font-weight:600;">breaking news</span>, in-depth insights, and lucid analysis.
</p>

<p style="line-height:1.8; margin-bottom:12px;">
  We accurately and impartially cover every aspect of political events, from 
  <strong>elections</strong> and <strong>policy changes</strong> 
  to international diplomatic relations and government reforms. We break down the facts so you can stay ahead of the curve, whether it's a significant international summit, a leadership change, or a major national announcement.
</p>

<p style="line-height:1.8; margin-bottom:12px;">
  Along with news updates, we offer expert opinions, data-backed analysis, and trend predictions to help you understand the broader political landscape. With diverse perspectives and in-depth stories, we aim to empower readers with the knowledge needed for meaningful conversations and informed decision-making.
</p>

<p style="line-height:1.8; margin-bottom:12px;">
  Whether you're a student, a voter, a professional, or someone who simply wants to stay informed, this space is your gateway to credible and accessible political content.
</p>

<p style="line-height:1.8; font-weight:700; color:#1e3a8a; margin-top:18px; font-size:1.1rem;">
  Stay connected, stay informed, and explore politics with clarity and confidence.
</p>
`;


  return (
    <div>
      {/* add breadcrumbSchema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <h1 className="text-4xl text-gray-700 mt-2 p-3 lg:p-0 flex justify-center items-center font-sans font-extrabold">
        Politics News – SuperNPro: Policy, Elections & Governance
      </h1>

      <h2 className="text-gray-600 text-xl mt-2 p-3 lg:p-0 flex justify-center items-center font-sans">
        From elections to global affairs — explore unbiased news and detailed
        political analysis.
      </h2>

      {/* INSERTED ReadMore BELOW H2 */}
      <div className="p-3 lg:p-0 flex  mt-5 justify-center">
        <div className="max-w-3xl">
          <ReadMore text={content} limit={100} className="mt-1.5" />
        </div>
      </div>

      <Blog url="politics" />
    </div>
  );
};

export default page;
