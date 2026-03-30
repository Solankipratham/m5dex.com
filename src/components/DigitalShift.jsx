import React from "react";
import { motion } from "framer-motion";

const DigitalShift = () => {
  return (
    <div className="bg-[#020617] text-white px-6 md:px-20 py-24">

      {/* Top Statement */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-lg md:text-xl font-medium">
          <span className="text-cyan-400 font-semibold">Scarcity wins.</span>{" "}
          <span className="text-gray-400">Expansion loses.</span>
        </h2>

        <p className="mt-6 text-gray-400 text-sm md:text-base leading-relaxed">
          Money that can be printed loses power. Assets that cannot be printed gain it.
          That’s not hype.{" "}
          <span className="text-white font-medium">That’s monetary physics.</span>
        </p>
      </motion.div>

      {/* Shift Section */}
      <div className="mt-20 max-w-5xl mx-auto">

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-xl md:text-2xl font-semibold mb-6"
        >
          <span className="text-cyan-400">The Shift:</span>{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Digital Gravity
          </span>
        </motion.h3>

        <p className="text-gray-400 text-sm mb-8">
          Bitcoin created digital scarcity. But ecosystems create digital gravity.
        </p>

        {/* Glass Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md overflow-hidden"
        >
          {/* Glow */}
          <div className="absolute -right-20 top-10 w-60 h-60 bg-purple-500/20 blur-[120px] rounded-full"></div>

          <h4 className="text-cyan-400 font-semibold mb-4">
            M5VF isn’t just a token.
          </h4>

          <p className="text-gray-300 text-sm mb-6">
            It sits at the center of:
          </p>

          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-400">
            <ul className="space-y-2">
              <li>• Multi-sig self-custodial wallet</li>
              <li>• Centralized exchange layer</li>
              <li>• Fractional ownership (RWA)</li>
            </ul>

            <ul className="space-y-2">
              <li>• Decentralized exchange</li>
              <li>• AI-native trading tools</li>
            </ul>

            <ul className="space-y-2">
              <li>• Perpetuals and options markets</li>
              <li>• Launchpad access</li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Mechanics Section */}
      <div className="mt-24 text-center">

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-xl md:text-2xl font-semibold mb-4"
        >
          <span className="text-cyan-400">Mechanics</span>{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Over Promises
          </span>
        </motion.h3>

        <p className="text-gray-400 text-sm max-w-2xl mx-auto mb-10">
          It’s embedded across the stack. And when a token is embedded across infrastructure,
          <span className="text-white"> every user interaction creates demand.</span>
        </p>

        {/* Cards */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">

          {/* Demand */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-green-500/10 border border-green-500/30 rounded-xl px-10 py-6"
          >
            <p className="text-green-400 text-xl mb-2">⚡</p>
            <h4 className="font-semibold">Demand Grows</h4>
          </motion.div>

          <span className="text-gray-500 text-xl">+</span>

          {/* Supply */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-red-500/10 border border-red-500/30 rounded-xl px-10 py-6"
          >
            <p className="text-red-400 text-xl mb-2">🧱</p>
            <h4 className="font-semibold">Supply Compresses</h4>
          </motion.div>

        </div>

        <p className="text-gray-500 text-xs italic mt-6">
          “You don’t need promises. You get mechanics.”
        </p>
      </div>

      {/* Ending */}
      <div className="mt-24 text-center max-w-2xl mx-auto">

        <h3 className="text-2xl md:text-3xl font-semibold italic text-gray-200 mb-6">
          Five years from now…
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed">
          Will you still be holding something that’s designed to lose value slowly?{" "}
          <br />
          Or will you wish you positioned early in something designed to expand?
        </p>
      </div>

    </div>
  );
};

export default DigitalShift;