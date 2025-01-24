import React from "react";
import { FaGithub } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiPrisma,
  SiPostgresql,
} from "react-icons/si";

const Projects = () => {
  const myProjects = [
    {
      name: "Blog-World",
      description:
        "A platform where users can create an account, share their thoughts by posting blogs, and explore content written by others. Users can view a blog when clicking on one.",
      link: "https://github.com/weasy1as/Blog-World",
      techStack: [
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        { icon: <SiPrisma />, name: "Prisma" },
        { icon: <SiPostgresql />, name: "PostgreSQL" },
        { icon: <FaGithub />, name: "GitHub" },
      ],
    },
    {
      name: "Job-tracker",
      description:
        "A web application designed to help users manage their job applications efficiently. Users can log in, keep track of their applications, and monitor their progress all in one dashboard.",
      link: "https://github.com/weasy1as/JobTracker",
      techStack: [
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        { icon: <SiPrisma />, name: "Prisma" },
        { icon: <SiPostgresql />, name: "PostgreSQL" },
        { icon: <FaGithub />, name: "GitHub" },
      ],
    },
  ];

  return (
    <div className="w-full flex flex-col items-center py-16 bg-background text-text px-6">
      <h1 className="font-bold text-4xl md:text-5xl mb-12 text-center">
        Personal Projects
      </h1>

      <div className="flex flex-col gap-10 w-full max-w-4xl">
        {myProjects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 p-6 border-l-4 border-accent bg-white shadow-lg rounded-lg hover:shadow-xl hover:scale-[1.03] transition-transform transform duration-200"
          >
            <a href={project.link}>
              <h2 className="text-2xl font-semibold text-accent">
                {project.name}
              </h2>
              <p className="text-lg text-secondaryAccent">
                {project.description}
              </p>
            </a>

            <div className="flex gap-4 items-center">
              <span className="font-semibold">Tech Used:</span>
              <div className="flex gap-2 text-accent">
                {project.techStack.map((tech, techIndex) => (
                  <span key={techIndex} className="text-2xl">
                    {tech.icon}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
