import { Blog } from "@/components/blog/Blog";
import ReadMore from "@/components/readMorebtn/ReadMore";

export const metadata = {
  title: "SuperNPro Automobile | Car Launches, Reviews & Industry News",
  description:
    "Discover the latest automobile trends, new car launches, expert reviews, and updates from the auto industry.",
  metadataBase: new URL("https://supernpro.com"),
  alternates: {
    canonical: "/automobile",
  },
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
        name: "automobile",
        item: "https://supernpro.com/automobile",
      },
    ],
  };


  const content = `
<p style="line-height:1.85; margin-bottom:14px;">
  Stay updated with everything happening in the fast-evolving world of automobiles. From cutting-edge 
  <strong style="color:#0ea5e9;">electric vehicles (EVs)</strong> 
  to powerful SUVs and premium sedans, our Automobile section brings you the latest news, upcoming launches, expert reviews, and in-depth industry insights — all in one place.
</p>

<p style="line-height:1.85; margin-bottom:14px;">
  Whether you're a car enthusiast, a potential buyer, or simply curious about new vehicles, our content keeps you informed and helps you make smarter, well-researched decisions.
</p>

<p style="line-height:1.85; margin-bottom:14px;">
  Explore detailed reviews covering 
  <span style="color:#dc2626; font-weight:600;">performance</span>, 
  <span style="color:#2563eb; font-weight:600;">features</span>, 
  <span style="color:#16a34a; font-weight:600;">mileage</span>, 
  <span style="color:#7c3aed; font-weight:600;">safety ratings</span>, and 
  <span style="color:#ea580c; font-weight:600;">pricing</span> 
  for newly launched cars and bikes. We also simplify model comparisons to help you find the best vehicle for your lifestyle and budget.
</p>

<p style="line-height:1.85; margin-bottom:14px;">
  Our coverage dives deep into the rapidly growing EV landscape — highlighting battery innovations, charging infrastructure, and government policies shaping India’s electric mobility future. 
</p>

<p style="line-height:1.85; margin-bottom:14px;">
  Stay informed about major auto expos, brand announcements, concept cars, and groundbreaking technologies like 
  <strong style="color:#9333ea;">autonomous driving</strong> and 
  <strong style="color:#0284c7;">connected car systems</strong>. 
  We also track the latest trends in two-wheelers, including scooters, motorcycles, and sustainable mobility solutions.
</p>

<p style="line-height:1.85; margin-bottom:14px;">
  Whether you want expert buying tips, ownership guidance, or insights into the automobile industry’s newest innovations, our content ensures you never miss an important update.
</p>

<p style="line-height:1.9; font-weight:700; color:#1e3a8a; font-size:1.12rem; margin-top:20px;">
  Dive into the world of automobiles with reliable, engaging, and easy-to-understand coverage crafted for modern readers.
</p>
`;


  return (
    <div>
      {/* // add breadcrumbSchema  */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <h1 className="text-4xl text-gray-700 mt-2 p-3 lg:p-0  flex justify-center items-center font-sans font-extrabold ">
        Automobile News – SuperNPro: Cars, EVs & Auto Industry
      </h1>

      <h2 className="text-gray-600 text-xl mt-2 p-3 lg:p-0 flex justify-center items-center font-sans">
        From electric vehicles to luxury rides — explore what’s new and next in
        the world of automobiles.
      </h2>


       {/* INSERTED ReadMore BELOW H2 */}
            <div className="p-3 lg:p-0 flex mt-5 justify-center">
              <div className="max-w-3xl">
                <ReadMore text={content} limit={100} className="mt-1.5" />
              </div>
            </div>
      <Blog url="automobile" />
    </div>
  );
};

export default page;
