import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface Painting {
  title: string;
  description?: string;
  image: string;
  span: string; // tailwind col-span
}

const paintings: Painting[] = [
  {
    title: "Golden Hour",
    description: "Oil on canvas, inspired by Mediterranean sunsets.",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=800&fit=crop",
    span: "sm:row-span-2",
  },
  {
    title: "Abstract Motion",
    description: "Acrylic pour technique exploring flow and color.",
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?w=600&h=400&fit=crop",
    span: "",
  },
  {
    title: "City Lights",
    description: "Watercolor interpretation of nighttime cityscapes.",
    image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=600&h=400&fit=crop",
    span: "",
  },
  {
    title: "Botanical Study",
    description: "Detailed pen and ink botanical illustration.",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&h=800&fit=crop",
    span: "sm:row-span-2",
  },
  {
    title: "Ocean Dreams",
    description: "Mixed media piece evoking deep sea tranquility.",
    image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=600&h=400&fit=crop",
    span: "",
  },
  {
    title: "Portrait in Blue",
    description: "Oil portrait study with cool-toned palette.",
    image: "https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=600&h=400&fit=crop",
    span: "",
  },
];

const PaintingsSection = () => {
  const [selected, setSelected] = useState<Painting | null>(null);

  return (
    <section id="paintings" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-primary text-sm tracking-widest uppercase mb-2">My art</p>
          <h2 className="font-display text-4xl sm:text-5xl">Paintings</h2>
        </motion.div>

        {/* Masonry grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px]">
          {paintings.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${p.span}`}
              onClick={() => setSelected(p)}
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="font-display text-lg">{p.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-3xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-10 right-0 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={24} />
              </button>
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-auto max-h-[70vh] object-contain rounded-xl"
              />
              <div className="mt-4">
                <h3 className="font-display text-2xl">{selected.title}</h3>
                {selected.description && (
                  <p className="text-muted-foreground mt-1">{selected.description}</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PaintingsSection;
