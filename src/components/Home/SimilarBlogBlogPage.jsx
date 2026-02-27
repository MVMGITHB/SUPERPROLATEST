"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { base_url } from "../Helper/helper";

const SimilarBlogBlogPage = React.memo(({ blogs }) => {
  // Efficient Fisher–Yates shuffle
  const getRandomBlogs = (array, count) => {
    const arr = [...array];

    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr.slice(0, count);
  };

  
  const randomBlogs = useMemo(() => {
    if (!Array.isArray(blogs)) return [];
    return getRandomBlogs(blogs, 4);
  }, [blogs]);

  return (
    <aside className="w-full md:w-full bg-gray-100 p-2 rounded-lg">
      <h2 className="text-lg font-bold mb-4 text-center border-b pb-2">
        Latest Blogs
      </h2>

      <div className="space-y-2">
        {randomBlogs.map((property) => (
          <Link
            key={property?.id}
            href={`/${property?.category?.slug}/${property?.slug}`}
            title={property?.title}
            className="block"
          >
            <div className="bg-[#eeeef5] rounded-lg shadow-sm hover:shadow-md transition duration-300 p-2 flex items-center gap-3">
              <div className="flex-1">
                <h3 className="text-xs font-medium text-blue-800 hover:text-[#4F1C51] line-clamp-3 transition-colors">
                  {property?.title}
                </h3>
              </div>

              <Image
                src={`${base_url}${property?.image}`}
                alt={property?.title}
                width={130}
                height={90}
                sizes="160px"
                loading="lazy"
                className="rounded-md object-cover"
              />
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
});

export default SimilarBlogBlogPage;
