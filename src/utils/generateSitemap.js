const generateSitemap = async () => {
  const baseUrl = "https://yourwebsite.com";
  const pages = ["", "/about", "/products"];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
          .map(
            (page) => `
            <url>
              <loc>${baseUrl}${page}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>daily</changefreq>
              <priority>0.8</priority>
            </url>
          `
          )
          .join("")}
      </urlset>
    `;

  fs.writeFileSync("public/sitemap.xml", sitemap);
};
