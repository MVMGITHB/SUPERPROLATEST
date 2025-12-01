"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { base_url } from "../Helper/helper";

import Image from "next/image";

export const BlogHome = ({ url }) => {
  const [cards, setCards] = useState();
  const fetchdata = async () => {
    try {
      const data = await axios.get(
        `${base_url}/api/blog/getOneBlogCategoryslug/${url}`
      );
      setCards(data.data);
    } catch (error) { 
      // console.log(error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
<>
     {/* <h1 className="text-4xl text-gray-700  flex justify-center items-center font-sans font-extrabold ">Our Blogs</h1> */}

    <div className=" mx-auto p-2 flex flex-col md:flex-row gap-6">
      {/* //un comment 
      <div className="w-full md:w-1/5">
        <LeftSidebar />
      </div> */}

      <div className="w-full md:w-3/5 mx-auto shadow-md p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cards && cards.length > 0 ? (
            [...cards]
              .sort((a, b) => a.id - b.id)
              .map((card, index) => (
                <div
                  key={index}
                  className="bg-[#f4f4f5] border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-transform duration-300 hover:scale-[1.03]"
                >
                 <Link href={`${card?.category?.slug}/${card?.slug}?utm_source=supernpro.com/&utm_medium=email&utm_campaign=${card?.slug}`}
                 rel="noopener noreferrer"
                 >

                  {/* // change img to next image */}
                  <Image
                    src={`${base_url}${card.image}`}
                    alt={card.title}
                    // height proportional to h-48 (48 * 4)
                     width={1920}
                     height={192}
                    // chnages xl to md , for md:use object-fill
                    className="w-full h-48 object-cover md:object-fill rounded-t-md"
                  />
                 </Link>
                  <div className="p-2 text-center">
                    <Link
                      href={`${card?.category?.slug}/${card?.slug}?utm_source=supernpro.com/&utm_medium=email&utm_campaign=${card?.slug}`}
                      className="text-md font-semibold text-[#091057] hover:text-[#313561] transition-colors duration-200"
                      rel="noopenr noreferrer"
                      title="Go to title page read full blog"
                    >
                    {card.title}
                    </Link>
                  </div>
                </div>
              ))
          ) : (
            <div className="col-span-full text-center text-gray-400 text-lg">
              No data found
            </div>
          )}
        </div>
      </div>

      {/* <div className=" w-full md:w-1/5">
        <RightSide />
      </div> */}
    </div>
    </>
  );
};
