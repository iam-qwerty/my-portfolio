import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/blog/"], // Allow all blog posts
      disallow: ["/api/*", "/_next/*"] // Block API routes and Next.js internals
    },
    sitemap: "https://emmanueloye.com/sitemap.xml",
    host: "https://emmanueloye.com",
  };
}