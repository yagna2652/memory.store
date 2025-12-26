/**
 * FeatureCard Component
 *
 * Large promotional card used on the landing page to showcase product features.
 * Displays a two-column layout with text content and an image/mockup.
 *
 * @see src/components/sections/FeaturesSection.tsx - Where these cards are used
 */

import React from "react";
import Image from "next/image";

interface FeatureCardProps {
  /** Card headline - can include JSX for styling (e.g., <span> for emphasis) */
  title: React.ReactNode;
  /** Supporting description text (1-3 sentences) */
  description: string;
  /** CTA link text (default: "Learn more") */
  linkText?: string;
  /** CTA link destination URL */
  linkHref?: string;
  /** Optional decorative background image URL (displayed at 20% opacity) */
  backgroundImage?: string;
  /** Feature screenshot/illustration URL - if omitted, shows placeholder mockup */
  image?: string;
  /** Additional CSS classes for the container */
  className?: string;
  /** Flip layout: image on left, text on right (default: text left, image right) */
  reverse?: boolean;
  /** Load image with priority (use for above-fold cards) */
  priority?: boolean;
}

export function FeatureCard({
  title,
  description,
  linkText = "Learn more",
  linkHref = "#",
  backgroundImage,
  image,
  className = "",
  reverse = false,
  priority = false,
}: FeatureCardProps) {
  return (
    <div className={`relative overflow-hidden rounded-3xl bg-[#f3f1eb] ${className}`}>
      {/* Background Pattern */}
      {backgroundImage && (
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute right-0 top-0 h-full w-2/3"
            style={{
              backgroundImage: `url('${backgroundImage}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
      )}

      {/* Content Grid */}
      <div className={`relative grid min-h-[600px] grid-cols-1 lg:grid-cols-2 ${reverse ? "lg:flex-row-reverse" : ""}`}>
        {/* Left - Text Content */}
        <div className={`flex flex-col justify-center p-12 lg:p-16 ${reverse ? "lg:order-2" : ""}`}>
          <h2 className="font-serif text-4xl leading-tight tracking-[-0.06em] text-black md:text-5xl">
            {title}
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed tracking-[-0.04em] text-gray-700">
            {description}
          </p>
          <a
            href={linkHref}
            className="mt-8 inline-flex items-center gap-2 font-medium text-black transition-colors hover:text-gray-700"
          >
            {linkText}
            <span className="text-xl text-gray-500">→</span>
          </a>
        </div>

        {/* Right - Screen/Visual Placeholder */}
        <div className={`relative flex items-center justify-center p-8 lg:p-12 ${reverse ? "lg:order-1" : ""}`}>
          {/* Background image - Using CSS for better caching */}
          <div
            className={`absolute inset-0 overflow-hidden ${reverse ? "rounded-l-3xl" : "rounded-r-3xl"}`}
            style={{
              backgroundImage: 'url(/hero-background.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />

          {/* Feature image or mockup placeholder */}
          <div className="relative z-10 w-full max-w-xl">
            {image ? (
              <div className="relative aspect-[4/3]">
                {/* Screen viewport - TWEAK POSITIONING: Adjust inset-x and inset-y values to align screen area */}
                {/* Current values: inset-x-[10%] = 10% from left/right, inset-y-[10%] = 10% from top/bottom */}
                <div className="absolute inset-x-[10%] inset-y-[10%] overflow-hidden rounded-lg">
                  <Image
                    src={image}
                    alt=""
                    fill
                    className="object-cover"
                    loading={priority ? "eager" : "lazy"}
                    sizes="(max-width: 1024px) 100vw, 512px"
                    unoptimized={image.endsWith('.gif')}
                  />
                </div>

                {/* Bezel overlay - sits on top with shadows intact, pointer-events-none allows clicks through */}
                <div className="absolute inset-0 pointer-events-none">
                  <Image
                    src="/bezel.png"
                    alt=""
                    fill
                    className="object-contain"
                    loading={priority ? "eager" : "lazy"}
                    sizes="(max-width: 1024px) 100vw, 512px"
                  />
                </div>
              </div>
            ) : (
              /* Window chrome */
              <div className="overflow-hidden rounded-xl bg-white shadow-2xl">
                {/* Title bar */}
                <div className="flex items-center gap-2 border-b border-gray-200 bg-gray-100 px-4 py-3">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-gray-300" />
                    <div className="h-3 w-3 rounded-full bg-gray-300" />
                    <div className="h-3 w-3 rounded-full bg-gray-300" />
                  </div>
                  <span className="ml-4 text-sm text-gray-500">
                    memory.store
                  </span>
                </div>
                {/* Screen content placeholder */}
                <div className="aspect-[4/3] bg-gray-50 p-6">
                  <div className="flex h-full w-full items-center justify-center rounded-lg border-2 border-dashed border-gray-200">
                    <span className="text-sm text-gray-400">
                      Your UI screenshot here
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
