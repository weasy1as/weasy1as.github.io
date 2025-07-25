import Image from "next/image";
import React from "react";
import { FaGithub, FaUserLock } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiPrisma,
  SiPostgresql,
} from "react-icons/si";

const Projects = () => {
  const myProjects = [
    {
      name: "Fantasy Hub",
      description:
        "Make smarter FPL decisions using AI-driven insights, player comparisons, and advanced stats.",
      image: "/fantasy-hub.png",
      demo: "https://fantasy-hub-seven.vercel.app/",
      github: "https://github.com/weasy1as/FantasyHub",
      techStack: [
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        { icon: <SiPrisma />, name: "Prisma" },
        { icon: <SiPostgresql />, name: "Supabase PostgreSQL" },
      ],
    },
    {
      name: "SteelBuilt",
      description:
        "SteelBuilt is a full-stack fitness tracking application that allows users to log workouts, set personal bests, track progress, and define fitness goals—all in a website.",
      image: "/steelbuilt.png",
      demo: "https://steel-built.vercel.app",
      github: "https://github.com/weasy1as/SteelBuilt",
      techStack: [
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <FaUserLock />, name: "NextAuth" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        { icon: <SiPrisma />, name: "Prisma" },
        { icon: <SiPostgresql />, name: "PostgreSQL" },
      ],
    },
    /*
    {
      name: "Blog-World",
      description:
        "Create an account, post blogs, and explore others' content in a clean and social layout.",
      image: "/images/blog-world.png",
      demo: "https://blog-world.vercel.app",
      github: "https://github.com/weasy1as/Blog-World",
      techStack: [
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        { icon: <SiPrisma />, name: "Prisma" },
        { icon: <SiPostgresql />, name: "PostgreSQL" },
      ],
    },
    
    /*{
      name: "Job Tracker",
      description:
        "Track your job applications, view them in a dashboard, and log progress easily.",
      image: "/images/job-tracker.png",
      demo: "https://job-tracker.vercel.app",
      github: "https://github.com/weasy1as/JobTracker",
      techStack: [
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        { icon: <SiPrisma />, name: "Prisma" },
        { icon: <SiPostgresql />, name: "PostgreSQL" },
      ],
    },
    */
  ];

  return (
    <section className="w-full bg-background py-16 px-4 text-text">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Projects</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {myProjects.map((project, index) => (
            <div
              key={index}
              className="border border-black rounded-3xl p-9 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all bg-white"
            >
              <Image
                height={300}
                width={300}
                src={project.image}
                alt={`${project.name} screenshot`}
                className="rounded-2xl h-56 w-full object-cover mb-4 shadow-lg"
              />
              <h2 className="text-xl font-bold mb-2">{project.name}</h2>
              <p className="text-gray-600 text-sm mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {project.techStack.map((tech, i) => (
                  <div
                    key={i}
                    className="bg-gray-100 p-2 rounded-md text-lg"
                    title={tech.name}
                  >
                    {tech.icon}
                  </div>
                ))}
              </div>

              <div className="flex gap-4 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border px-4 py-2 rounded-full text-sm font-medium bg-black text-white transition"
                >
                  <FaGithub size={20} /> Github
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-black px-4 py-2 rounded-full text-sm text-black font-medium hover:bg-black hover:text-black transition"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
