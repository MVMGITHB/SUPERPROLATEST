import AuthorPage from "@/components/authorSection/authorProfile";
import { base_url } from "@/components/Helper/helper";

import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const baseUrl = "https://supernpro.com/";

  console.log("Generating metadata for slug:", slug);

  try {
    const res = await fetch(`${base_url}/api/auth/singleUserbyslug/${slug}`, {
      next: { revalidate: 60 },
    });
    // console.log("respnseis si ", res);
    if (!res.ok) {
      return {
        title: "Author Not Found | Top5Shots",
        description: "No author information available at the moment.",
        alternates: {
          canonical: `${baseUrl}author/${slug}`,
        },
      };
    }

    const data = await res.json();

    const author = data[0];

    // console.log("Author data fetched for metadata:", author);


    if (!author) {
      return {
        title: "Author Not Found | Top5Shots",
        description: "No author information available at the moment.",
        alternates: {
          canonical: `${baseUrl}author/${slug}`,
        },
      };
    }

    const fullName = `${author.firstName} ${author.lastName}`;
    const bio =
      author.shortBio ||
      `Explore articles and insights by ${fullName} on SuperNpro.`;
    const imageUrl = author.image
      ? author.image.startsWith("http")
        ? author.image
        : `${baseUrl}${author.image}`
      : `${baseUrl}/images/default-user.png`;

      const plainDescription = bio
  .replace(/<[^>]*>/g, "")   // remove HTML tags
  .replace(/&nbsp;/g, " ")   // remove &nbsp;
  .trim()
  .slice(0, 160);


    return {
      title: `${author.name} | Author at SuperNpro `,
      description: plainDescription,
      keywords: [
        fullName,
        "SuperNpro authors",
        "tech blog authors",
        "curated content writer",
        "top 5 articles",
        "insights by " + fullName,
      ],
      alternates: {
        canonical: `${baseUrl}author/${slug}`,
      },
    };
  } catch (error) {
    return {
      title: "Author Profile | SuperNpro",
      description:
        "Author information could not be loaded due to a network issue.",
      alternates: {
        canonical: `${baseUrl}author/${slug}`,
      },
    };
  }
}

export default function Page({ params }) {
  return <AuthorPage slug={params.slug} />;
}
