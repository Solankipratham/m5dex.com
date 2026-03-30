import React from "react";
import { motion } from "framer-motion";
import { Send, Sparkles, TrendingUp, Video, Mail } from "lucide-react";

const JoinMovement = () => {
  const buttons = [
    {
      name: "Join Telegram",
      icon: <Send size={22} />,
      link: "https://t.me/m5dex",
    },
    {
      name: "Join Discord",
      icon: <Sparkles size={22} />,
      link: "https://discord.com/invite/StFvg4jRBj",
    },
    {
      name: "Follow on X",
      icon: <TrendingUp size={22} />,
      link: "https://x.com/M5Dex_Official",
    },
    {
      name: "Watch Music Video",
      icon: <Video size={22} />,
      link: "https://www.youtube.com/watch?v=Si5k7WCva-A",
    },
  ];

  return (
    <div className=" text-white py-20 px-6 md:px-20">

      {/* Title */}
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Join the Movement
        </span>
      </h2>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-6 mb-16">
        {buttons.map((btn, i) => (
          <motion.a
            key={i}
            href={btn.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-6 py-4 rounded-xl 
                       bg-white/5 border border-white/10 
                       hover:border-cyan-400 hover:bg-cyan-400/10
                       transition duration-300 shadow-md"
          >
            <span className="text-cyan-400">{btn.icon}</span>
            <span className="text-gray-200 font-medium">{btn.name}</span>
          </motion.a>
        ))}
      </div>

      {/* Beta Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto bg-white/5 border border-white/10 
                   rounded-2xl p-10 md:p-12 text-center backdrop-blur-md"
      >
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">
          Sign Up for Beta Testing
        </h3>

        <p className="text-gray-300 mb-6">
          Receive Tokens, rewards and other key benefits by being a beta tester -
          Send us your resume and github profile to:
        </p>

        <div className="flex items-center justify-center gap-3 text-cyan-400 text-lg">
          <Mail size={22} />
          <span>careers@m5dex.com</span>
        </div>
      </motion.div>
    </div>
  );
};

export default JoinMovement;