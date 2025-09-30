export const metadata = {
  title:
    "About Us | Supernpro – Trusted Daily News, Stock Market & Financial Insights",
  description:
    "Discover Supernpro, your reliable platform for daily news, stock market trends, PF updates, and tax tips. Stay informed with expert-driven, verified, and easy-to-understand insights every day.",
  metadataBase: new URL("https://supernpro.com"),
  alternates: {
    canonical: "./",
  },
  // robots: {
  //   index: false,
  //   follow: false,
  // },
};
import Aboutus from "@/components/aboutUs/Aboutus";

const page = () => {
  return (
    <div>
      <Aboutus />
    </div>
  );
};

export default page;
