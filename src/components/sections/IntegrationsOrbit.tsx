/**
 * IntegrationsOrbit Component
 *
 * Full-width section showing integration logos orbiting around
 * the memory.store logo on dashed circular paths.
 *
 * Inspired by Quarter's platform visualization design.
 */

"use client";

import Image from "next/image";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { integrations } from "@/lib/integrations";

// Categorize by tool type
const chatTools = [
  integrations.find((i) => i.name === "Claude")!,
  integrations.find((i) => i.name === "ChatGPT")!,
]; // Innermost orbit - Chat/AI tools

const codingTools = [
  integrations.find((i) => i.name === "Cursor")!,
  integrations.find((i) => i.name === "OpenCode")!,
]; // Second orbit - Coding tools

const meetingTools = [
  integrations.find((i) => i.name === "Fathom")!,
  integrations.find((i) => i.name === "Granola")!,
]; // Third orbit - Meeting tools

const coordinationTools = [
  integrations.find((i) => i.name === "Linear")!,
  integrations.find((i) => i.name === "Slack")!,
  integrations.find((i) => i.name === "Raycast")!,
]; // Outermost orbit - Coordination/Productivity tools

export function IntegrationsOrbit() {
  return (
    <section className="w-full py-16 md:py-20">
      {/* Text content - compact spacing */}
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="font-serif text-4xl leading-tight tracking-[-0.06em] text-black md:text-5xl">
          Connect your tools
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg tracking-[-0.04em] text-gray-600">
          Memory.store connects your AI tools via MCP, Claude, ChatGPT,
          Cursor—they share the same context instead of working in isolation.
          Need a different integration? Talk to us and we'll build it.
        </p>

        {/* CTA link below text */}
        <a
          href="/guides"
          className="mt-6 inline-flex items-center gap-2 font-medium text-black transition-colors hover:text-gray-700"
        >
          View setup guides
          <span className="text-xl text-gray-500">→</span>
        </a>
      </div>

      {/* Orbital visualization with fade gradients - compact */}
      <div className="relative mt-8 w-full overflow-hidden md:mt-10">
        {/* Top fade gradient */}
        <div className="pointer-events-none absolute left-0 top-0 z-30 h-[200px] w-full bg-gradient-to-b from-[#ece9e2] to-transparent md:h-[250px]" />

        {/* Bottom fade gradient */}
        <div className="pointer-events-none absolute bottom-0 left-0 z-30 h-[200px] w-full bg-gradient-to-t from-[#ece9e2] to-transparent md:h-[250px]" />

        {/* Orbital container - reduced height */}
        <div className="relative z-0 mx-auto flex h-[500px] w-full max-w-4xl items-center justify-center overflow-hidden md:h-[600px]">
        {/* Central logo */}
        <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg md:h-24 md:w-24">
          <Image
            src="/logo-for-orbit.png"
            alt="Memory.store"
            width={48}
            height={48}
            className="h-12 w-12 object-contain md:h-14 md:w-14"
          />
        </div>

        {/* Chat tools - Innermost orbit (slowest) */}
        <OrbitingCircles radius={130} duration={60} iconSize={48} path={true}>
          {chatTools.map((integration) => (
            <div
              key={integration.name}
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-md"
            >
              <Image
                src={integration.src}
                alt={integration.name}
                width={24}
                height={24}
                className="h-6 w-6 object-contain"
              />
            </div>
          ))}
        </OrbitingCircles>

        {/* Coding tools - Second orbit */}
        <OrbitingCircles radius={200} duration={50} iconSize={48} path={true}>
          {codingTools.map((integration) => (
            <div
              key={integration.name}
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-md"
            >
              <Image
                src={integration.src}
                alt={integration.name}
                width={24}
                height={24}
                className="h-6 w-6 object-contain"
              />
            </div>
          ))}
        </OrbitingCircles>

        {/* Meeting tools - Third orbit */}
        <OrbitingCircles radius={270} duration={40} iconSize={48} path={true}>
          {meetingTools.map((integration) => (
            <div
              key={integration.name}
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-md"
            >
              <Image
                src={integration.src}
                alt={integration.name}
                width={24}
                height={24}
                className="h-6 w-6 object-contain"
              />
            </div>
          ))}
        </OrbitingCircles>

        {/* Coordination tools - Outermost orbit */}
        <OrbitingCircles
          radius={340}
          duration={30}
          iconSize={48}
          path={true}
        >
          {coordinationTools.map((integration) => (
            <div
              key={integration.name}
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-md"
            >
              <Image
                src={integration.src}
                alt={integration.name}
                width={24}
                height={24}
                className="h-6 w-6 object-contain"
              />
            </div>
          ))}
        </OrbitingCircles>
        </div>
      </div>
    </section>
  );
}
