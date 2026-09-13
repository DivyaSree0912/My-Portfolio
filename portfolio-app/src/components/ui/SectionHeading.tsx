import AnimatedSection from "./AnimatedSection";

interface Props {
  title: string;
  subtitle?: string;
  id?: string;
}

export default function SectionHeading({ title, subtitle, id }: Props) {
  return (
    <AnimatedSection className="mb-10">
      <div className="max-w-2xl">
        <h2
          id={id}
          className="text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl"
        >
          {title}
        </h2>
        {subtitle && <p className="mt-3 text-base text-zinc-400 sm:text-lg">{subtitle}</p>}
      </div>
    </AnimatedSection>
  );
}
