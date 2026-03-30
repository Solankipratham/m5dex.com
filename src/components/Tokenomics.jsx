import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Tokenomics = () => {
  return (
    <div className="text-white py-16 px-6 md:px-16">
      {/* Title */}
      <h2 className="text-center text-3xl font-bold mb-12 text-blue-400">
        Tokenomics
      </h2>

      {/* Top Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Token Distribution */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="bg-[#111936] border border-blue-500/30 rounded-xl p-6 shadow-lg hover:shadow-blue-500/20"
        >
          <h3 className="text-blue-400 font-semibold mb-4">
            Token Distribution
          </h3>

          {[
            ["Private Sale", "10%"],
            ["IDO/IEO", "10%"],
            ["Team", "20%"],
            ["Advisors", "5%"],
            ["Marketing & Partnerships", "5%"],
            ["Ecosystem Fund", "50%"],
          ].map((item, i) => (
            <div
              key={i}
              className="flex justify-between text-sm py-1 border-b border-gray-700 last:border-none"
            >
              <span>{item[0]}</span>
              <span className="text-blue-400">{item[1]}</span>
            </div>
          ))}
        </motion.div>

        {/* Token Details */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="bg-[#111936] border border-blue-500/30 rounded-xl p-6 shadow-lg hover:shadow-blue-500/20"
        >
          <h3 className="text-blue-400 font-semibold mb-4">
            Token Details
          </h3>

          <ul className="space-y-3 text-sm">
            <li>
              Total Supply <br />
              <span className="text-blue-400 font-semibold">
                5,000,000,000 M5VF
              </span>
            </li>

            <li>
              Initial Circulating Supply <br />
              <span className="text-blue-400 font-semibold">
                1,000,000,000 M5VF
              </span>
            </li>

            <li>
              Initial Market Cap <br />
              <span className="text-blue-400 font-semibold">
                $100,000,000
              </span>
            </li>

            <li>
              Fully Diluted Market Cap <br />
              <span className="text-blue-400 font-semibold">
                $500,000,000
              </span>
            </li>
          </ul>
        </motion.div>

        {/* Token Utility */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
          className="bg-[#111936] border border-blue-500/30 rounded-xl p-6 shadow-lg hover:shadow-blue-500/20"
        >
          <h3 className="text-blue-400 font-semibold mb-4">
            Token Utility
          </h3>

          <ul className="space-y-3 text-sm">
            <li>
              <span className="text-blue-400">• Governance</span>
              <p className="text-gray-400 text-xs">
                Vote on platform decisions
              </p>
            </li>

            <li>
              <span className="text-blue-400">• Fees</span>
              <p className="text-gray-400 text-xs">
                Pay transaction fees with discounts
              </p>
            </li>

            <li>
              <span className="text-blue-400">• Staking</span>
              <p className="text-gray-400 text-xs">
                Earn rewards by staking M5VF
              </p>
            </li>

            <li>
              <span className="text-blue-400">• Access</span>
              <p className="text-gray-400 text-xs">
                Unlock premium features
              </p>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-10 bg-[#111936] border border-blue-500/30 rounded-xl p-6 grid md:grid-cols-3 gap-6"
      >
        {[
          {
            title: "Verified Products",
            desc: "All products can be tested and verified by users",
          },
          {
            title: "Enhanced Security",
            desc: "Massive cybersecurity layer with multiple audits",
          },
          {
            title: "Token Security",
            desc: "Strict token lockups and vesting",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-4 rounded-lg hover:bg-blue-500/10 transition"
          >
            <h4 className="text-blue-400 font-semibold">{item.title}</h4>
            <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Tokenomics;