import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Finance Transformation Director",
    company: "Global Consulting Firm",
    period: "2021 — Present",
    description:
      "Leading large-scale finance transformation programmes across FTSE 100 and Fortune 500 clients. Directing ERP implementations, operating model redesigns, and shared services transitions worth £50M+.",
    highlights: ["SAP S/4HANA Migration", "Global SSC Setup", "Finance Vision & Roadmap"],
  },
  {
    role: "Senior Manager — Finance Advisory",
    company: "Big Four Professional Services",
    period: "2017 — 2021",
    description:
      "Managed cross-functional teams delivering process improvement, system selection, and change management programmes for multinational organisations.",
    highlights: ["Oracle Cloud Implementation", "R2R Process Redesign", "PMO Leadership"],
  },
  {
    role: "Finance Transformation Manager",
    company: "FTSE 250 Manufacturing Group",
    period: "2014 — 2017",
    description:
      "Drove internal finance modernisation — centralising transactional processing, introducing RPA, and building a best-in-class FP&A function.",
    highlights: ["RPA Deployment", "FP&A Centre of Excellence", "Controls Automation"],
  },
  {
    role: "Management Consultant",
    company: "Boutique Strategy Consultancy",
    period: "2011 — 2014",
    description:
      "Delivered finance strategy and cost optimisation engagements for mid-market clients across financial services and retail sectors.",
    highlights: ["Cost Reduction", "Finance Benchmarking", "Target Operating Model"],
  },
  {
    role: "Finance Analyst",
    company: "International Bank",
    period: "2008 — 2011",
    description:
      "Started career in financial reporting and analysis, developing deep expertise in management accounting, consolidation, and regulatory reporting.",
    highlights: ["Management Reporting", "Consolidation", "Regulatory Returns"],
  },
];

const TimelineItem = ({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="relative pl-10 pb-12 last:pb-0 group"
  >
    {/* Vertical line */}
    <div className="absolute left-[15px] top-0 bottom-0 w-px bg-border group-last:bg-gradient-to-b group-last:from-border group-last:to-transparent" />

    {/* Dot */}
    <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-secondary border-2 border-border flex items-center justify-center group-hover:border-primary transition-colors">
      <Briefcase size={14} className="text-primary" />
    </div>

    <div className="glass-card p-6 hover-lift">
      <span className="text-primary text-xs tracking-widest uppercase font-body">
        {exp.period}
      </span>
      <h3 className="font-display text-xl mt-1 mb-0.5">{exp.role}</h3>
      <p className="text-white/70 text-sm mb-3">{exp.company}</p>
      <p className="text-white/70 text-sm leading-relaxed mb-4">
        {exp.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {exp.highlights.map((h) => (
          <span
            key={h}
            className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
          >
            {h}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const ExperienceSection = () => (
  <section id="experience" className="py-24">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <p className="text-primary text-sm tracking-widest uppercase mb-2">
          Where I've been
        </p>
        <h2 className="font-display text-4xl sm:text-5xl">Experience</h2>
      </motion.div>
      <div className="max-w-2xl mx-auto">
        {experiences.map((exp, i) => (
          <TimelineItem key={exp.period} exp={exp} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
