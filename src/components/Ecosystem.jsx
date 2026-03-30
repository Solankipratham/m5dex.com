import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Wallet,
  BarChart3,
  Signal,
  Cloud,
  TrendingUp,
  Activity,
  Diamond,
  Repeat,
} from "lucide-react";

export default function Ecosystem() {
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [showDownload, setShowDownload] = useState(false);

  const cards = [
    {
      icon: <Wallet size={28} />,
      title: "DEFI Wallet",
      subtitle: "Coming Soon",
      points: [
        "Multi-chain support",
        "Built-in DEX integration",
        "Hardware wallet support",
      ],
      button: "Download Beta APK",
      link: "https://m5wallet.com/", // ✅ ADDED LINK
    },
    {
      icon: <BarChart3 size={28} />,
      title: "DEX",
      subtitle: "Instant",
      points: ["Cross-chain swaps", "Liquidity pools", "Yield farming"],
      button: "Launch DEX",
   link: "https://dex.m5dex.io/en", // ✅ ADDED LINK
      
    },
    {
      icon: <Signal size={28} />,
      title: "M5 Signals",
      subtitle: "Demo Mode",
      points: ["Auto-copy top traders", "Risk management", "Real-time alerts"],
      button: "Try Demo",
      link: "https://signals.m5dex.com/",
    },
    {
      icon: <Cloud size={28} />,
      title: "Staking Platform",
      subtitle: "Demo Mode",
      points: [
        "Stake multiple tokens",
        "Flexible staking periods",
        "Competitive rewards",
      ],
      button: "Try Demo",
      link: "https://staking.m5dex.com/",
    },
    {
      icon: <TrendingUp size={28} />,
      title: "Crypto Options",
      subtitle: "Demo Mode",
      points: ["American & European", "Multiple expiries", "Advanced analytics"],
      button: "Try Demo",
      link: "https://m5options.com/login",
    },
    {
      icon: <Activity size={28} />,
      title: "Crypto Futures",
      subtitle: "Demo Mode",
      points: [
        "Up to 100x leverage",
        "Cross & isolated margin",
        "Advanced order types",
      ],
      button: "Try Demo",
      link: "https://m5future.com/futures/BTC",
    },
    {
      icon: <Diamond size={28} />,
      title: "RWA NFTs",
      subtitle: "Demo Mode",
      points: ["Fractional ownership", "Passive income", "Secure assets"],
      button: "Try Demo",
      link: "https://rwa.m5dex.com/",
    },
    {
      icon: <Repeat size={28} />,
      title: "Centralized Crypto Exchange",
      subtitle: "Demo Mode",
      points: ["Fiat on/off ramp", "Multiple payment methods", "24/7 support"],
      button: "Try Demo",
      link: "https://spot.m5dex.com/trade/ETH-BTC",
    },
  ];

  // ✅ FIXED CLICK HANDLER (ONLY CHANGE)
  const handleClick = (card) => {
    if (card.link) {
      window.open(card.link, "_blank", "noopener,noreferrer");
    } else if (card.title === "DEFI Wallet") {
      window.open("https://m5wallet.com/", "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section className="py-20 px-6  text-white" id="ecosystem">
      <h2 className="text-center text-2xl md:text-3xl font-semibold text-cyan-400 mb-12">
        Ecosystem Overview
      </h2>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-[#0E1629] border border-gray-700 rounded-xl p-6 hover:border-cyan-400 transition"
          >
            <div className="text-cyan-400 mb-4">{card.icon}</div>

            <h3 className="text-lg font-semibold">{card.title}</h3>
            <p className="text-xs text-yellow-400 mb-3">{card.subtitle}</p>

            <ul className="text-sm text-gray-400 space-y-1 mb-4">
              {card.points.map((point, i) => (
                <li key={i}>• {point}</li>
              ))}
            </ul>

            <button
              onClick={() => handleClick(card)}
              className="text-cyan-400 text-sm hover:underline"
            >
              {card.button} ↗
            </button>
          </motion.div>
        ))}
      </div>

      {/* ✅ ALL MODALS LEFT UNCHANGED (AS YOU REQUESTED) */}
      {showDisclaimer && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
          <motion.div className="w-[700px] max-h-[90vh] overflow-y-auto rounded-2xl border border-red-500 bg-[#0B1224]">
            <div className="flex justify-between items-center p-5 border-b border-red-500">
              <h2 className="text-xl font-semibold">Beta Risk Disclaimer</h2>
              <button onClick={() => setShowDisclaimer(false)}>✕</button>
            </div>
          </motion.div>
        </div>
      )}

      {showDownload && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <motion.div className="bg-[#0B1224] w-[500px] rounded-2xl p-6 text-center">
            <h2 className="text-xl font-semibold mb-4">
              Select Your Platform
            </h2>

            <a
              href="/app.apk"
              download
              className="block bg-[#0E1629] p-4 rounded-lg"
            >
              📱 Download Beta APK
            </a>

            <button
              onClick={() => setShowDownload(false)}
              className="mt-4 text-gray-400"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}