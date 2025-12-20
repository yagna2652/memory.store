/**
 * LottiePlayer Component
 *
 * Renders Lottie JSON animations with lazy loading.
 * Fetches animation data from URL at runtime to keep bundle size small.
 *
 * Features:
 * - Lazy loads animation JSON from public folder
 * - Shows loading spinner while fetching
 * - Configurable loop and autoplay behavior
 *
 * @example
 * <LottiePlayer src="/hero-animation.json" />
 * <LottiePlayer src="/icon.json" loop={false} autoplay={false} />
 */

"use client";

import Lottie from "lottie-react";
import { useEffect, useState } from "react";

interface LottiePlayerProps {
  /** Path to Lottie JSON file (relative to public folder) */
  src: string;
  /** CSS classes for sizing/positioning */
  className?: string;
  /** Repeat animation continuously (default: true) */
  loop?: boolean;
  /** Start playing immediately (default: true) */
  autoplay?: boolean;
}

export function LottiePlayer({
  src,
  className = "",
  loop = true,
  autoplay = true,
}: LottiePlayerProps) {
  const [animationData, setAnimationData] = useState<object | null>(null);

  useEffect(() => {
    fetch(src)
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Failed to load Lottie animation:", err));
  }, [src]);

  if (!animationData) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-300 border-t-gray-600" />
      </div>
    );
  }

  return (
    <Lottie
      animationData={animationData}
      loop={loop}
      autoplay={autoplay}
      className={className}
      style={{ width: '100%', height: '100%' }}
    />
  );
}

