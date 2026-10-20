"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { GrHeroku } from "react-icons/gr";

import { FaDocker, FaGithub, FaJava } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiOpenai,
  SiExpo,
  SiReact,
  SiSupabase,
  SiSpringboot,
} from "react-icons/si";
import { PinContainer } from "./ui/pin";
import { Badge } from "./ui/badge";
import Image from "next/image";
import Link from "next/link";

const RecentProjects = () => {
  const iconClass =
    "text-blue-500 group-hover:text-purple transition-colors duration-200";

  const projects = [
    {
      name: "Fantasy Hub",
      shortName: "fantasy-hub",
      description:
        "An AI-powered Fantasy Premier League companion that helps users make smarter FPL decisions using player insights, comparisons, and advanced stats.",
      image: "/FantasyLab.png",
      demo: "https://fantasy-lab-inky.vercel.app/",
      github: "https://github.com/weasy1as/FantasyLab",
      techStack: [
        { icon: <SiNextdotjs className={iconClass} />, name: "Next.js" },
        { icon: <SiTailwindcss className={iconClass} />, name: "Tailwind CSS" },
        { icon: <SiPostgresql className={iconClass} />, name: "Supabase" },
        { icon: <SiOpenai className={iconClass} />, name: "OpenAI API" },
      ],
    },
    {
      name: "Kitchen Rotation",
      shortName: "kitchen-rotation",
      description:
        "A full-stack household cleaning scheduler that fairly distributes responsibilities through a configurable member rotation and automatic schedule generation.",
      image: "/Household.png",
      demo: "https://household-app-green-nu.vercel.app/",
      github: "https://github.com/weasy1as/Household-App",
      techStack: [
        { icon: <SiNextdotjs className={iconClass} />, name: "Next.js" },
        { icon: <FaJava className={iconClass} />, name: "Java" },
        { icon: <SiSpringboot className={iconClass} />, name: "Spring Boot" },
        { icon: <SiPostgresql className={iconClass} />, name: "PostgreSQL" },
        { icon: <SiSupabase className={iconClass} />, name: "Supabase" },
        { icon: <FaDocker className={iconClass} />, name: "Docker" },
        { icon: <GrHeroku className={iconClass} />, name: "Heroku" },
      ],
    },
    /*{
      name: "Automated Job Alerts Workflow",
      shortName: "job-alerts-workflow",
      description:
        "A workflow built in n8n that automatically pulls jobs from Jobindex and IT Jobbank, filters them by roles, skills, and experience, removes duplicates using Google Sheets, and sends personalized daily emails with relevant job listings.",
      image: "/n8n-job-alerts.png",
      demo: undefined,
      techStack: [
        { icon: <SiN8N className={iconClass} />, name: "n8n" },
        { icon: <FaDocker className={iconClass} />, name: "Docker" },
        {
          icon: <SiGoogle className={iconClass} />,
          name: "Google Sheets & Gmail API",
        },
        { icon: <FaHtml5 className={iconClass} />, name: "HTML Parsing / RSS" },
      ],
    },
    */
    {
      name: "GymFlow",
      shortName: "gymflow",
      description:
        "Add a short description of GymFlow and the problem it helps users solve.",
      image: "/workoutLog.png",
      demo: undefined,
      github: undefined,
      techStack: [
        { icon: <SiReact className={iconClass} />, name: "React Native" },
        { icon: <SiExpo className={iconClass} />, name: "Expo" },
        { icon: <SiSupabase className={iconClass} />, name: "Supabase" },
      ],
    },
  ];

  return (
    <div id="projects" className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-16 gap-y-28 mt-10">
        {projects.map((item) => (
          <div
            className="m-4 lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.name}
          >
            <PinContainer title={item.github ?? item.name} href={item.github}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[30vh] lg:h-[30vh] mb-10 rounded-xl bg-white/[.03]">
                {item.image ? (
                  <Image
                    fill
                    src={item.image}
                    alt="cover"
                    sizes="(min-width: 640px) 384px, 80vw"
                    className="z-10 object-contain p-3"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-900 to-purple-950">
                    <div className="absolute inset-6 rounded-xl border border-white/10 bg-white/[.04]" />
                    <div className="absolute left-10 right-10 top-14 h-3 rounded-full bg-blue-400/40" />
                    <div className="absolute left-10 top-24 h-3 w-2/5 rounded-full bg-white/20" />
                    <div className="absolute left-10 right-20 top-32 h-3 rounded-full bg-white/10" />
                  </div>
                )}
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

              <div className="flex flex-col gap-4 items-center justify-between mt-7 mb-3">
                <div className="flex flex-wrap gap-4 items-center">
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

                  {item.github && (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-all"
                    >
                      <FaGithub /> Code
                    </a>
                  )}

                  {item.shortName && (
                    <Link
                      href={`/project/${item.shortName}`}
                      className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-all"
                    >
                      <FaLocationArrow /> Learn
                    </Link>
                  )}
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
