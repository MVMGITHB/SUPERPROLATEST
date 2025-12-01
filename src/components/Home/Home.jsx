import NewsLayout from "./NewsLayout";
import Summary from "./Summary";

export default function Home({ blog }) {
  return (
    <div>
      <NewsLayout blog={blog} />
      <Summary blog={blog} />
    </div>
  );
}
