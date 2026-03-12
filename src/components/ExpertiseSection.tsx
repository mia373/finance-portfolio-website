import { motion } from "framer-motion";
import { Database, RefreshCw, Users, TrendingUp, Shield, Lightbulb } from "lucide-react";

const expertiseAreas = [
  {
    icon: Database,
    title: "ERP Systems",
    description:
      "End-to-end ERP implementations including SAP, Oracle, and Microsoft Dynamics — from selection and design through go-live and hypercare.",
    skills: ["SAP S/4HANA", "Oracle Cloud", "D365 Finance", "System Integration"],
  },
  {
    icon: RefreshCw,
    title: "Process Improvement",
    description:
      "Redesigning finance processes to eliminate waste, reduce cycle times, and unlock capacity across Order-to-Cash, Procure-to-Pay, and Record-to-Report.",
    skills: ["Lean Six Sigma", "Process Mining", "Automation", "KPI Design"],
  },
  {
    icon: Users,
    title: "Change Management",
    description:
      "Leading people through transformation with structured change frameworks, stakeholder engagement, and sustainable adoption strategies.",
    skills: ["Stakeholder Mapping", "Training Design", "Communication", "Adoption Metrics"],
  },
  {
    icon: TrendingUp,
    title: "Financial Planning & Analysis",
    description:
      "Building modern FP&A capabilities with rolling forecasts, driver-based planning, and real-time management reporting.",
    skills: ["Budgeting", "Forecasting", "Business Partnering", "Data Visualisation"],
  },
  {
    icon: Shield,
    title: "Controls & Compliance",
    description:
      "Embedding robust internal controls and ensuring regulatory compliance across transformed finance operating models.",
    skills: ["SOX Compliance", "Internal Audit", "Risk Management", "Policy Design"],
  },
  {
    icon: Lightbulb,
    title: "Target Operating Model",
    description:
      "Designing future-state finance functions — organisational structures, shared services, centres of excellence, and outsourcing strategies.",
    skills: ["Org Design", "Shared Services", "CoE Setup", "Outsourcing"],
  },
];

const ExpertiseCard = ({
  area,
  index,
}: {
  area: (typeof expertiseAreas)[0];
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    className="glass-card p-6 hover-lift group"
  >
    <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
      <area.icon size={20} className="text-primary" />
    </div>
    <h3 className="font-display text-xl mb-2">{area.title}</h3>
    <p className="text-white/70 text-sm leading-relaxed mb-4">
      {area.description}
    </p>
    <div className="flex flex-wrap gap-2">
      {area.skills.map((skill) => (
        <span
          key={skill}
          className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const ExpertiseSection = () => (
  <section id="expertise" className="py-24">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <p className="text-primary text-sm tracking-widest uppercase mb-2">
          What I do best
        </p>
        <h2 className="font-display text-4xl sm:text-5xl">Expertise</h2>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {expertiseAreas.map((area, i) => (
          <ExpertiseCard key={area.title} area={area} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default ExpertiseSection;
