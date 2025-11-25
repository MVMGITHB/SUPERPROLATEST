import { Home } from "@/components/Home/Home";

export const metadata = {
  title: "Supernpro | Breaking News, Trends & Insights Across Every Industry",
  description:
    "Stay informed with Supernpro – your trusted source for the latest news in politics, finance, lifestyle, entertainment, real estate, and more.",
  metadataBase: new URL("https://supernpro.com"),
  alternates: {
    canonical: "./",
  },
  // robots: {
  //   index: false,
  //   follow: false,
  // },
};

export default function Page() {


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
        name: "politics",
        item: "https://supernpro.com/politics",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Finance",
        item: "https://supernpro.com/finance",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Automobile",
        item: "https://supernpro.com/automobile",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Entertiment",
        item: "https://supernpro.com/entertainment",
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Real Estate",
        item: "https://supernpro.com/real-estate",
      },
      {
        "@type": "ListItem",
        position: 7,
        name: "Fashion & Lifestyle",
        item: "https://supernpro.com/fashion-lifestyle",
      },
      {
        "@type": "ListItem",
        position: 8,
        name: "Technology",
        item: "https://supernpro.com/technology",
      },
      {
        "@type": "ListItem",
        position: 9,
        name: "sports",
        item: "https://supernpro.com/sports",
      },
    ],
  };


  // JSON-LD for Corporation
  const corporationSchema = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    name: "SuperNPro",
    url: "https://supernpro.com/",
    logo: "https://supernpro.com/SuperNpro.webp",
    sameAs: [
      "https://www.facebook.com/supernproofficial/",
      "https://www.instagram.com/supernproinfo/",
    ],
  };


  

  return (
    <div>

       {/* // add breadcrumbSchema  */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />



      {/* Inject JSON-LD safely */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(corporationSchema),
        }}
      />

      {/* Your Home component */}

 {/* <h1 className="text-4xl text-gray-700 mt-2 p-3 lg:p-0 flex justify-center items-center font-sans font-extrabold ">
        SuperNPro – Real-Time Updates in News, Finance & Tech
      </h1> */}

      <Home />
    </div>
  );
}