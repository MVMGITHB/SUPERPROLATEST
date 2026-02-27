"use client";
import Link from "next/link";
import { useState } from "react";
import { base_url } from "../Helper/helper";
import Image from "next/image";

const Summary = ({ blog }) => {
  const [visibleCount, setVisibleCount] = useState(4);
  const sortedData = Array.isArray(blog)
    ? [...blog].sort((a, b) => a.id - b.id)
    : [];

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  const getRandomBlogs = (array, count) => {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const randomBlogs = Array.isArray(blog) ? getRandomBlogs(blog, 10) : [];

  return (
    <div className="mx-auto flex flex-col md:flex-row gap-6">
      <aside className="w-full md:w-1/5">
        <div className="sticky top-4 bg-gray-100 p-4 lg:p-0 rounded-lg lg:rounded-none shadow-md ">
          <Link
            href="http://www.intellectmedia.net/trk/click.asp?cid=3203&pid=661&did=23840&code=326"
            target="_blank"
            rel="noopener noreferrer"
            title="Go to Aditya Birla PL"
          >
            {/* //chnage img to image tag  */}
            <Image
              src="/adityaBirla.webp"
              alt="Aditya Birla PL"
              width={1920} // replace with actual image width
              height={480} // replace with actual image height
              className="w-full h-[480px] object-contain rounded-md lg:rounded-none"
            />
          </Link>
        </div>
      </aside>

      <main className="w-full md:w-3/5 flex flex-col gap-4 p-2 mt-[-25px]">
        <h2 className="text-2xl font-bold text-gray-700">Recent News</h2>
        {Array.isArray(blog) &&
          blog.slice(0, visibleCount).map((item, index) => (
            <Link href={`/${item?.category?.slug}/${item?.slug}`}>
              <div
                key={index}
                className="w-full p-4 flex flex-col md:flex-row items-center gap-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
              >
                {/* <div className="w-full md:w-[160px] h-[90px] flex-shrink-0 overflow-hidden rounded-xl"> */}

                {/* <a href={`/${item?.category?.slug}/${item?.slug}`}> */}
                <Image
                  src={`${base_url}${item?.image}`}
                  alt={item?.title}
                  width={160}
                  height={90}
                  className=" w-full md:w-[160px] h-[300px] md:h-[90px] flex-shrink-0 overflow-hidden rounded-sm  md:object-cover"
                />
                {/* </a> */}

                {/* </div> */}
                <div>
                  <p className="text-lg font-semibold text-gray-800 hover:text-indigo-600 transition-colors duration-300">
                    {item?.title}
                  </p>
                  <p>{item?.mdesc}</p>
                </div>
              </div>
            </Link>
          ))}

        {visibleCount < sortedData.length && (
          <div className="flex justify-center">
            <button
              onClick={handleLoadMore}
              className="px-4 py-2 bg-gray-600  text-white rounded-md hover:bg-gray-700 cursor-pointer transition-colors duration-300"
            >
              View More
            </button>
          </div>
        )}
      </main>

      <aside className="w-full md:w-1/5 px-2">
        <div className="sticky top-4 bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4 text-gray-700">
            Trending News
          </h2>

          <div className="h-[350px] overflow-hidden relative">
            <ul className="animate-scroll space-y-3">
              {[...randomBlogs, ...randomBlogs].map((item, index) => (
                <li key={index} className="border-b pb-2 last:border-none">
                  <Link
                    href={`/${item?.category?.slug}/${item?.slug}`}
                    className="text-sm font-medium text-gray-800 hover:text-indigo-600 transition-colors duration-300"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Summary;
