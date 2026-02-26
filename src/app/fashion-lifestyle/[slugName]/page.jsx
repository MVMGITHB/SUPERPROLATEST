import Article from "@/components/Article/Article"
import { base_url } from "@/components/Helper/helper";
import axios from "axios";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slugName } = params;

 try {
   const response = await axios.get(
    `${base_url}/api/blog/getOneBlogByslug/${slugName}`
  );

  const post = response.data;

  if (!post) {
        notFound(); // ✅ this is important
      }
  

  if (!post) {
    return {
      title: "Post not found",
      description: "This blog post could not be found.",
      robots: { index: false, follow: false },
    };
  }

  const url = `/fashion-lifestyle/${slugName}`;
  const imageUrl =
    post?.mimage?.startsWith("http")
      ? post.mimage
      : `https://supernpro.com${post?.mimage || post?.image}`;

  return {
    metadataBase: new URL("https://supernpro.com"),

    title: post.mtitle,
    description: post.mdesc,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: post.mtitle,
      description: post.mdesc,
      url: url,
      type: "article",
      images: [
        {
          url:`${base_url}${post.image}` || imageUrl,
          width: 1200,
          height: 630,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: post.mtitle,
      description: post.mdesc,
      images: [imageUrl],
    },
  };
 } catch (error) {
   if (error.response?.status === 404) {
        notFound(); // ✅ handle axios 404
      }
  
      throw error;
  
 }
}




const page = async ({ params }) => {
  const { slugName } =await params;


  try {
    const response = await axios.get(
      `${base_url}/api/blog/getOneBlogByslug/${slugName}`
    );
    const data1 = response.data;

     if (!data1) {
          notFound(); // ✅ show 404 page
        }
   
    return (
      <div>
        <Article data={data1} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching article:", error);
    return <div>Failed to load article.</div>;
  }
};

export default page;
