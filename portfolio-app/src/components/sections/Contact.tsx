import { ArrowUpRight, Mail } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { site } from "@/lib/site";

const channels = [
  {
    label: "Email",
    href: `mailto:${site.email}`,
    value: site.email,
    icon: Mail,
    external: false,
  },
  {
    label: "LinkedIn",
    href: site.linkedin,
    value: "linkedin.com/in/dadidivyasree",
    icon: ArrowUpRight,
    external: true,
  },
  {
    label: "GitHub",
    href: site.github,
    value: "github.com/DivyaSree0912",
    icon: ArrowUpRight,
    external: true,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-shell scroll-mt-24 py-24 sm:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection className="mb-8">
          <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
            <p className="text-[10px] font-medium tracking-[0.22em] text-zinc-400 uppercase">
              09 / CONTACT
            </p>
            <p className="text-[10px] font-medium tracking-[0.22em] text-zinc-500 uppercase">
              START A CONVERSATION
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="premium-card rounded-[32px] p-6 sm:p-8 lg:p-10">
            <div className="mb-8">
              <p className="text-[11px] font-medium tracking-[0.22em] text-blue-300 uppercase">
                Let&apos;s build something useful
              </p>
              <h2
                id="contact-heading"
                className="mt-4 text-4xl font-semibold tracking-[-0.08em] text-white sm:text-5xl lg:text-7xl"
              >
                LET&apos;S BUILD
                <span className="mt-1 block text-zinc-300">SOMETHING USEFUL.</span>
              </h2>
            </div>

            <ul className="grid gap-4 sm:grid-cols-3">
              {channels.map((channel) => {
                const Icon = channel.icon;
                return (
                  <li key={channel.label}>
                    <a
                      href={channel.href}
                      {...(channel.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="group flex h-full items-start gap-3 rounded-[22px] border border-white/10 bg-white/[0.02] p-4 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10">
                        <Icon size={18} className="text-blue-300" aria-hidden="true" />
                      </div>
                      <span>
                        <span className="block text-sm text-zinc-500">{channel.label}</span>
                        <span className="mt-1 block text-sm font-medium text-white">
                          {channel.value}
                        </span>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
