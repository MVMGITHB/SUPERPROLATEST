
import { Blog } from "@/components/blog/Blog";
import ReadMore from "@/components/readMorebtn/ReadMore";

export const metadata = {
  title: " SuperNPro Tech | Gadgets, AI & Digital Trends",
  description:
    " Stay ahead with SuperNPro’s tech coverage - featuring gadgets, AI breakthroughs, startup news, and digital trends.",
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
        item: "https://supernpro.com/technology",
      },
    ],
  };

  const content = `
<p style="line-height:1.85; margin-bottom:14px;">
  Welcome to <span style="color:#0ea5e9; font-weight:600;">SuperNPro Technology News</span>, your ultimate hub for everything shaping the digital world. From breakthrough innovations to next-gen gadgets and future-ready ideas, we bring you the stories that define tomorrow’s technology.
</p>

<p style="line-height:1.85; margin-bottom:14px;">
  Stay updated with the latest in consumer electronics—including 
  <span style="color:#2563eb; font-weight:600;">smartphones</span>, 
  <span style="color:#16a34a; font-weight:600;">laptops</span>, 
  <span style="color:#7c3aed; font-weight:600;">wearables</span>, 
  <span style="color:#ea580c; font-weight:600;">smart home devices</span>, 
  EVs, gaming gear, and more. Our expert reviews, comparisons, and hands-on insights help you make the right tech choices for your lifestyle and budget.
</p>

<p style="line-height:1.85; margin-bottom:14px;">
  At SuperNPro, we go beyond gadgets. Explore the world of emerging technologies such as 
  <span style="font-weight:600; color:#dc2626;">artificial intelligence</span>, 
  <span style="font-weight:600; color:#9333ea;">robotics</span>, 
  <span style="font-weight:600; color:#0284c7;">blockchain</span>, 
  <span style="font-weight:600; color:#10b981;">biotech</span>, 
  <span style="font-weight:600; color:#2563eb;">quantum computing</span>, 
  <span style="font-weight:600; color:#ea580c;">cybersecurity</span>, and 
  <span style="font-weight:600; color:#16a34a;">space technology</span>. We simplify complex concepts into clear, engaging narratives that keep you informed and future-ready.
</p>

<p style="line-height:1.85; margin-bottom:14px;">
  Follow major industry trends—from global tech events and product launches to market shifts and policy changes shaping the digital ecosystem. Whether it's Big Tech updates, startup breakthroughs, or innovations disrupting traditional industries, SuperNPro ensures you stay ahead of the curve.
</p>

<p style="line-height:1.85; margin-bottom:14px;">
  Tech enthusiast? Our forward-looking features explore 
  <strong style="color:#10b981;">sustainable tech</strong>, 
  <strong style="color:#9333ea;">automation</strong>, 
  <strong style="color:#2563eb;">virtual worlds</strong>, 
  and emerging innovations transforming communication, transport, healthcare, finance, and everyday living.
</p>

<p style="line-height:1.9; font-weight:700; color:#1e3a8a; font-size:1.12rem; margin-top:20px;">
  With clear explanations, fresh insights, and reliable reporting, SuperNPro Technology News is your trusted guide in navigating the fast-paced world of tech.
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
        Technology News – SuperNPro: Innovations, Gadgets & Future
      </h1>

      <h2 className="text-gray-600 text-xl mt-2 p-3 lg:p-0 flex justify-center items-center font-sans">
        Stay ahead with insights on emerging technologies, industry trends, and
        future innovations
      </h2>

      <div className="p-3 lg:p-0 flex mt-5 justify-center">
              <div className="max-w-3xl">
                <ReadMore text={content} limit={200} className="mt-1.5" />
              </div>
            </div>

      <Blog url="technology" />
    </div>
  );
};

export default page;
