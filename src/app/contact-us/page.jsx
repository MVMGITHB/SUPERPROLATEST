import ContactUs from "@/components/contactus/ContactUs";
import React from "react";

export const metadata = {
  title: "Contact SuperNPro – News, Finance & Tech Support | Get in Touch",
  description:
    "Get in touch with SuperNPro for queries, feedback, or business collaborations. We provide real-time updates in News, Finance & Tech.",

  keywords: [
    "Contact SuperNPro",
    "SuperNPro support",
    "news website contact",
    "finance tech contact",
    "Noida contact office",
  ],

  authors: [{ name: "SuperNPro Team" }],

  alternates: {
    canonical: "https://supernpro.com/contact-us", // ✅ ADD THIS
  },

  openGraph: {
    title: "Contact Us | SuperNPro",
    description:
      "Reach out to SuperNPro for queries, suggestions, or partnerships in News, Finance & Tech.",
    url: "https://supernpro.com/contact-us",
    siteName: "SuperNPro",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Us | SuperNPro",
    description:
      "Have questions or business inquiries? Contact SuperNPro today.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const page = () => {
  return (
    <div>
      <ContactUs />
    </div>
  );
};

export default page;