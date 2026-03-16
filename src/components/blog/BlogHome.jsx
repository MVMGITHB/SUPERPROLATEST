"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { base_url } from "../Helper/helper";
import Image from "next/image";

export const BlogHome = ({ url }) => {

  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchdata = async () => {
    try {
      const res = await axios.get(
        `${base_url}/api/blog/getOneBlogCategoryslug/${url}`
      );

      setCards(res.data || []);
    } catch (error) {
      console.log(error);
      setCards([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchdata();
  }, [url]);

  return (
    <>
      <div className="mx-auto p-2 flex flex-col md:flex-row gap-6">

        <div className="w-full md:w-3/5 mx-auto shadow-md p-4">

          {/* ✅ LOADING STATE */}
          {loading && (
            <div className="text-center text-gray-500 text-lg py-10">
              Loading blogs...
            </div>
          )}

          {/* ✅ DATA GRID */}
          {!loading && cards.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[...cards]
                .sort((a, b) => a.id - b.id)
                .map((card, index) => (
                  <div
                    key={index}
                    className="bg-[#f4f4f5] border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-transform duration-300 hover:scale-[1.03]"
                  >
                    <Link
                      href={`${card?.category?.slug}/${card?.slug}`}
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={`${base_url}${card.image}`}
                        alt={card.title}
                        width={1920}
                        height={192}
                        className="w-full h-48 object-cover md:object-fill rounded-t-md"
                      />
                    </Link>

                    <div className="p-2 text-center">
                      <Link
                        href={`${card?.category?.slug}/${card?.slug}`}
                        className="text-md font-semibold text-[#091057] hover:text-[#313561]"
                        title="Go to title page read full blog"
                      >
                        {card.title}
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          )}

          {/* ✅ NO DATA STATE */}
          {!loading && cards.length === 0 && (
            <div className="text-center text-gray-400 text-lg py-10">
              No data found
            </div>
          )}

        </div>
      </div>
    </>
  );
};