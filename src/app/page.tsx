import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";

import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { FloatingNav } from "@/components/ui/floating-navbar";
import {
  FaBriefcase,
  FaFolderOpen,
  FaHome,
  FaTools,
  FaUser,
} from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[
            { name: "Home", link: "#home", icon: <FaHome /> },
            { name: "About", link: "#about", icon: <FaUser /> },
            { name: "Skills", link: "#skills", icon: <FaTools /> },
            { name: "Experience", link: "#experience", icon: <FaBriefcase /> },
            { name: "Projects", link: "#projects", icon: <FaFolderOpen /> },
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
