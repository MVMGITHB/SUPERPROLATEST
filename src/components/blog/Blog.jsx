import React from "react";
import { BlogHome } from "./BlogHome";
import Popup from "../Home/Popup";
export const Blog = ({ url }) => {
  return (
    <div>
       {/* <h1 className="text-4xl text-gray-700  flex justify-center items-center font-sans font-extrabold ">Our Blogs</h1> */}
      <Popup />
      <BlogHome url={url} />
    </div>
  );
};
