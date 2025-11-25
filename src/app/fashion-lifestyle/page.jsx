
import { Blog } from "@/components/blog/Blog";
import ReadMore from "@/components/readMorebtn/ReadMore";

export const metadata = {
  title: "Supernpro | Breaking Entertainment Stories, Gossip & Film Reviews",
  description:
    "Explore fashion trends, beauty tips, wellness guides, and lifestyle inspiration curated for modern living.",
  metadataBase: new URL("https://supernpro.com"),
  alternates: {
    canonical: "./",
  },
  // robots: {
  //   index: false,
  //   follow: false,
  // },
};

const content = `
<p style="line-height:1.85; margin-bottom:14px;">
  Step into the world of <span style="color:#0ea5e9; font-weight:600;">SuperNPro Fashion & Lifestyle</span>, where style meets culture and trends shape the way we live. Whether you're passionate about fashion, curious about lifestyle shifts, or looking for everyday inspiration, this is your go-to space for everything chic, smart, and stylish.
</p>

<p style="line-height:1.85; margin-bottom:14px;">
  Stay ahead with the latest global fashion trends sourced from 
  <span style="color:#7c3aed; font-weight:600;">runways</span>, 
  <span style="color:#2563eb; font-weight:600;">street style</span>, and 
  <span style="color:#16a34a; font-weight:600;">influencer culture</span>. From seasonal must-haves to timeless wardrobe essentials, SuperNPro offers trend reports, outfit ideas, and styling guides curated for every mood and moment.
</p>

<p style="line-height:1.85; margin-bottom:14px;">
  Dive into expert fashion insights—from 
  <span style="font-weight:600; color:#dc2626;">colour combinations</span> and 
  <span style="font-weight:600; color:#9333ea;">accessorizing</span> to 
  <span style="font-weight:600; color:#0284c7;">festival looks</span>, 
  <span style="font-weight:600; color:#16a34a;">workwear</span>, 
  <span style="font-weight:600; color:#2563eb;">occasion outfits</span>, and effortless ways to elevate your personal style. We spotlight top designers, rising brands, celebrity fashion, and international fashion weeks that shape global style narratives.
</p>

<p style="line-height:1.85; margin-bottom:14px;">
  Fashion is only the beginning. At SuperNPro, lifestyle takes center stage too. Explore content on 
  <strong style="color:#10b981;">beauty</strong>, 
  <strong style="color:#7c3aed;">fitness</strong>, 
  <strong style="color:#0284c7;">wellness</strong>, 
  <strong style="color:#ea580c;">travel</strong>, 
  <strong style="color:#2563eb;">skincare</strong>, 
  <strong style="color:#16a34a;">grooming</strong>, and the many elements that shape modern living. From self-care routines and home décor ideas to cultural trends and healthy habits, we deliver meaningful inspiration that blends style with practicality.
</p>

<p style="line-height:1.85; margin-bottom:14px;">
  Our goal is to inspire creativity, confidence, and individuality. Whether you're seeking a wardrobe upgrade, planning a lifestyle refresh, or simply staying updated with what's trending, SuperNPro Fashion & Lifestyle offers fresh, engaging, and relatable content every day.
</p>

<p style="line-height:1.9; font-weight:700; color:#1e3a8a; font-size:1.12rem; margin-top:20px;">
  Stay stylish. Stay inspired. Stay SuperNPro.
</p>
`;



const page = () => {
  return (
    <div>
      <h1 className="text-4xl text-gray-700 mt-2 p-3 lg:p-0  flex justify-center items-center font-sans font-extrabold ">
       Fashion & Lifestyle – SuperNPro: Trends, Style & Culture
      </h1>

      <h2 className="text-gray-600 text-xl mt-2 p-3 lg:p-0 flex justify-center items-center font-sans">
        Discover the newest fashion trends, styling tips, and lifestyle
        inspiration from around the world.
      </h2>

      <div className="p-3 lg:p-0 flex mt-5 justify-center">
              <div className="max-w-3xl">
                <ReadMore text={content} limit={200} className="mt-1.5" />
              </div>
            </div>

      <Blog url="fashion-lifestyle" />
    </div>
  );
};

export default page;
