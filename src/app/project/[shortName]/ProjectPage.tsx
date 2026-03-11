"use client";

import { useRouter } from "next/navigation";
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
          "Ask natural language questions about any FPL player and get data-driven answers powered by OpenAI.",
      },
      {
        title: "Player Comparisons",
        description:
          "Side-by-side stat comparisons to help you choose between two players before a deadline.",
      },
      {
        title: "Advanced Stats",
        description:
          "Beyond points — xG, xA, form, fixture difficulty, and ownership trends all in one place.",
      },
      {
        title: "Real-time Data",
        description:
          "Live sync with the official FPL API via Supabase for always up-to-date player and fixture data.",
      },
    ],
    challenges:
      "The main challenge was prompt engineering the AI to give accurate, concise FPL advice without hallucinating stats. This required building a structured context layer that always feeds real FPL data alongside the user's question before sending it to the model.",
    learnings:
      "Deepened understanding of retrieval-augmented generation patterns, Next.js server components, and how to design UX around AI uncertainty — like when to show confidence indicators.",
  },

  "job-alerts-workflow": {
    name: "Automated Job Alerts",
    tagline: "No more doomscrolling job boards. Let the jobs come to you.",
    description:
      "A fully automated workflow built in n8n that scrapes job listings from Jobindex and IT Jobbank daily, filters them by role and experience level, deduplicates against a Google Sheets log, and sends a clean HTML email digest with only fresh listings.",
    image: "/n8n-job-alerts.png",
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
    challenges:
      "RSS feeds from Jobindex cap results at 20 items per query. The workaround was splitting searches across multiple narrower keyword queries and merging them — relying on the deduplication layer to handle any overlaps cleanly.",
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
  challenges: string;
  learnings: string;
};

// replace useParams with a prop
export default function ProjectPage({ shortName }: { shortName: string }) {
  const router = useRouter();
  const project = projects[shortName];

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white gap-4">
        <h1 className="text-3xl font-bold">Project not found</h1>
        <Link href="/" className="text-blue-400 hover:underline">
          ← Back home
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black-100 text-white px-6 py-16 max-w-4xl mx-auto">
      {/* Back button */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition mb-10 group"
      >
        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
        Back
      </button>

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
          className="object-cover object-top"
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
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-3 text-purple">Challenges</h2>
        <p className="text-white/70 leading-relaxed">{project.challenges}</p>
      </section>

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
