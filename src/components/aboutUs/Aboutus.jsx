import React from "react";

const Aboutus = () => {
  return (
    <div className="px-4 md:px-16 lg:px-32 py-12 bg-gray-50 text-gray-800">
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
        About Us | Supernpro – Your Trusted Daily News & Insights Platform
      </h1>

      {/* Subheader */}
      <p className="text-lg md:text-xl text-center text-gray-600 max-w-3xl mx-auto mb-8">
        Discover Supernpro — your go-to platform for the latest updates across Politics,
        Automobiles, Finance, Entertainment, Technology, Sports, Fashion, and Lifestyle.
        Stay informed and ahead with verified, expert-driven content every day.
      </p>

      {/* Welcome Section */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
          Welcome to Supernpro — Your Reliable Source for Daily Updates & Insights
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          In today’s fast-paced world, information is power. At Supernpro, we bring you
          the latest headlines, market insights, lifestyle trends, and in-depth stories
          all in one place—so you never miss what matters most.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Whether you’re an investor tracking stock markets, a professional staying updated
          on policies or politics, a sports fan, or someone exploring fashion and lifestyle
          trends, our platform is designed to deliver verified, easy-to-read, and actionable
          content tailored for you.
        </p>
      </section>

      {/* Mission Section */}
      <section className="mb-10 bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          Our mission is simple — to empower readers with accurate, timely, and relevant
          updates across multiple categories, helping you make smarter decisions in finance,
          lifestyle, and beyond. We cut through the noise to give you news and insights
          that truly matter.
        </p>
      </section>

      {/* Trust Section */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Why Trust Supernpro?</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>Breaking news from national and global sources</li>
          <li>Real-time stock market and finance updates</li>
          <li>Policy, Real Estate, and tax-related insights</li>
          <li>Latest trends in automobiles, tech, and sports</li>
          <li>Entertainment, fashion, and lifestyle stories</li>
        </ul>
      </section>

      {/* Differentiation Section */}
      <section className="mb-10 bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">What Makes Us Different?</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li><strong>Verified & Reliable:</strong> Content sourced from trusted agencies, experts, and official portals</li>
          <li><strong>Comprehensive Coverage:</strong> One-stop platform for news, finance, lifestyle & trends</li>
          <li><strong>Reader-Centric Design:</strong> Easy-to-read, mobile-friendly, and regularly updated</li>
        </ul>
      </section>

      {/* Call-to-Action Section */}
      <section className="text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Start Your Day with Supernpro</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          From morning headlines to evening market updates, Supernpro keeps you informed
          on everything—from politics and technology to lifestyle and entertainment.
        </p>
        <p className="text-gray-700 font-semibold">
          Bookmark Supernpro today and Stay Updated Daily.
        </p>
      </section>
    </div>
  );
};

export default Aboutus;
