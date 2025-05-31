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
        "A platform where users can create an account, post blogs, and explore others' content. Each blog is viewable on click.",
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
        "A web app to manage job applications. Track your progress, log new applications, and view all in one dashboard.",
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
    <section className="w-full bg-background py-16 px-4 md:px-0 text-text">
      <div className="max-w-4xl mx-auto">
        <h1
          id="projects"
          className="text-3xl md:text-4xl font-semibold mb-10 text-center md:text-left"
        >
          Personal Projects
        </h1>
        <div className="space-y-6">
          {myProjects.map((project, index) => (
            <div
              key={index}
              className="rounded-2xl border border-border bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h2 className="text-xl font-semibold text-accent">
                  {project.name}
                </h2>
              </div>
              <p className="text-md md:text-xl text-secondaryAccent mt-2 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-3 mt-4 text-accent text-xl">
                {project.techStack.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex items-center justify-center p-2 rounded-md bg-accent/10"
                    title={tech.name}
                  >
                    {tech.icon}
                  </div>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 inline-flex items-center gap-2 mt-6 text-xl font-medium text-white bg-secondaryaccent hover:bg-accent px-4 py-2 rounded-lg transition-colors"
              >
                <FaGithub />
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
