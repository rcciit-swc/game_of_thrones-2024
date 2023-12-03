import type { MetadataRoute } from "next";

// To help search engine crawlers crawl your site more efficiently.

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "http://got.rcciit.org.in",
      lastModified: new Date(),
    },
    {
      url: "http://got.rcciit.org.in/gallery",
      lastModified: new Date(),
    },
    {
      url: "http://got.rcciit.org.in/contacts",
      lastModified: new Date(),
    },
    {
      url: "http://got.rcciit.org.in/team",
      lastModified: new Date(),
    },
  ];
}

// Output:

// <urlset xmlns="http://got.rcciit.org.in/schemas/sitemap/0.9">
//   <url>
//     <loc>http://got.rcciit.org.in</loc>
//     <lastmod>2023-04-06T15:02:24.021Z</lastmod>
//   </url>
//   <url>
//     <loc>http://got.rcciit.org.in/gallery</loc>
//     <lastmod>2023-04-06T15:02:24.021Z</lastmod>
//   </url>
//   <url>
//     <loc>http://got.rcciit.org.in/contacts</loc>
//     <lastmod>2023-04-06T15:02:24.021Z</lastmod>
//   </url>
//   <url>
//     <loc>http://got.rcciit.org.in/team</loc>
//     <lastmod>2023-04-06T15:02:24.021Z</lastmod>
//   </url>
// </urlset>
