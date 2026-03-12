import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import WorldMap from "./WorldMap";
import GamesShelf from "./GamesShelf";

const HobbiesSection = () => (
  <section id="hobbies" className="py-24">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <p className="text-primary text-sm tracking-widest uppercase mb-2">Beyond the code</p>
        <h2 className="font-display text-4xl sm:text-5xl">Hobbies</h2>
      </motion.div>

      {/* Travel */}
      <ScrollReveal className="mb-16">
        <h3 className="font-display text-2xl mb-6 flex items-center gap-2">
          🌍 Places I've Explored
        </h3>
        <WorldMap />
      </ScrollReveal>

      {/* Games */}
      <ScrollReveal delay={0.15}>
        <h3 className="font-display text-2xl mb-6 flex items-center gap-2">
          🎮 Favorite Games
        </h3>
        <GamesShelf />
      </ScrollReveal>
    </div>
  </section>
);

export default HobbiesSection;
