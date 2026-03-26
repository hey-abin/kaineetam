import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export const ParallaxBackground = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <div ref={ref} className="relative h-[150vh] w-full overflow-hidden bg-gradient-to-b from-[#FFD700] via-[#FFA500] to-[#FF8C00]">
      {/* Background Layer: Distant Trees */}
      <motion.div 
        style={{ y: y3 }}
        className="absolute inset-0 z-0 opacity-40"
      >
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[url('https://images.unsplash.com/photo-1590001158193-79ef7c744d0d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-no-repeat grayscale sepia opacity-30" />
      </motion.div>

      {/* Middle Layer: Mango/Jackfruit Trees */}
      <motion.div 
        style={{ y: y2 }}
        className="absolute inset-0 z-10"
      >
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-[url('https://cdn-icons-png.flaticon.com/512/2921/2921822.png')] bg-contain bg-no-repeat opacity-60" />
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-[url('https://cdn-icons-png.flaticon.com/512/2921/2921822.png')] bg-contain bg-no-repeat opacity-50 scale-x-[-1]" />
      </motion.div>

      {/* Front Layer: Kanikkonna Flowers */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-20 pointer-events-none"
      >
        <div className="absolute top-0 left-0 w-full h-full flex flex-wrap justify-around opacity-80">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i} 
              className="w-48 h-96 bg-[url('https://images.unsplash.com/photo-1596438459194-f275f413d6ff?q=80&w=1935&auto=format&fit=crop')] bg-contain bg-no-repeat"
              style={{ 
                transform: `rotate(${i * 15}deg) translateY(${i * 20}px)`,
                filter: 'hue-rotate(45deg) saturate(1.5)'
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Content Overlay */}
      <div className="relative z-30 h-full flex flex-col items-center justify-center text-white px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold drop-shadow-2xl mb-4 font-serif"
        >
          വിഷുക്കൈനീട്ടം
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl md:text-2xl font-light tracking-widest uppercase"
        >
          Digital Gifting with Tradition
        </motion.p>
      </div>
    </div>
  );
};
