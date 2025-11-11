// import React from 'react'

export const metadata = {
  title: " Terms of Use | Supernpro – User Agreement & Website Policies",
  description:
    "Learn about the terms, conditions, and policies governing your access and use of Supernpro.com, in accordance with Indian regulations.",
  metadataBase: new URL("https://supernpro.com"),
  alternates: {
    canonical: "./",
  },
  // robots: {
  //   index: false,
  //   follow: false,
  // },
};

import UseServices from "@/components/useService/UseServices";

const page = () => {
  return (
    <div>
      <UseServices />
      {/* update use */}
    </div>
  );
};

export default page;
