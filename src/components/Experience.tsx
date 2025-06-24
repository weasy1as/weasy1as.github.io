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
    <section className="w-full bg-background py-16 px-4 text-text">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          Work Experience
        </h1>
        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-3xl p-6 shadow-md bg-white hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-semibold text-accent">
                  {exp.company}
                </h2>
                <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">
                  {exp.duration}
                </span>
              </div>

              <p className="text-md font-medium text-black mb-2">
                {exp.position}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {exp.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">
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
