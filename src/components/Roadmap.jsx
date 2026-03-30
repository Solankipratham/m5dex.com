import React from "react";
import { motion } from "framer-motion";

const roadmapData = [
  {
    year: "2022",
    title: "R&D Phase",
    desc: "Research and development of core technologies",
    side: "left",
  },
  {
    year: "2023",
    title: "Prototyping",
    desc: "Building and testing initial prototypes",
    side: "right",
  },
  {
    year: "2024",
    title: "Alpha Testing",
    desc: "Ecosystem components alpha testing",
    side: "left",
  },
  {
    year: "2025",
    title: "Soft Launch",
    desc: "Soft launch of ecosystem components",
    side: "right",
  },
  {
    year: "2026 Q1",
    title: "Beta & Private Sale",
    desc: "Demo, beta testing and private sale phase",
    side: "left",
  },
  {
    year: "2026",
    title: "Product Launch",
    desc: "IDO, full launch of products and utility",
    side: "right",
  },
  {
    year: "2027",
    title: "SSO & RWA Integration",
    desc: "Integration of products with SSO and Real World Assets",
    side: "left",
  },
  {
    year: "2028",
    title: "Own Blockchain",
    desc: "Fork to own blockchain infrastructure",
    side: "right",
  },
  {
    year: "2029",
    title: "Trillion Dollar TVL",
    desc: "Roadmap to 1 Trillion Dollar Total Value Locked",
    side: "left",
  },
];

const Roadmap = () => {
  return (
    <div className="bg-[#020617] text-white py-20 px-6 md:px-20">
      {/* Title */}
      <h2 className="text-center text-3xl font-bold text-blue-400 mb-16">
        Roadmap
      </h2>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[3px] h-full bg-gradient-to-b from-cyan-400 via-purple-500 to-transparent"></div>

        {/* Timeline Items */}
        <div className="flex flex-col gap-16">
          {roadmapData.map((item, index) => {
            const isLeft = item.side === "left";

            return (
              <div
                key={index}
                className={`relative flex ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-400 rounded-full border-4 border-[#020617] z-10"></div>

                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
                  className={`w-[90%] md:w-[420px] p-6 rounded-xl border border-white/10 backdrop-blur-md
                    bg-white/5 shadow-lg hover:shadow-cyan-500/20
                    ${isLeft ? "mr-auto" : "ml-auto"}`}
                >
                  {/* Year */}
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-cyan-400 font-semibold">
                      {item.year}
                    </h3>
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs">
                      ⚙️
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="font-semibold text-white">
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mt-1">
                    {item.desc}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;