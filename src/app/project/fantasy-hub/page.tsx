import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaGithub, FaLocationArrow } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiOpenai,
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

type Project = {
  name: string;
  tagline: string;
  description: string;
  image: string;
  demo?: string;
  github?: string;
  techStack: TechItem[];
  features: Feature[];
  challenges?: string;
  learnings: string;
};

const project: Project = {
  name: "Fantasy Hub",
  tagline: "AI-powered FPL decisions, simplified.",
  description: "An AI-powered Fantasy Premier League companion...",
  image: "/fantasyLab.png",
  demo: "https://fantasy-lab-inky.vercel.app/",
  github: "https://github.com/weasy1as/FantasyLab",
  techStack: [
    { icon: <SiNextdotjs className={iconClass} />, name: "Next.js" },
    { icon: <SiTailwindcss className={iconClass} />, name: "Tailwind CSS" },
    { icon: <SiPostgresql className={iconClass} />, name: "Supabase" },
    { icon: <SiOpenai className={iconClass} />, name: "OpenAI API" },
  ],
  features: [
    {
      title: "AI Player Insights",
      description: "Get intelligent, AI-generated analysis...",
    },
    {
      title: "Player Comparisons",
      description: "Compare two or more players side-by-side...",
    },
    {
      title: "Advanced Stats",
      description: "Beyond points — view xG, xA, xGI...",
    },
    {
      title: "Real-time Data",
      description: "Syncs with the official FPL API...",
    },
  ],
  challenges:
    "Avoiding unnecessary OpenAI API calls by caching insights in Supabase.",
  learnings: "Gained expertise in server-client hybrid apps with Next.js...",
};

export default function FantasyHubPage() {
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

      <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-12 border border-white/10">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-3 text-purple">Overview</h2>
        <p className="text-white/70 leading-relaxed">{project.description}</p>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4 text-purple">Tech Stack</h2>
        <div className="flex flex-wrap gap-3">
          {project.techStack.map((tech, i) => (
            <div
              key={i}
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
          {project.features.map((feature, i) => (
            <div
              key={i}
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

      {project.challenges && (
        <section className="mb-16">
          <h2 className="text-xl font-semibold mb-3 text-purple">Challenges</h2>
          <p className="text-white/70 leading-relaxed">{project.challenges}</p>
        </section>
      )}

      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-3 text-purple">
          What I Learned
        </h2>
        <p className="text-white/70 leading-relaxed">{project.learnings}</p>
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
