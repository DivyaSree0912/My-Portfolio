import AnimatedSection from "./AnimatedSection";

interface Props {
  title: string;
  subtitle?: string;
  id?: string;
}

export default function SectionHeading({ title, subtitle, id }: Props) {
  return (
    <AnimatedSection className="mb-14">
      <div className="max-w-3xl">
        <h2
          id={id}
          className="text-4xl font-bold tracking-[-0.04em] text-[#1A1A1A] sm:text-5xl lg:text-6xl"
        >
          {title}
        </h2>
        {subtitle && <p className="mt-4 text-base text-[#6B6560] sm:text-lg leading-relaxed">{subtitle}</p>}
      </div>
    </AnimatedSection>
  );
}
