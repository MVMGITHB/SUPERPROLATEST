import Article from "@/components/Article/Article";
import { base_url } from "@/components/Helper/helper";
import { notFound } from "next/navigation";

// ✅ Common API function
async function getPost(slugName) {
  try {
    const res = await fetch(
      `${base_url}/api/blog/getOneBlogByslug/${slugName}`,
      {
        cache: "no-store", // or use revalidate
      },
    );

    if (!res.ok) {
      if (res.status === 404) return null;
      throw new Error("Failed to fetch post");
    }

    return await res.json();
  } catch (error) {
    console.error("Fetch Error:", error);
    return null;
  }
}

// ✅ Metadata
export async function generateMetadata({ params }) {
  const { slugName } = params;

  const post = await getPost(slugName);

  if (!post) {
    return {
      title: "Post not found",
      description: "This blog post could not be found.",
      robots: { index: false, follow: false },
    };
  }

  const url = `/technology/${slugName}`;

  const imageUrl = post?.mimage?.startsWith("http")
    ? post.mimage
    : `https://supernpro.com${post?.mimage || post?.image}`;

  return {
    metadataBase: new URL("https://supernpro.com"),

    title: post?.mtitle || "Blog",
    description: post?.mdesc || "Read full article",

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: post?.mtitle,
      description: post?.mdesc,
      url,
      type: "article",
      images: [
        {
          url: imageUrl, // ✅ fixed (no broken fallback)
          width: 1200,
          height: 630,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: post?.mtitle,
      description: post?.mdesc,
      images: [imageUrl],
    },
  };
}

// ✅ Page
const page = async ({ params }) => {
  const { slugName } = params; // ✅ FIXED

  const data = await getPost(slugName);

  if (!data) {
    notFound();
  }

  return (
    <div>
      <Article data={data} />
    </div>
  );
};

export default page;
