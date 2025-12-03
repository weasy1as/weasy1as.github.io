"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiPrisma,
  SiPostgresql,
  SiReact,
  SiSpringboot,
  SiSupabase,
  SiOpenai,
} from "react-icons/si";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const Projects = () => {
  const myProjects = [
    {
      name: "Fantasy Hub",
      description:
        "An AI-powered Fantasy Premier League companion that helps users make smarter FPL decisions using player insights, comparisons, and advanced stats.",
      image: "/fantasy-hub.png",
      demo: "https://fantasy-world-delta.vercel.app/",
      github: "https://github.com/weasy1as/FantasyWorld",
      techStack: [
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        { icon: <SiPrisma />, name: "Prisma" },
        { icon: <SiPostgresql />, name: "Supabase" },
        { icon: <SiOpenai />, name: "OpenAI API" },
      ],
    },
    {
      name: "AI Job Match",
      description:
        "A full-stack web app that uses AI to analyze and match resumes with job descriptions, highlighting skill gaps and providing tailored improvement suggestions.",
      image: "/aijobmatch.png",
      github: "https://github.com/weasy1as/aijobmatch",
      techStack: [
        { icon: <SiReact />, name: "React" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        { icon: <SiSpringboot />, name: "Spring Boot" },
        { icon: <SiPostgresql />, name: "PostgreSQL" },
        { icon: <SiSupabase />, name: "Supabase" },
        { icon: <SiOpenai />, name: "OpenAI API" },
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-background to-muted/30"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-accent font-semibold mb-2">
            Portfolio
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing my ability to design, develop,
            and deliver modern, scalable web applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {myProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <Card className="group h-full relative overflow-hidden rounded-3xl border-border/40 hover:shadow-lg transition-all duration-300">
                {/* Image */}
                <div className="relative w-full h-56 overflow-hidden rounded-t-3xl">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <CardContent className="p-6 flex flex-col gap-4">
                  <h2 className="text-2xl font-semibold text-foreground">
                    {project.name}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.techStack.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="flex items-center gap-1 px-3 py-1 text-xs"
                      >
                        {tech.icon}
                        {tech.name}
                      </Badge>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 mt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-all"
                    >
                      <FaGithub /> Code
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 border border-foreground text-foreground px-4 py-2 rounded-full text-sm font-medium hover:bg-foreground hover:text-background transition-all"
                      >
                        <FaExternalLinkAlt /> Demo
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
