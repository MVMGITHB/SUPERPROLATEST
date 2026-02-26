'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#171717] px-6">
      
      <div className="text-center max-w-xl w-full">

        {/* 404 Text */}
        <h1 className="text-9xl font-extrabold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent drop-shadow-lg">
          404
        </h1>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-white mt-6">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-400 mt-4 text-lg">
          Oops! The page you're looking for doesn’t exist or may have been removed.
        </p>

        {/* Divider */}
        <div className="w-24 h-1 bg-orange-400 mx-auto mt-6 rounded-full"></div>

        {/* Button */}
        <Link
          href="/"
          className="inline-block mt-8 px-8 py-3 rounded-lg font-semibold text-white 
                     bg-gradient-to-r from-orange-400 to-amber-500 
                     hover:from-orange-400 hover:to-amber-600 
                     transition-all duration-300 shadow-lg hover:scale-105"
        >
          Go Back Home
        </Link>

      </div>
    </div>
  )
}