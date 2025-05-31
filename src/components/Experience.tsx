import React from "react";

const Experience = () => {
  const experiences = [
    {
      company: "Rotoy",
      position: "Intern",
      duration: "6 Months",
      techStack: ["Next.js", "Prisma", "SQL"],
      description:
        "Contributed to the startup by developing their landing page and assisting in building a web-based gaming platform. Worked in an agile team using Scrum practices.",
    },
    {
      company: "Nybilspris",
      position: "Intern",
      duration: "1 Month",
      techStack: ["Next.js", "NextAuth", "Prisma"],
      description:
        "Developed a data management system using CRUD operations and integrated Google authentication via NextAuth.",
    },
  ];

  return (
    <section className="w-full bg-background py-16 px-4 md:px-0 text-text">
      <div className="max-w-3xl mx-auto">
        <h1
          id="Experience"
          className="text-3xl md:text-4xl font-semibold mb-10 text-center md:text-center"
        >
          Work Experience
        </h1>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="rounded-2xl border border-border bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h2 className="text-xl font-semibold text-accent">
                  {exp.company}
                </h2>
                <span className="text-sm text-muted">{exp.duration}</span>
              </div>
              <p className="text-base font-medium mt-1">{exp.position}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {exp.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-md md:text-xl text-secondaryAccent mt-4 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
