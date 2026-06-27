import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaGithub } from "react-icons/fa";
import { SiExpo, SiReact, SiSupabase } from "react-icons/si";

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
  gallery: {
    src: string;
    alt: string;
  }[];
  github: string;
  techStack: TechItem[];
  features: Feature[];
  challenges: string;
  learnings: string;
};

// TODO: Replace the placeholder copy below with the final GymFlow project details.
const project: Project = {
  name: "GymFlow",
  tagline: "A focused workout tracker built for consistent strength progress.",
  description:
    "GymFlow is a mobile workout companion for everyday lifters who want a simple way to plan sessions, log sets and track their strength progress. It replaces scattered notes and complicated fitness apps with a focused training log that keeps workout history, personal bests and progression insights in one place.",
  image: "/workoutLog.png",
  gallery: [
    {
      src: "/workoutSession.png",
      alt: "GymFlow active workout session screen",
    },
    {
      src: "/progressScreen.png",
      alt: "GymFlow workout progress screen",
    },
  ],
  github: "https://github.com/weasy1as/FitnessApp",
  techStack: [
    { icon: <SiReact className={iconClass} />, name: "React Native" },
    { icon: <SiExpo className={iconClass} />, name: "Expo" },
    { icon: <SiSupabase className={iconClass} />, name: "Supabase" },
  ],
  features: [
    {
      title: "Guided Workout Logging",
      description:
        "Build workouts from an exercise catalogue, record sets, weights and repetitions, and keep active sessions saved between app launches.",
    },
    {
      title: "Progress Tracking",
      description:
        "Explore exercise-level strength trends across multiple timeframes and highlight new personal records from completed workouts.",
    },
    {
      title: "Smart Training Guidance",
      description:
        "See previous performance during each exercise and receive progressive-overload suggestions based on recent training history.",
    },
    {
      title: "Synced Workout History",
      description:
        "Store completed workouts securely with Supabase while supporting local-first logging and cross-device favorites.",
    },
  ],
  challenges:
    "The main challenge was guiding Codex to behave consistently and produce exactly what I wanted. I used specific instructions and Plan Mode to align expectations before implementation, while keeping prompts focused to avoid wasting tokens or hitting usage limits.",

  learnings:
    "I learned how to collaborate effectively with an AI coding agent by providing clear context, defining constraints and breaking features into manageable tasks. I also gained a better understanding of how Codex uses project instructions, planning workflows and token limits.",
};
export default function GymFlowPage() {
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

      <div className="relative w-full h-[32rem] md:h-[42rem] rounded-2xl overflow-hidden mb-6 border border-white/10 bg-white">
        <Image
          src={project.image}
          alt="GymFlow workout log screen"
          fill
          priority
          sizes="(min-width: 896px) 848px, calc(100vw - 48px)"
          className="object-contain"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {project.gallery.map((image) => (
          <div
            key={image.src}
            className="relative h-[32rem] md:h-[36rem] rounded-2xl overflow-hidden border border-white/10 bg-white"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 768px) 412px, calc(100vw - 48px)"
              className="object-contain"
            />
          </div>
        ))}
      </div>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-3 text-purple">Overview</h2>
        <p className="text-white/70 leading-relaxed">{project.description}</p>
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
          {project.features.map((feature, index) => (
            <div
              key={index}
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
        <h2 className="text-xl font-semibold mb-3 text-purple">Challenges</h2>
        <p className="text-white/70 leading-relaxed">{project.challenges}</p>
      </section>

      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-3 text-purple">
          What I Learned
        </h2>
        <p className="text-white/70 leading-relaxed">{project.learnings}</p>
      </section>

      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-foreground text-background px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-all w-fit"
      >
        <FaGithub />
        View Code
      </a>
    </main>
  );
}
