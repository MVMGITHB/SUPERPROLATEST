"use client";

import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";
import SimilarBlogs from "./SimilarBlogs";
import { base_url } from "../Helper/helper";


import Image from "next/image";

export default function NewsLayout({ blog }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Ensure blog is a non-null array
  const blogs = Array.isArray(blog) ? blog : [];

  return (
    <div className="mx-auto p-4 flex flex-col md:flex-row gap-6">
      {/* Left Sidebar */}
      <SimilarBlogs blogs={blogs} />

      {/* Main Section */}
      <main className="w-full md:w-3/5 p-2 rounded-lg">
        <div className="flex justify-center flex-col">
          <h1 className="text-[32px]  font-bold text-center  text-gray-800">
            SuperNPro – Real-Time Updates in News, Finance & Tech
          </h1>

          <span className=" text-[16px] text-center w-[300px] mx-auto">
            Trending Topics
          </span>
        </div>

        {blogs.length > 0 && (
          <Carousel
            showThumbs={false}
            showArrows={true}
            autoPlay
            infiniteLoop
            showIndicators={false}
            onChange={(index) => setCurrentIndex(index)}
          >
            {blogs.slice(0, 5).map((property , index) => (
              <Link
                key={property.id}
                href={`/${property.category?.slug}/${property.slug}`}
                rel="nopener noreferrer"
                title="Read blog content"
                className="block"
              >
                <div className="w-full md:h-116 relative cursor-pointer">
                  <Image
                    src={`${base_url}${property.image}`}
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, 60vw"
                    alt={property.title}
                    fill
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </Link>
            ))}
          </Carousel>
        )}

        {blogs[currentIndex] && (
          <Link
            href={`/${blogs[currentIndex].category?.slug}/${blogs[currentIndex].slug}`}
            rel="noopener noreferrer"
            title="read blog"
          >
            <h3 className="mt-4 text-center cursor-pointer hover:text-[#5E3B5E] text-[#4F1C51] font-bold text-xl md:text-2xl transition">
              {blogs[currentIndex].title}
            </h3>
          </Link>
        )}
      </main>

      {/* Right Sidebar */}
      <aside className="w-full md:w-1/5 rounded-lg">
        <div className="flex-col gap-2 hidden md:block">
          <Link
            href="http://www.intellectmedia.net/trk/click.asp?cid=3203&pid=661&did=23840&code=326"
            target="_blank"
            rel="noopenr noreferrer"
          >
            {/* //change to img to image  */}
            <Image
              src="/adityaBirla.webp"
              loading="lazy"
              alt="Aditya Birla PL"
              width={1920}
              height={480}
              className="hidden md:block w-full h-[480px] object-contain rounded-md lg:rounded-none"
            />
          </Link>
        </div>
      </aside>
    </div>
  );
}
