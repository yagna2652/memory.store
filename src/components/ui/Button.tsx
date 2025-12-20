/**
 * Button Component
 *
 * Reusable button with consistent styling across the site.
 * Supports multiple variants, sizes, and border radius options.
 *
 * Also exports `buttonStyles` object for styling Next.js Link components
 * as buttons (since Link can't use onClick handlers).
 *
 * @example
 * <Button onClick={handleClick}>Click me</Button>
 * <Button variant="secondary" size="lg">Large Secondary</Button>
 * <Button type="submit" rounded="lg">Submit Form</Button>
 *
 * // For Link components:
 * <Link href="/page" className={`${buttonStyles.primary} ${buttonStyles.sizes.md}`}>
 */

import { ReactNode } from "react";

interface ButtonProps {
  /** Button content (text, icons, etc.) */
  children: ReactNode;
  /** Visual style: primary (dark), secondary (gray), ghost (text only) */
  variant?: "primary" | "secondary" | "ghost";
  /** Padding/text size: sm, md, lg */
  size?: "sm" | "md" | "lg";
  /** Border radius: full (pill shape) or lg (rounded rectangle) */
  rounded?: "full" | "lg";
  /** Additional CSS classes */
  className?: string;
  /** Click handler */
  onClick?: () => void;
  /** HTML button type attribute */
  type?: "button" | "submit";
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  rounded = "full",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-colors";

  const variants = {
    primary: "bg-[#0e0e0e] text-white hover:bg-[#1a1a1a]",
    secondary: "bg-[#4a4a48] text-white hover:bg-[#5a5a58]",
    ghost: "text-[#0e0e0e] hover:text-gray-700",
  };

  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4",
  };

  const roundedStyles = {
    full: "rounded-full",
    lg: "rounded-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${roundedStyles[rounded]} ${className}`}
    >
      {children}
    </button>
  );
}

/**
 * Shared button styles for Next.js Link components
 * Use when you need a button-styled link (can't use onClick)
 *
 * @example
 * <Link
 *   href="/signup"
 *   className={`${buttonStyles.primary} ${buttonStyles.sizes.md} ${buttonStyles.rounded.full}`}
 * >
 *   Sign Up
 * </Link>
 */
export const buttonStyles = {
  primary: "inline-flex items-center justify-center font-medium transition-colors bg-[#0e0e0e] text-white hover:bg-[#1a1a1a]",
  sizes: {
    sm: "px-5 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4",
  },
  rounded: {
    full: "rounded-full",
    lg: "rounded-lg",
  },
};


