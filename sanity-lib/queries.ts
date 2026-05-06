
// This query fetches all posts from the Sanity CMS
export const blogQuery = `*[_type == "post"]{
  _id,
  _createAt,
  _updatedAt,
  title,
  slug,
  publishedAt,
  excerpt,
  mainImage,
  "authorName": author->name,
  "categories": categories[]->title,
  body
} | order(publishedAt desc)`;

// This query fetches a single post by its slug
export const postQuery = `*[_type == "post" && slug.current == $slug][0]{
  ...,
  "authorName": author->name,
  "categories": categories[]->title,
}`;

// Query to fetch 3 latest posts for the homepage
export const latestPostsQuery = `*[_type == "post"]{
  _id,
  _createAt,
  _updatedAt,
  title,
  slug,
  publishedAt,
  excerpt,
  mainImage,
  "categories": categories[]->title,
} | order(publishedAt desc)[0...3]`;