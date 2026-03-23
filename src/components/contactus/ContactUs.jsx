"use client";

import axios from "axios";
import { useState } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";
import { base_url } from "../Helper/helper";
import toast from "react-hot-toast";

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      toast.loading("Sending message...", { id: "contact" });

      const res = await axios.post(`${base_url}/api/auth/contact`, form);

      toast.success("Message sent successfully! 🚀", { id: "contact" });

      console.log("Response:", res.data);

      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error:", error);

      toast.error(error?.response?.data?.message || "Something went wrong ❌", {
        id: "contact",
      });
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h1>

      <p className="text-gray-600 mb-6">
        At{" "}
        <span className="font-semibold">
          SuperNPro – Real-Time Updates in News, Finance & Tech
        </span>
        , we value your feedback, queries, and suggestions. Whether you have a
        question, collaboration idea, or business inquiry, feel free to reach
        out to us.
      </p>

      {/* Address */}
      <div className="mb-6 text-gray-700">
        📍 I Thum I.T. Park, Sector 62, Noida, Uttar Pradesh
      </div>

      {/* Email Contact */}
      <div className="mb-8 flex items-center gap-3 text-gray-700">
        <FaEnvelope className="text-indigo-600" />
        <span className="font-medium">Email:</span>
        <a
          href="mailto:contact@supernpro.com"
          className="text-indigo-600 hover:underline"
        >
          contact@supernpro.com
        </a>
      </div>

      {/* FORM */}
      <div className="bg-white p-6 md:mx-50 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          General Queries
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* SOCIAL LINKS */}
      <div className="mt-10 text-center">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Stay Connected
        </h2>

        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="https://www.instagram.com/supernproinfo/ "
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-pink-600 hover:scale-110 transition"
          >
            <FaInstagram size={22} />
            Instagram
          </a>

          <a
            href="https://www.facebook.com/supernproofficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 hover:scale-110 transition"
          >
            <FaFacebookF size={20} />
            Facebook
          </a>

          <a
            href="https://x.com/supernpro/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sky-500 hover:scale-110 transition"
          >
            <FaTwitter size={20} />
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
}
