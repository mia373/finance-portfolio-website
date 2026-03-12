import { motion } from "framer-motion";

interface Game {
  title: string;
  note: string;
  image: string;
}

const games: Game[] = [
  {
    title: "The Witcher 3",
    note: "Best storytelling in gaming. Geralt forever.",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=300&h=400&fit=crop",
  },
  {
    title: "Hollow Knight",
    note: "Art direction and exploration perfection.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&h=400&fit=crop",
  },
  {
    title: "Celeste",
    note: "Tight platforming with a beautiful message.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=300&h=400&fit=crop",
  },
  {
    title: "Elden Ring",
    note: "Open world done right. Miyazaki is a genius.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=400&fit=crop",
  },
];

const GamesShelf = () => (
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
    {games.map((game, i) => (
      <motion.div
        key={game.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: i * 0.1 }}
        className="glass-card overflow-hidden hover-lift group"
      >
        <div className="aspect-[3/4] overflow-hidden">
          <img
            src={game.image}
            alt={game.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
        <div className="p-3">
          <h4 className="font-display text-sm mb-1">{game.title}</h4>
          <p className="text-muted-foreground text-xs leading-relaxed">{game.note}</p>
        </div>
      </motion.div>
    ))}
  </div>
);

export default GamesShelf;
