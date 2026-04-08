import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

import search from "@/assets/search.png";
import glb from "@/assets/glb.png";
import project2 from "@/assets/project2.jpg";
import hometasker from "@/assets/hometasker.png";
import aicoach from "@/assets/aicoach.png";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "ASC 606 Contract Reviewer",
    description: "A full-stack revenue contract analyzer.",
    tech: ["Vite", "TypeScript", "React", "Tailwind CSS"],
    github: "https://github.com/mia373/revenue-contract-analyzer",
    //live: "https://example.com",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    title: "Philadelphia Data Interface",
    description: "A Java REST API and React dashboard for visualizing Philadelphia's COVID, property, and population data by ZIP code.",
    tech: ["Java", "Javalin", "React", "TypeScript", "Recharts/React Leaflet", "JUnit 5"],
    github: "https://github.com/mia373/philadelphia-data-interface",
    //ive: "https://example.com",
    image: project2,
  },
  {
    title: "Distributed Search Engine",
    description: "A search engine in C++ using a custom Chord Distributed Hash Table (DHT) to route queries across dynamic networks.",
    tech: ["C++", "Distributed Systems", "Network Routing", "OpenSSL"],
    github: "https://github.com/mia373/distributed-search-engine",
    image: search,
  },
  {
    title: "Penn NLP Lab Assistance",
    description: "Collaborated with PhD researchers at the University of Pennsylvania to curate a benchmark dataset for evaluating Multimodal Large Language Models (MLLMs) on 3D scene.",
    tech: ["JSON", "GLB", "Babylon.js", "MLLMs"],
    github: "https://github.com/mia373/penn-mllm-benchmark",
    image: glb,
  },
  {
    title: "AI Career Coach",
    description: "A multi-agent AI coach system with 4 specialized agents using LangGraph.",
    tech: ["Python", "LangGraph", "LangChain", "Google Gemini LLM", "Serper API"],
    github: "https://github.com/mia373/ai-career-coach",
    image: aicoach,
  },
  {
    title: "AI-Assisted Home Tasker",
    description: "A gamified household task manager - earn points for chores, compete with your housemates.",
    tech: ["React Native", "Supabase", "Gemini API", "Expo", "Claude Code"],
    github: "https://github.com/mia373/tidy-up",
    //live: "https://example.com",
    image: hometasker,
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="glass-card overflow-hidden hover-lift group"
  >
    <div className="aspect-video overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
    </div>
    <div className="p-6">
      <h3 className="font-display text-xl mb-2">{project.title}</h3>
      <p className="text-white/70 text-sm mb-4 leading-relaxed">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((t) => (
          <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <Github size={14} /> Code
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ExternalLink size={14} /> Live
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const ProjectsSection = () => (
  <section id="projects" className="py-24">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <p className="text-primary text-sm tracking-widest uppercase mb-2">What I've built</p>
        <h2 className="font-display text-4xl sm:text-5xl">Projects</h2>
      </motion.div>
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
