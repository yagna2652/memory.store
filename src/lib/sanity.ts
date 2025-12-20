/**
 * Sanity CMS Client Configuration
 *
 * This module sets up the Sanity client for fetching blog posts and guides.
 * Content is managed in Sanity Studio and fetched at request time (no caching).
 *
 * Environment variables required:
 * - NEXT_PUBLIC_SANITY_PROJECT_ID: Your Sanity project ID
 * - NEXT_PUBLIC_SANITY_DATASET: Dataset name (defaults to 'production')
 */

import { createClient } from '@sanity/client';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

/**
 * Sanity client instance
 * Returns null if project ID is not configured (graceful degradation)
 */
export const client = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion: '2024-01-01',
      // CDN disabled to ensure fresh content on every request
      // Enable for production if you want faster reads with eventual consistency
      useCdn: false,
    })
  : null;

/**
 * Fetch data from Sanity with error handling
 *
 * @template T - Expected return type
 * @param query - GROQ query string (see queries.ts for examples)
 * @param params - Query parameters (e.g., { slug: 'my-post' })
 * @returns Query result or null if client unavailable/error occurs
 *
 * @example
 * const posts = await sanityFetch<Post[]>(POSTS_QUERY);
 * const post = await sanityFetch<Post>(POST_BY_SLUG_QUERY, { slug: 'hello-world' });
 */
export async function sanityFetch<T = unknown>(
  query: string,
  params: Record<string, unknown> = {}
): Promise<T | null> {
  if (!client) {
    return null;
  }

  try {
    return await client.fetch<T>(query, params, {
      // no-store ensures dynamic rendering (fresh data on every request)
      cache: 'no-store',
    });
  } catch (error) {
    console.error('Sanity fetch error:', error);
    return null;
  }
}

