"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { FaGithub } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiReact,
  SiSpringboot,
  SiSupabase,
  SiOpenai,
} from "react-icons/si";
import { PinContainer } from "./ui/pin";
import { Badge } from "./ui/badge";
import Image from "next/image";

const RecentProjects = () => {
  const iconClass =
    "text-blue-500 group-hover:text-purple transition-colors duration-200";

  const projects = [
    {
      name: "Fantasy Hub",
      description:
        "An AI-powered Fantasy Premier League companion that helps users make smarter FPL decisions using player insights, comparisons, and advanced stats.",
      image: "/fantasy-hub.png",
      demo: "https://fantasy-world-delta.vercel.app/",
      github: "https://github.com/weasy1as/FantasyWorld",
      techStack: [
        { icon: <SiNextdotjs className={iconClass} />, name: "Next.js" },
        { icon: <SiTailwindcss className={iconClass} />, name: "Tailwind CSS" },

        { icon: <SiPostgresql className={iconClass} />, name: "Supabase" },
        { icon: <SiOpenai className={iconClass} />, name: "OpenAI API" },
      ],
    },
    {
      name: "AI Job Match",
      description:
        "A full-stack web app that uses AI to analyze and match resumes with job descriptions, highlighting skill gaps and providing tailored improvement suggestions.",
      image: "/aijobmatch.png",
      github: "https://github.com/weasy1as/aijobmatch",
      techStack: [
        { icon: <SiReact className={iconClass} />, name: "React" },
        { icon: <SiTailwindcss className={iconClass} />, name: "Tailwind CSS" },
        { icon: <SiSpringboot className={iconClass} />, name: "Spring Boot" },
        { icon: <SiPostgresql className={iconClass} />, name: "PostgreSQL" },
        { icon: <SiSupabase className={iconClass} />, name: "Supabase" },
        { icon: <SiOpenai className={iconClass} />, name: "OpenAI API" },
      ],
    },
  ];

  return (
    <div id="projects" className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.name}
          >
            <PinContainer title={item.github} href={item.github}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <Image
                  width={500}
                  height={500}
                  src={item.image}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.name}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.description}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex flex-wrap gap-1 items-center">
                  {item.techStack.map((tech, i) => (
                    <Badge
                      key={i}
                      className="group border border-white/[.2] rounded-full bg-black
             lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                    >
                      {tech.icon}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 justify-center items-center">
                  {item.demo && (
                    <a
                      href={item.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border border-foreground text-foreground px-4 py-2 rounded-full text-sm font-medium hover:bg-foreground hover:text-background transition-all"
                    >
                      <FaLocationArrow className="ms-3" color="#CBACF9" />
                      Demo
                    </a>
                  )}
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-all"
                  >
                    <FaGithub /> Code
                  </a>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
