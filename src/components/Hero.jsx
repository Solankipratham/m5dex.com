import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [showDownload, setShowDownload] = useState(false);

  // ✅ ROTATING TEXT
  const words = ["Scale", "Trade", "Compound", "Dominate", "Capture Alpha"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 1000); // 1 second

    return () => clearInterval(interval);
  }, []);

  const goToPrivateSale = () => {
    window.open("https://privatesale.m5dex.com/", "_blank");
  };

  return (
<section className="min-h-[90vh] w-full flex flex-col items-center justify-center text-center px-4 sm:px-6">
      {/* Logo */}
      <div className="mb-6 flex items-center gap-2">
        <img src="/images/logo-high-res.png" alt="logo" className="w-40 h-30 object-contain" />
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        The Future of{" "}
        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 bg-clip-text text-transparent">
          DeFi
        </span>
      </h1>

      {/* Subtitle */}
      <p className="mt-4 text-gray-400 max-w-xl">
        M5DEX has built the underlying foundation for a Multi Trillion Dollar DEFI Ecosystem.
      </p>

      {/* ✅ UPDATED TAGLINE */}
      <p className="mt-6 text-lg font-semibold">
        Where Legends{" "}
        <span className="text-cyan-400 transition-all duration-300">
          {words[index]}
        </span>
      </p>

      {/* Main Button */}
      <button
        onClick={goToPrivateSale}
        className="mt-6 px-8 py-3 rounded-xl text-white font-medium bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 hover:opacity-90 transition"
      >
        Join Private Sale
      </button>

      {/* Secondary Buttons */}
      <div className="mt-6 flex flex-wrap gap-4 justify-center">

        {/* Download App */}
        <button
          onClick={() => setShowDisclaimer(true)}
          className="px-5 py-2 bg-[#0E1629] rounded-lg border border-gray-700 text-sm flex items-center gap-2 hover:border-gray-500"
        >
          Download App
          <span className="bg-red-500 text-xs px-2 py-[2px] rounded">BETA</span>
        </button>

        {/* Telegram */}
        <button
          onClick={() => window.open("https://t.me/m5dex", "_blank")}
          className="px-5 py-2 bg-[#0E1629] rounded-lg border border-gray-700 text-sm hover:border-gray-500"
        >
          Telegram
        </button>
      </div>

      {/* Bottom Buttons */}
      <div className="mt-4 flex gap-4">

        {/* Light Paper */}
        <button
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1e5Xv8gO_GGBookgOE3lhE1NN80tPOPxj/view",
              "_blank"
            )
          }
          className="px-5 py-2 bg-[#0E1629] rounded-lg border border-gray-700 text-sm hover:border-gray-500"
        >
          Light Paper
        </button>

        {/* Whitepaper */}
        <button
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1HvIhEWJXOZDtVykSFS2_LGbTdmT0eKJS/view",
              "_blank"
            )
          }
          className="px-5 py-2 bg-[#0E1629] rounded-lg border border-gray-700 text-sm hover:border-gray-500"
        >
          Whitepaper
        </button>

      </div>

      {/* DISCLAIMER MODAL */}
      {showDisclaimer && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-[700px] max-h-[90vh] overflow-y-auto rounded-2xl border border-red-500 bg-[#0B1224]"
          >
            <div className="flex justify-between items-center p-5 border-b border-red-500">
              <h2 className="text-xl font-semibold">Beta Risk Disclaimer</h2>
              <button onClick={() => setShowDisclaimer(false)}>✕</button>
            </div>

            <div className="p-6">
              <div className="flex justify-end gap-3">
                <button onClick={() => setShowDisclaimer(false)} className="px-4 py-2 border rounded">
                  Exit App
                </button>

                <button
                  onClick={() => {
                    setShowDisclaimer(false);
                    setShowDownload(true);
                  }}
                  className="px-4 py-2 bg-red-500 rounded"
                >
                  Continue
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* DOWNLOAD MODAL */}
    {/* ================= DISCLAIMER MODAL ================= */}
{showDisclaimer && (
  <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-3">
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="w-full max-w-xl rounded-xl border border-red-500/40 bg-[#0B1224] text-white"
    >
      {/* HEADER */}
      <div className="flex justify-between items-center px-4 py-3 border-b border-red-500/30">
        <h2 className="text-sm font-semibold tracking-wide">
          Beta Risk Disclaimer
        </h2>
        <button
          onClick={() => setShowDisclaimer(false)}
          className="text-gray-400 hover:text-white text-sm"
        >
          ✕
        </button>
      </div>

      {/* BODY */}
      <div className="px-4 py-4 space-y-4 text-[13px] leading-relaxed">

        <p className="text-gray-400 text-xs">
          This application is currently in beta. Some features may still be under development, testing, or optimization.
        </p>

        {/* MAIN BOX */}
        <div className="bg-[#111827] border border-gray-700/60 rounded-lg p-3">
          <h3 className="font-medium text-xs mb-2 text-white/90">
            By continuing, you agree that:
          </h3>

          <ul className="space-y-1 text-gray-400 text-xs">
            <li>• May contain bugs or unexpected behavior</li>
            <li>• Features can change anytime</li>
            <li>• Data may be inaccurate or delayed</li>
            <li>• Temporary performance issues may occur</li>
            <li>• Not yet fully audited</li>
          </ul>
        </div>

        {/* WARNING */}
        <div className="bg-red-500/10 border border-red-500/40 p-2.5 rounded text-red-300 text-xs">
          ⚠️ You are using this application at your own risk.
        </div>

        {/* INFO ROW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div className="bg-yellow-500/10 border border-yellow-500/40 p-2.5 rounded text-yellow-300 text-xs">
            Do not use funds you cannot afford to lose.
          </div>
          <div className="bg-blue-500/10 border border-blue-500/40 p-2.5 rounded text-blue-300 text-xs">
            No financial or legal advice provided.
          </div>
        </div>

        {/* CONFIRM */}
        <div>
          <p className="text-green-400 text-xs font-medium mb-1">
            ✔ By proceeding, you confirm:
          </p>
          <ul className="text-gray-400 text-xs space-y-1">
            <li>• You are participating voluntarily</li>
            <li>• You accept experimental risks</li>
            <li>• You release developers from liability</li>
          </ul>
        </div>

        {/* BUTTONS */}
        <div className="flex justify-end gap-2 pt-2">
          <button
            onClick={() => setShowDisclaimer(false)}
            className="px-3 py-1.5 text-xs border border-gray-600 rounded-md hover:bg-white/5"
          >
            Exit
          </button>

          <button
            onClick={() => {
              window.open("https://m5wallet.com/", "_blank", "noopener,noreferrer");
            }}
            className="px-3 py-1.5 text-xs bg-red-500 rounded-md hover:bg-red-600"
          >
            Continue
          </button>
        </div>

      </div>
    </motion.div>
  </div>
)}
    </section>
  );
}