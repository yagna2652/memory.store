import Image from "next/image";
import { WaitlistForm } from "@/components/WaitlistForm";
import { LottiePlayer } from "@/components/ui/LottiePlayer";

export function HeroSection() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-16">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-serif text-5xl leading-tight tracking-[-0.06em] text-black md:text-6xl lg:text-7xl">
          Context that follows you across your AI tools.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg tracking-[-0.04em] text-gray-600">
          Memory store syncs your context across every AI tool and team member—automatically.
        </p>
        <WaitlistForm
          source="hero"
          id="hero-waitlist"
          className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row sm:items-stretch"
        />
      </div>

      {/* Hero Visual - Background with Lottie - Hidden on mobile */}
      <div className="mx-auto mt-16 hidden w-full max-w-5xl md:block">
        <div className="relative aspect-[16/10] overflow-hidden rounded-3xl">
          {/* Background image */}
          <Image
            src="/background-2.jpeg"
            alt=""
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
          {/* Lottie animation */}
          <div className="absolute inset-0 z-10 p-8">
            <LottiePlayer
              src="/hero(lottie).json"
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}






