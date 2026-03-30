import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const FinalCTA = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#020617] text-white px-6 md:px-20 py-24 flex flex-col items-center">

      {/* Top Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md text-center"
      >
        <h3 className="text-sm md:text-base text-gray-300">
          Most people wait for proof. By the time proof is obvious…
          <span className="text-red-400 font-semibold"> THE UPSIDE IS GONE.</span>
        </h3>

        <p className="text-gray-500 text-xs mt-4">
          This is not about gambling. It’s about understanding monetary design.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">

          {/* Default */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="border border-pink-500/30 rounded-xl p-6 bg-pink-500/5"
          >
            <p className="text-gray-400 text-xs mb-2">The Default</p>
            <h4 className="font-semibold">Hold Melting Ice</h4>
          </motion.div>

          {/* Strategic */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="border border-cyan-400/40 rounded-xl p-6 bg-cyan-400/5"
          >
            <p className="text-cyan-400 text-xs mb-2">The Strategic</p>
            <h4 className="font-semibold">Hold Engineered Scarcity</h4>
          </motion.div>

        </div>
      </motion.div>

      {/* Logo */}
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        src="/images/logo-high-res.png"
        alt="logo"
        className="w-20 mt-16 opacity-90"
      />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-2xl md:text-4xl font-semibold mt-6 text-center"
      >
        That’s why we built{" "}
        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 bg-clip-text text-transparent">
          M5Dex.
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-gray-400 italic mt-3"
      >
        “And that’s why this moment matters.”
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="flex flex-col md:flex-row gap-4 mt-8"
      >
        {/* Join Button (External Link) */}
        <a
          href="https://privatesale.m5dex.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 hover:opacity-90 transition shadow-lg"
        >
          Join the Future
        </a>

        {/* Back Button (Internal Navigation) */}
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 rounded-lg border border-white/20 text-gray-300 hover:text-white hover:border-white transition"
        >
          Back to Dashboard
        </button>
      </motion.div>

    </div>
  );
};

export default FinalCTA;