"use server";
import { FaDocker, FaGithub, FaHtml5, FaArrowLeft } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiOpenai,
  SiN8N,
  SiGoogle,
} from "react-icons/si";
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const iconClass =
  "text-blue-500 group-hover:text-purple transition-colors duration-200 text-xl";

const projects: Record<string, Project> = {
  "fantasy-hub": {
    name: "Fantasy Hub",
    tagline: "AI-powered FPL decisions, simplified.",
    description:
      "An AI-powered Fantasy Premier League companion that helps users make smarter FPL decisions using player insights, comparisons, and advanced stats. Built to take the guesswork out of weekly transfers, captain picks, and squad selection.",
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
        description:
          "Get intelligent, AI-generated analysis for any Fantasy Premier League player. Insights include form, points-per-game, expected goals & assists, and captain score recommendations.",
      },
      {
        title: "Player Comparisons",
        description:
          "Compare two or more players side-by-side, including key stats, form trends, ownership %, and AI-driven recommendations.",
      },
      {
        title: "Advanced Stats",
        description:
          "Beyond points — view xG, xA, xGI, ICT Index, Influence, Creativity, Threat, clean sheets, and more per 90 minutes for deeper analysis.",
      },
      {
        title: "Real-time Data",
        description:
          "Syncs with the official FPL API to fetch live player stats, fixtures, and transfers, ensuring your AI insights and comparisons are always up-to-date.",
      },
    ],
    challenges:
      "The main challenge was avoiding unnecessary OpenAI API calls and not wasting credits. The solution was to cache/save AI insights in a Supabase table and check the database first. If a response exists for the current gameweek, it’s reused otherwise, the OpenAI API is called to generate a new insight.",

    learnings:
      "Gained expertise in building server-client hybrid apps with Next.js, integrating AI APIs safely in production, designing UX around data uncertainty, and managing complex real-time sports data efficiently.",
  },

  "job-alerts-workflow": {
    name: "Automated Job Alerts",
    tagline: "No more doomscrolling job boards. Let the jobs come to you.",
    description:
      "A fully automated workflow built in n8n that scrapes job listings from Jobindex and IT Jobbank daily, filters them by role and experience level, deduplicates against a Google Sheets log, and sends a clean HTML email digest with only fresh listings.",
    image: "/n8n-Gif.gif",
    demo: undefined,
    github: undefined,
    techStack: [
      { icon: <SiN8N className={iconClass} />, name: "n8n" },
      { icon: <FaDocker className={iconClass} />, name: "Docker" },
      {
        icon: <SiGoogle className={iconClass} />,
        name: "Google Sheets & Gmail API",
      },
      { icon: <FaHtml5 className={iconClass} />, name: "HTML Parsing / RSS" },
    ],
    features: [
      {
        title: "Multi-source RSS Ingestion",
        description:
          "Pulls jobs from Jobindex and IT Jobbank RSS feeds across multiple keyword queries, then merges and deduplicates results.",
      },
      {
        title: "Smart Deduplication",
        description:
          "Uses Google Sheets as a persistent log. Each run checks new listings against previously seen links and only passes through genuinely new jobs.",
      },
      {
        title: "Daily Email Digest",
        description:
          "Sends a styled HTML email via Gmail API listing each new job with title, company, location, date, and a direct link button.",
      },
      {
        title: "Self-hosted on Docker",
        description:
          "The entire n8n instance runs locally in Docker, keeping credentials and workflow data fully private with no cloud dependency.",
      },
    ],
    learnings:
      "Learned how to architect stateful automation workflows without a database — using a spreadsheet as a lightweight persistence layer works surprisingly well for this use case. Also got hands-on with Google OAuth flows and the Gmail API inside n8n.",
  },
};

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

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ shortName: string }>;
}) {
  const { shortName } = await params;
  const project = projects[shortName];

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black-100 text-white px-6 py-16 max-w-4xl mx-auto">
      {/* Back button */}
      <Link
        href="/#projects"
        className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition mb-10 group w-fit"
      >
        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
        Back
      </Link>

      {/* Header */}
      <div className="mb-10">
        <p className="text-blue-500 text-sm font-semibold uppercase tracking-widest mb-2">
          Project
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-3">{project.name}</h1>
        <p className="text-white/50 text-lg italic">{project.tagline}</p>
      </div>

      {/* Cover image */}
      <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-12 border border-white/10">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className={`object-cover ${project.name === "Automated Job Alerts" ? "object-center" : "object-top"}`}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Description */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-3 text-purple">Overview</h2>
        <p className="text-white/70 leading-relaxed">{project.description}</p>
      </section>

      {/* Tech Stack */}
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

      {/* Features */}
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

      {/* Challenges */}
      {project.challenges && (
        <section className="mb-16">
          <h2 className="text-xl font-semibold mb-3 text-purple">Challenges</h2>
          <p className="text-white/70 leading-relaxed">{project.challenges}</p>
        </section>
      )}

      {/* Learnings */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-3 text-purple">
          What I Learned
        </h2>
        <p className="text-white/70 leading-relaxed">{project.learnings}</p>
      </section>

      {/* CTA buttons */}
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
