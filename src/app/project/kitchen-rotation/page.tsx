import Image from "next/image";
import Link from "next/link";
import {
  FaArrowLeft,
  FaDocker,
  FaGithub,
  FaJava,
  FaLocationArrow,
} from "react-icons/fa";
import { GrHeroku } from "react-icons/gr";
import {
  SiNextdotjs,
  SiPostgresql,
  SiSupabase,
  SiSpringboot,
  SiTailwindcss,
} from "react-icons/si";

const iconClass =
  "text-blue-500 group-hover:text-purple transition-colors duration-200 text-xl";

type Feature = {
  title: string;
  description: string;
};

type TechItem = {
  icon: React.ReactNode;
  name: string;
};

const project = {
  name: "Kitchen Rotation",
  tagline: "A fair, configurable cleaning schedule for every household.",
  github: "https://github.com/weasy1as/Household-App",
  image: "/Household.png",
  demo: "https://household-app-green-nu.vercel.app/",
  description:
    "Kitchen Rotation is a full-stack web application designed to help households organize and manage their kitchen cleaning schedule. Household members can share responsibilities through a configurable rotation system, making it easier to keep track of whose turn it is to clean.",
  techStack: [
    { icon: <SiNextdotjs className={iconClass} />, name: "Next.js" },
    { icon: <SiTailwindcss className={iconClass} />, name: "Tailwind CSS" },
    { icon: <FaJava className={iconClass} />, name: "Java" },
    { icon: <SiSpringboot className={iconClass} />, name: "Spring Boot" },
    { icon: <SiPostgresql className={iconClass} />, name: "PostgreSQL" },
    { icon: <SiSupabase className={iconClass} />, name: "Supabase Auth" },
    { icon: <FaDocker className={iconClass} />, name: "Docker" },
    { icon: <GrHeroku className={iconClass} />, name: "Heroku" },
  ] satisfies TechItem[],
  features: [
    {
      title: "Household Management",
      description:
        "Create a household, invite registered users by email, and manage household membership from one place.",
    },
    {
      title: "Configurable Rotation",
      description:
        "Reorder active members and configure both the rotation start date and the member who starts the schedule.",
    },
    {
      title: "Automatic Schedule Generation",
      description:
        "Generate a cleaning schedule from the household's active members and current rotation settings.",
    },
    {
      title: "Secure Full-Stack Architecture",
      description:
        "Use Supabase authentication and JWT access tokens to identify users while the Next.js frontend communicates with a Spring Boot REST API.",
    },
  ] satisfies Feature[],
};

export default function KitchenRotationPage() {
  return (
    <main className="min-h-screen bg-black-100 text-white px-6 py-16 max-w-4xl mx-auto">
      <Link
        href="/#projects"
        className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition mb-10 group w-fit"
      >
        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
        Back
      </Link>

      <div className="mb-10">
        <p className="text-blue-500 text-sm font-semibold uppercase tracking-widest mb-2">
          Project
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-3">{project.name}</h1>
        <p className="text-white/50 text-lg italic">{project.tagline}</p>
      </div>

      {/* Hero Image */}
      <div className="relative w-full h-[32rem] md:h-[42rem] rounded-2xl overflow-hidden mb-12 border border-white/10 bg-white">
        <Image
          src={project.image}
          alt={project.name}
          fill
          priority
          sizes="(min-width: 896px) 848px, calc(100vw - 48px)"
          className="object-contain p-4 md:p-6"
        />
      </div>
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-3 text-purple">Overview</h2>
        <p className="text-white/70 leading-relaxed">{project.description}</p>
        <p className="text-white/70 leading-relaxed mt-4">
          The application is built with Next.js and TypeScript for the frontend,
          Spring Boot and Java for the backend, and Supabase for authentication
          and PostgreSQL database hosting. It is deployed with Vercel hosting
          the frontend and Heroku hosting the backend.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4 text-purple">Tech Stack</h2>
        <div className="flex flex-wrap gap-3">
          {project.techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-2 border border-white/10 bg-white/5 rounded-full px-4 py-2 text-sm"
            >
              {tech.icon}
              <span className="text-white/80">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-6 text-purple">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {project.features.map((feature) => (
            <div
              key={feature.title}
              className="border border-white/10 bg-white/5 rounded-xl p-5 hover:border-blue-500/40 transition"
            >
              <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-3 text-purple">Project Goal</h2>
        <p className="text-white/70 leading-relaxed">
          Kitchen Rotation was built for my family&apos;s needs and aims to
          provide a simple, practical, and accessible way for households to
          distribute cleaning responsibilities. It also serves as an opportunity
          to develop and deploy a complete full-stack application using modern
          web technologies, relational database design, authentication, REST API
          development, and cloud hosting.
        </p>
      </section>

      <div className="flex flex-wrap gap-3">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-foreground text-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:bg-foreground hover:text-background transition-all"
          >
            <FaLocationArrow color="#CBACF9" />
            Live Demo
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-foreground text-background px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-all"
          >
            <FaGithub />
            View Code
          </a>
        )}
      </div>
    </main>
  );
}
