import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Spotlight } from "@/components/ui/spotlight";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[
            { name: "home", link: "#home" },
            { name: "About", link: "#about" },
            { name: "Skills", link: "#skills" },
            { name: "Experience", link: "#experience" },
            { name: "Projects", link: "#projects" },
          ]}
        />
        <Hero />
        <AboutMe />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
