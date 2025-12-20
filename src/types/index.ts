/**
 * Shared TypeScript Types
 *
 * These interfaces mirror the Sanity schema definitions.
 * Used for type-safe data fetching throughout the app.
 *
 * @see src/lib/queries.ts - GROQ queries that return these types
 * @see src/lib/sanity.ts - Fetch function using these types
 */

/**
 * Blog post from Sanity CMS
 * Displayed on /blog and /blog/[slug] pages
 */
export interface Post {
  /** Sanity document ID */
  _id: string;
  /** Post headline */
  title: string;
  /** URL-friendly identifier (e.g., { current: 'my-first-post' }) */
  slug: { current: string };
  /** Short summary shown in post cards (1-2 sentences) */
  excerpt: string;
  /** Hero image URL from Sanity CDN */
  mainImage?: string;
  /** Content category (e.g., 'Product', 'Engineering', 'Company') */
  category?: string;
  /** ISO date string for sorting and display */
  publishedAt: string;
  /** Raw text content used for read time calculation */
  body?: string;
}

/**
 * Setup guide from Sanity CMS
 * Displayed on /guides and /guides/[slug] pages
 */
export interface Guide {
  /** Sanity document ID */
  _id: string;
  /** Guide headline */
  title: string;
  /** URL-friendly identifier */
  slug: { current: string };
  /** Short summary shown in guide cards */
  excerpt: string;
  /** Hero image URL from Sanity CDN */
  mainImage?: string;
  /** Tool/platform this guide covers (e.g., 'raycast', 'cursor', 'claude-code') */
  platform?: string;
  /** Skill level required (e.g., 'beginner', 'intermediate', 'advanced') */
  difficulty?: string;
  /** Estimated reading time (e.g., '5 min read') */
  readTime?: string;
  /** Whether to feature this guide prominently */
  featured?: boolean;
  /** ISO date string for sorting and display */
  publishedAt: string;
  /** Raw text content used for read time calculation */
  body?: string;
}



