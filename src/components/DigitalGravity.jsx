import React from "react";
import { motion } from "framer-motion";

const DigitalGravity = () => {
  return (
    <div className="relative min-h-screen bg-[#020617] flex flex-col items-center justify-center text-center px-6 overflow-hidden">

      {/* Logo */}
      <div className="absolute top-6">
        <img
          src="/images/logo-high-res.png"
          alt="logo"
          className="w-20 opacity-80"
        />
      </div>

      {/* Manifesto Button */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-6"
      >
        <button className="px-6 py-2 rounded-full border border-cyan-400/30 text-cyan-300 text-sm backdrop-blur-md bg-white/5 hover:bg-white/10 transition shadow-[0_0_20px_rgba(0,255,255,0.2)]">
          ✨ THE M5DEX MANIFESTO
        </button>
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold tracking-tight"
      >
        <span className="text-gray-200">Digital </span>

        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 text-transparent bg-clip-text">
          Gravity
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="mt-6 text-gray-400 italic text-lg md:text-xl max-w-2xl"
      >
        "Early conviction is uncomfortable. Late conviction is expensive."
      </motion.p>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 flex flex-col items-center"
      >
        <p className="text-gray-500 text-xs tracking-widest mb-2">
          SCROLL TO EXPLORE
        </p>

        <p className="text-gray-500 text-xs tracking-widest mb-2">
            “Satoshi FX is a wholly owned subsidiary of M5DEX DAO LLC, Wyoming.”
        </p>


        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-[2px] h-10 bg-gradient-to-b from-cyan-400 to-transparent"
        />
      </motion.div>

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full top-20 left-1/2 -translate-x-1/2"></div>
        <div className="absolute w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full bottom-0 right-20"></div>
      </div>

    </div>
  );
};

export default DigitalGravity;