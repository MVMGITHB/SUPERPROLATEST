export const metadata = {
  title:
    "Supernpro | About Us – Bringing You the Latest in Politics, Finance, & More",
  description:
    "About Supernpro – a reliable platform bringing daily updates and expert insights on politics, finance, technology, and lifestyle.",
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
