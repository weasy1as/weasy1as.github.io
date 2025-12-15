"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Badge } from "@/components/ui/badge";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  const data = [
    {
      title: "2024",
      content: (
        <div
          id="experience"
          className="bg-neutral-900 border border-white/[0.1] rounded-2xl p-6 shadow-lg"
        >
          <div className="flex items-center gap-3 mb-3">
            <FaBriefcase className="text-purple text-xl" />
            <h3 className="text-xl font-semibold text-white">
              Rotoy — Software Developer Intern
            </h3>
          </div>

          <p className="text-sm text-neutral-400 mb-4">
            Duration: <span className="text-neutral-300">6 Months</span>
          </p>

          <p className="text-neutral-300 leading-relaxed mb-5">
            Contributed to a web-based gaming platform and helped design and
            build their landing page. Worked in an agile Scrum environment,
            actively participating in sprints, stand-ups, and code reviews.
          </p>

          <div className="flex flex-wrap gap-2">
            {["Next.js", "Prisma", "SQL"].map((tech) => (
              <Badge
                key={tech}
                className="bg-white/[0.05] text-neutral-300 border border-white/[0.1]"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div className="bg-neutral-900 border border-white/[0.1] rounded-2xl p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-3">
            <FaBriefcase className="text-purple text-xl" />
            <h3 className="text-xl font-semibold text-white">
              Nybilspris — Web Developer Intern
            </h3>
          </div>

          <p className="text-sm text-neutral-400 mb-4">
            Duration: <span className="text-neutral-300">1 Month</span>
          </p>

          <p className="text-neutral-300 leading-relaxed mb-5">
            Built a data management dashboard with full CRUD functionality and
            implemented Google authentication using NextAuth. Collaborated
            closely with senior developers to improve UX and performance.
          </p>

          <div className="flex flex-wrap gap-2">
            {["Next.js", "NextAuth", "Prisma"].map((tech) => (
              <Badge
                key={tech}
                className="bg-white/[0.05] text-neutral-300 border border-white/[0.1]"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="experience" className="w-full">
      <Timeline data={data} />
    </section>
  );
};

export default Experience;
