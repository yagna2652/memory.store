/**
 * GROQ Queries for Sanity CMS
 *
 * This file contains all GROQ (Graph-Relational Object Queries) used to fetch
 * content from Sanity. GROQ is Sanity's query language - similar to GraphQL
 * but designed specifically for JSON documents.
 *
 * Query naming convention:
 * - {TYPE}_QUERY: Fetch all documents of a type (for listing pages)
 * - {TYPE}_BY_SLUG_QUERY: Fetch single document by slug (for detail pages)
 * - RELATED_{TYPE}_QUERY: Fetch related documents (for "more like this")
 * - {TYPE}_SLUGS_QUERY: Fetch all slugs (for generateStaticParams)
 *
 * @see https://www.sanity.io/docs/groq - GROQ documentation
 * @see src/lib/sanity.ts - Client that executes these queries
 * @see src/types/index.ts - TypeScript types matching query results
 */

// ============================================================================
// Blog Post Queries
// ============================================================================

/** Fetch all published posts for the blog listing page */
export const POSTS_QUERY = `
  *[_type == "post" && defined(slug.current)]
  | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    category,
    publishedAt
  }
`;

/** Fetch single post by URL slug (for /blog/[slug] page) */
export const POST_BY_SLUG_QUERY = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    category,
    publishedAt,
    body
  }
`;

/** Fetch related posts for "More articles" section (excludes current post) */
export const RELATED_POSTS_QUERY = `
  *[_type == "post" && slug.current != $slug && defined(slug.current)]
  | order(publishedAt desc) [0...4] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    category,
    publishedAt
  }
`;

/** Fetch all post slugs for static generation (generateStaticParams) */
export const POST_SLUGS_QUERY = `
  *[_type == "post" && defined(slug.current)] {
    "slug": slug.current
  }
`;

// ============================================================================
// Setup Guide Queries
// ============================================================================

/** Fetch all published guides for the guides listing page */
export const GUIDES_QUERY = `
  *[_type == "guide" && defined(slug.current)]
  | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    platform,
    publishedAt
  }
`;

/** Fetch single guide by URL slug (for /guides/[slug] page) */
export const GUIDE_BY_SLUG_QUERY = `
  *[_type == "guide" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    platform,
    publishedAt,
    body
  }
`;

/** Fetch related guides for "More guides" section (excludes current guide) */
export const RELATED_GUIDES_QUERY = `
  *[_type == "guide" && slug.current != $slug && defined(slug.current)]
  | order(publishedAt desc) [0...4] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    platform,
    publishedAt
  }
`;

/** Fetch all guide slugs for static generation (generateStaticParams) */
export const GUIDE_SLUGS_QUERY = `
  *[_type == "guide" && defined(slug.current)] {
    "slug": slug.current
  }
`;
