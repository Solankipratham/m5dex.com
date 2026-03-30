import React from "react";
import { motion } from "framer-motion";

const PrivateSale = () => {
  const handleRedirect = () => {
    window.open("https://privatesale.m5dex.com/", "_blank");
  };

  return (
    <div className=" py-20 px-6 md:px-20 text-white">

      {/* Title */}
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Private Sale Live
        </span>
      </h2>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#2A2F4A] border border-white/10 rounded-2xl p-10 md:p-16 text-center shadow-xl"
      >
        
        {/* Status Badge */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-3 bg-green-500/10 border border-green-400/30 px-6 py-3 rounded-full text-green-400 font-medium mb-8"
        >
          <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
          Private Sale is Live!
        </motion.div>

        {/* Description */}
        <p className="text-gray-300 text-lg mb-10">
          Join now and be part of the future of DeFi
        </p>

        {/* Button */}
        <motion.button
          onClick={handleRedirect}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 rounded-xl font-semibold text-white text-lg
                     bg-gradient-to-r from-cyan-400 to-pink-500
                     hover:opacity-90 shadow-lg"
        >
          Join Private Sale
        </motion.button>

      </motion.div>
    </div>
  );
};

export default PrivateSale;