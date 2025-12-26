/**
 * useConfetti Hook
 *
 * Custom hook for triggering confetti animations.
 * Uses canvas-confetti library for celebration effects.
 *
 * @example
 * const { fireSideCannons } = useConfetti();
 * // Call on success
 * fireSideCannons();
 */

"use client";

import confetti from "canvas-confetti";

export function useConfetti() {
  const fireSideCannons = () => {
    // Check if user prefers reduced motion for accessibility
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return; // Skip animation for accessibility
    }

    const end = Date.now() + 3 * 1000; // 3 seconds

    // Brand-aligned color palette (blacks, grays, off-white)
    const colors = ["#0e0e0e", "#1a1a1a", "#ece9e2", "#9a9a98"];

    (function frame() {
      // Left cannon
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });

      // Right cannon
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  return { fireSideCannons };
}
