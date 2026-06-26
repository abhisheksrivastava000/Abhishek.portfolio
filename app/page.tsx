import About from "@/components/about";
import Contact from "@/components/contact";
import Curiosity from "@/components/curiosity";
import Intro from "@/components/intro";
import Hobbies from "@/components/hobbies";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Hobbies />
      <Skills />
      <Curiosity />
      <Contact />
    </main>
  );
}
