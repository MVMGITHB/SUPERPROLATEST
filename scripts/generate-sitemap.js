const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch"); // Make sure v2 is installed
// const { base_url } = require("../src/components/Helper/helper"); // Adjust relative path

const BASE_URL = "https://supernpro.com";

async function generateSitemap() {
  try {
    //put api Base-url data for the fetch data not website base-Url
    const response = await fetch(`https://connect.couponsculture.com/api/blog/getAllBlog`);
    const articles = await response.json();

    const staticUrls = [
      { loc: `${BASE_URL}/`, priority: "1.00" },
      { loc: `${BASE_URL}/politics`, priority: "0.80" },
      { loc: `${BASE_URL}/finance`, priority: "0.80" },
      { loc: `${BASE_URL}/automobile`, priority: "0.80" },
      { loc: `${BASE_URL}/entertainment`, priority: "0.80" },
      { loc: `${BASE_URL}/real-estate`, priority: "0.80" },
      { loc: `${BASE_URL}/fashion-lifestyle`, priority: "0.80" },
      { loc: `${BASE_URL}/technology`, priority: "0.80" },
      { loc: `${BASE_URL}/sports`, priority: "0.80" },
      { loc: `${BASE_URL}/about-us`, priority: "0.80" },
      { loc: `${BASE_URL}/privacypolicy`, priority: "0.80" },
      { loc: `${BASE_URL}/use-services`, priority: "0.80" },
    ];

    const staticXml = staticUrls.map(
      (page) => `
  <url>
    <loc>${page.loc}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>${page.priority}</priority>
  </url>`
    );

    const articleXml = articles.map((article) => {
      const category = article.category?.slug || "general";
      const slug = article.slug || "";
      const lastmod = article.updatedAt
        ? new Date(article.updatedAt).toISOString()
        : new Date().toISOString();

      return `
  <url>
    <loc>${BASE_URL}/${category}/${slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>0.70</priority>
  </url>`;
    });

    const fullSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                      http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  ${staticXml.join("")}
  ${articleXml.join("")}
</urlset>`;

    fs.writeFileSync(path.join("public", "sitemap.xml"), fullSitemap, "utf8");
    console.log("✅ Sitemap generated successfully at public/sitemap.xml");
  } catch (error) {
    console.error("❌ Error generating sitemap:", error);
  }
}

generateSitemap();