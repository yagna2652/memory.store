/**
 * Utility Functions
 *
 * Shared helpers used across the application for styling and formatting.
 */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS classes with conflict resolution
 *
 * Combines clsx (conditional classes) with tailwind-merge (deduplication).
 * Use this instead of template literals for className props.
 *
 * @param inputs - Class names, arrays, or conditional objects
 * @returns Merged class string with Tailwind conflicts resolved
 *
 * @example
 * cn("px-4 py-2", isActive && "bg-blue-500", className)
 * cn("text-red-500", "text-blue-500") // → "text-blue-500" (last wins)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ============================================================================
// Date Formatting
// ============================================================================

/**
 * Format date as uppercase full date (for article headers)
 *
 * @param dateString - ISO date string from Sanity
 * @returns Formatted date like "DECEMBER 20, 2025"
 *
 * @example
 * formatDateUppercase("2025-12-20") // → "DECEMBER 20, 2025"
 */
export function formatDateUppercase(dateString: string): string {
  return new Date(dateString)
    .toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    .toUpperCase();
}

/**
 * Format date as short date (for related posts/compact UI)
 *
 * @param dateString - ISO date string from Sanity
 * @returns Formatted date like "Dec 20, 2025"
 *
 * @example
 * formatDateShort("2025-12-20") // → "Dec 20, 2025"
 */
export function formatDateShort(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

// ============================================================================
// Content Utilities
// ============================================================================

/**
 * Calculate estimated reading time from text content
 *
 * Based on average adult reading speed of 200 words per minute.
 * Returns minimum of 1 minute for very short content.
 *
 * @param text - Raw text content (typically from Sanity body field)
 * @returns Human-readable string like "5 min read"
 *
 * @example
 * calculateReadTime("Lorem ipsum...") // → "3 min read"
 * calculateReadTime(undefined) // → "1 min read"
 */
export function calculateReadTime(text: string | undefined): string {
  if (!text) return '1 min read';

  const wordsPerMinute = 200;
  const wordCount = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);

  return `${minutes} min read`;
}
