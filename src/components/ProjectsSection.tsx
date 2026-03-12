import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

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
    description: "A full-stack marketplace with real-time inventory, Stripe payments, and admin dashboard.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "https://github.com",
    live: "https://example.com",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    title: "Network Routing Protocol Implementation",
    description: "An intelligent conversational AI with context memory and multi-model support.",
    tech: ["TypeScript", "OpenAI", "Redis", "Docker"],
    github: "https://github.com",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
  },
  {
    title: "Penn NLP Lab (Multimodal Large Language Models QA)",
    description: "Beautiful real-time weather visualization with 7-day forecasts and interactive maps.",
    tech: ["JSON", "GLB", "Babylon.js", "MLLMs"],
    github: "https://github.com/mia373/penn-mllm-benchmark",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
  },
  {
    title: "Home Task Mobile AI Assistant",
    description: "Kanban-style project manager with drag-and-drop, real-time collaboration, and analytics.",
    tech: ["Next.js", "Supabase", "Framer Motion"],
    github: "https://github.com",
    live: "https://example.com",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
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
