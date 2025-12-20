import { FeatureCard } from "@/components/FeatureCard";

const features = [
  {
    title: "Connect your tools",
    description:
      "Memory.store connects your AI tools via MCP, Claude, ChatGPT, Cursor—they share the same context instead of working in isolation. Need a different integration? Talk to us and we'll build it.",
    linkText: "View setup guides",
    linkHref: "/guides",
    image: "/integrations/integrations.png",
  },
  {
    title: "Record what matters as you work",
    description:
      "Insights don't stay where you found them. Record in Claude, access in Cursor and ChatGPT. As we integrate deeper—Slack, Notion, your full toolkit—everything connects. information appear as your conversation unfolds.",
    linkText: "Explore Recall",
    linkHref: "#",
    reverse: true,
    image: "/record.webp",
  },
  {
    title: "Recall anywhere",
    description:
      "Context you've already explained. Insights you've already captured. Memory surfaces when you need it—ask directly or let relevant information appear as your conversation unfolds.",
    linkText: "See Connections",
    linkHref: "#",
    image: "/recall.webp",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24">
      <div className="mx-auto max-w-7xl space-y-12 px-6">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            linkText={feature.linkText}
            linkHref={feature.linkHref}
            image={feature.image}
            reverse={feature.reverse}
            priority={index === 0}
          />
        ))}
      </div>
    </section>
  );
}


