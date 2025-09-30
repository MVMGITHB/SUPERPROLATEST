// import React from 'react'

export const metadata = {
  title: " Privacy Policy | Supernpro – Your Data, Our Responsibility",
  description:
    "Read Supernpro’s Privacy Policy to learn how we collect, use, and protect your personal information. Your privacy and data security are our top priority.",
  metadataBase: new URL("https://supernpro.com"),
  alternates: {
    canonical: "./",
  },
  // robots: {
  //   index: false,
  //   follow: false,
  // },
};

import PrivacyPolicy from "@/components/privacyPolicy/PrivacyPolicy";
const page = () => {
  return (
    <div>
      <PrivacyPolicy />
    </div>
  );
};

export default page;
