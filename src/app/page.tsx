import AboutMe from "@/components/AboutMe";
import Certificate from "@/components/Certificate";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <Intro /> <AboutMe /> <Skills /> <Experience /> <Projects />{" "}
      <Certificate />
    </div>
  );
}
