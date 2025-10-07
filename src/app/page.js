import { Home } from "@/components/Home/Home";

export const metadata = {
  title: "SuperNPro News | Breaking Stories, Insights & Global Headlines",
  description:
    "Stay informed with SuperNPro—your source for breaking news, trending stories, expert analysis, and global updates across politics, tech, business, and culture.",
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
      {/* Inject JSON-LD safely */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(corporationSchema),
        }}
      />

      {/* Your Home component */}
      <Home />
    </div>
  );
}