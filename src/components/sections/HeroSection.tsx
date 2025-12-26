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

      {/* Hero Visual - Lottie with Bezel - Hidden on mobile */}
      <div className="mx-auto mt-16 hidden w-full max-w-5xl md:block">
        <div className="relative aspect-[5/3]">
          {/* Screen viewport - TWEAK POSITIONING: Adjust inset-x and inset-y values to align screen area */}
          {/* Current values: inset-x-[15%] = 15% from left/right, inset-y-[13%] = 13% from top/bottom */}
          <div className="absolute inset-x-[15%] inset-y-[13%] z-10 overflow-hidden rounded-lg">
            <LottiePlayer
              src="/hero(lottie).json"
              className="h-full w-full"
            />
          </div>

          {/* Bezel overlay - sits on top with shadows intact, pointer-events-none allows clicks through */}
          <div className="absolute inset-0 pointer-events-none">
            <Image
              src="/bezel.png"
              alt=""
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, 1920px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}






