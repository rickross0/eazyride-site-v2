import { motion } from 'framer-motion';
import { Terminal, Gamepad2, ArrowRight, ExternalLink, Sword, Map, Gem } from 'lucide-react';

const BashcrawlSection = () => {
  const features = [
    { icon: Terminal, title: 'Real Commands', desc: 'Learn actual bash commands through gameplay' },
    { icon: Map, title: 'Dungeon Explorer', desc: 'Navigate directories like dungeon rooms' },
    { icon: Sword, title: 'Battle Monsters', desc: 'Fight with ls, cat, cd, and chmod' },
    { icon: Gem, title: 'Collect Treasure', desc: 'Find hidden files and secrets' },
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(34,197,94,0.06),_transparent_60%)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
                <Gamepad2 className="w-5 h-5 text-green-400" />
              </div>
              <span className="text-green-400 font-black uppercase tracking-[0.3em] text-xs">Terminal Adventure</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-black text-white leading-[0.9] tracking-tighter mb-6"
            >
              Bashcrawl
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-zinc-400 text-xl leading-relaxed mb-8 max-w-lg"
            >
              An immersive text-based adventure that teaches you real terminal commands through dungeon exploration. Learn bash while battling monsters and collecting treasure.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="https://github.com/bamr87/bashcrawl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 text-black px-8 py-4 rounded-full font-black text-sm uppercase hover:bg-green-400 transition-all hover:scale-105 active:scale-95"
              >
                <ExternalLink className="w-4 h-4" />
                Play on GitHub
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-[2rem] p-6 hover:border-green-500/30 transition-colors group"
              >
                <feature.icon className="w-8 h-8 text-green-400 mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-white font-black text-sm mb-2">{feature.title}</h4>
                <p className="text-zinc-500 text-xs leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BashcrawlSection;
