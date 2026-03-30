import React from "react";
import { motion } from "framer-motion";

const InvisibleLeak = () => {
  return (
    <div className="bg-[#020617] text-white px-6 md:px-20 py-20">

      {/* Top Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
          Let me say something most people won’t say on stage.
        </h2>

        <p className="mt-4 text-gray-400 text-sm md:text-base">
          If you’re holding cash…
        </p>

        <p className="text-red-400 text-sm md:text-base font-medium">
          you’re getting poorer every single year.
        </p>
      </motion.div>

      {/* Invisible Leak Section */}
      <div className="mt-16 grid md:grid-cols-2 gap-10 items-start">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-cyan-400 text-xl font-semibold mb-6">
            The Invisible Leak
          </h3>

          <div className="border-l border-cyan-400/40 pl-6 space-y-4 text-gray-300 text-sm leading-relaxed">
            <p>
              Not because you’re lazy. Not because you’re bad with money.
            </p>

            <p className="font-semibold text-white">
              Because the system is built that way.
            </p>

            <p>
              Currencies inflate. Governments print. Banks lend your money.
              And your purchasing power quietly shrinks.
            </p>
          </div>
        </motion.div>

        {/* Right Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-purple-500/10 to-red-500/10 border border-white/10 rounded-xl p-6 backdrop-blur-md"
        >
          <p className="text-xs text-pink-400 mb-3 uppercase tracking-widest">
            THE REALITY
          </p>

          <p className="text-sm text-gray-300 leading-relaxed">
            If inflation is 6–8% and your currency weakens… you’re not staying flat —
            <span className="text-red-400 font-medium"> you’re moving backwards.</span>
          </p>
        </motion.div>
      </div>

      {/* Lesson Section */}
      <div className="mt-20">

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-cyan-400 text-xl font-semibold mb-4"
        >
          The Lesson of Scarcity
        </motion.h3>

        <p className="text-gray-400 text-sm mb-8">
          They feel like they’re saving. But they’re leaking value.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Gold Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md"
          >
            <div className="text-yellow-400 text-lg mb-2">🌐</div>
            <h4 className="font-semibold mb-1">Gold</h4>
            <p className="text-sm text-gray-400">
              Preserved wealth across centuries.
            </p>
          </motion.div>

          {/* Bitcoin Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md"
          >
            <div className="text-cyan-400 text-lg mb-2">📈</div>
            <h4 className="font-semibold mb-1">Bitcoin</h4>
            <p className="text-sm text-gray-400">
              Outperformed almost every major asset class over the last decade.
            </p>
          </motion.div>

        </div>
      </div>

    </div>
  );
};

export default InvisibleLeak;