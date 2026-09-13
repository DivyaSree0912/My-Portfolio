import type { Metadata } from "next";
import About from "@/components/sections/About";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Hero from "@/components/sections/Hero";
import ProblemSolving from "@/components/sections/ProblemSolving";
import Skills from "@/components/sections/Skills";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dadi Divya Sree — Software Engineer · AI/ML",
  description: site.statement,
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <FeaturedProjects />
      <Experience />
      <Achievements />
      <Skills />
      <ProblemSolving />
      <Contact />
    </>
  );
}
