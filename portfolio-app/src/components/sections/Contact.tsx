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
      className="section-shell scroll-mt-20 py-28 sm:py-36 border-b border-[#E0D9D1]"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        {/* Section Header */}
        <AnimatedSection className="mb-14">
          <div className="flex items-center justify-between gap-4 border-b border-[#E0D9D1] pb-4">
            <div className="flex items-center gap-3">
              <span className="inline-block w-2 h-2 rounded-full bg-[#1A1A1A]" />
              <p className="text-[10px] font-medium tracking-[0.22em] text-[#6B6560] uppercase">
                09 / CONTACT
              </p>
            </div>
            <p className="text-[10px] font-medium tracking-[0.22em] text-[#A39E98] uppercase">
              GET IN TOUCH
            </p>
          </div>
        </AnimatedSection>

        {/* Large Closing Statement: Solid + Outlined */}
        <AnimatedSection delay={0.05} className="mb-16">
          <h2
            id="contact-heading"
            className="text-4xl sm:text-6xl xl:text-8xl font-black tracking-[-0.04em] uppercase text-[#1A1A1A] leading-[1.0]"
          >
            LET&apos;S BUILD
            <span className="block text-outline-lg my-1">SOMETHING</span>
            <span>USEFUL.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-[#6B6560] max-w-xl font-normal leading-relaxed">
            Interested in software engineering, applied AI, or collaboration opportunities. Reach out directly through any of the channels below.
          </p>
        </AnimatedSection>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {channels.map((channel, index) => {
            const Icon = channel.icon;
            return (
              <AnimatedSection key={channel.label} delay={0.1 + index * 0.05}>
                <a
                  href={channel.href}
                  {...(channel.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="editorial-card group flex flex-col justify-between h-full rounded-[28px] p-8 border border-[#E0D9D1] bg-[#FAF7F4] transition-all duration-300 hover:border-[#1A1A1A]/50 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1A1A]"
                >
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[10px] font-semibold tracking-[0.2em] text-[#A39E98] uppercase">
                      {channel.label}
                    </span>
                    <div className="w-10 h-10 rounded-full border border-[#E0D9D1] bg-[#F5F0EB] flex items-center justify-center text-[#1A1A1A] group-hover:bg-[#1A1A1A] group-hover:text-[#F5F0EB] transition-all duration-200">
                      <Icon size={16} aria-hidden="true" />
                    </div>
                  </div>

                  <div>
                    <span className="text-base sm:text-lg font-bold text-[#1A1A1A] group-hover:text-[#6B6560] transition-colors break-all">
                      {channel.value}
                    </span>
                    <span className="block text-xs text-[#A39E98] mt-1 uppercase tracking-wider">
                      Connect ↗
                    </span>
                  </div>
                </a>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
