// import React from 'react'

export const metadata = {
  title: " Terms of Use | Supernpro – User Agreement & Website Policies",
  description:
    " Read Supernpro’s Terms of Use to understand our website policies, user responsibilities, and service conditions. Your access signifies acceptance of these terms.",
  metadataBase: new URL("https://supernpro.com"),
  alternates: {
    canonical: "./",
  },
  // robots: {
  //   index: false,
  //   follow: false,
  // },
};

import UseServices from "@/components/useService/UseServices"

const page = () => {
  return (
    <div>
    <UseServices/> 
    {/* update use */}
    </div>
  )
}

export default page
