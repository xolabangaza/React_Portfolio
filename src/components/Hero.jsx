import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SocialIcons from "./SocialIcons";

export function Hero() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <section
      ref={ref}
      id="home"
      className="flex flex-col items-center justify-center text-center py-56 text-white relative"
    >
      {/* Animated heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ec008c] to-[#fc6767] mt-4"
      >
        Xola Bangaza
      </motion.h1>

      {/* Animated paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="text-xl text-gray-400 max-w-2xl mt-4"
      >
        I'm a <span className="font-bold text-white">Software Developer</span> based in
        <span className="text-pink-400"> Cape Town</span>, specializing in designing
        <span className="font-bold text-white"> aesthetically pleasing UIs</span> and
        <span className="font-bold text-white"> scalable applications</span> that perform efficiently.
      </motion.p>

      {/* Animated SocialIcons component */}
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.8, delay: 1, ease: "backOut" }}
        className="mt-6"
      >
        <SocialIcons />
      </motion.div>
    </section>
  );
}
