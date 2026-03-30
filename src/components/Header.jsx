import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
export default function Header() {
  const [open, setOpen] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [showDownload, setShowDownload] = useState(false);

const navigate = useNavigate();
const location = useLocation();

const scrollToSection = (id) => {
  if (location.pathname !== "/") {
    navigate("/");

    setTimeout(() => {
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  } else {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  }

  setOpen(false);
};

  const handlePrivateSale = () => {
    window.open("https://privatesale.m5dex.com/", "_blank");
  };

  const tickerData = [
    "🟡 BNB $615.66 ▲ 0.3%",
    "🟣 SOL $83.52 ▲ 1.1%",
    "🟢 BTC $67,283 ▲ 0.8%",
    "🔵 ETH $2,042 ▲ 2.0%",
    "🟢 USDT $0.999 ▼ 0.1%",
  ];

  return (
    <>
      {/* ================= TOP TICKER ================= */}
      <div className="fixed top-0 left-0 w-full bg-black border-b border-white/10 z-[60] overflow-hidden h-10 flex items-center">
        <div className="flex whitespace-nowrap animate-marquee gap-10 px-4">
          {[...tickerData, ...tickerData].map((item, i) => (
            <span key={i} className="text-sm text-gray-300">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ================= HEADER ================= */}
      <div className="w-full bg-[#060B1A] px-4 md:px-10 py-4 flex items-center justify-between fixed top-10 z-50">

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-gray-300 text-sm xl:text-[15px]">

          <span onClick={() => scrollToSection("home")} className="px-3 py-1.5 bg-[#0E1629] rounded-lg text-cyan-400 cursor-pointer">
            Home
          </span>

          <span onClick={() => scrollToSection("ecosystem")} className="cursor-pointer hover:text-white">Ecosystem</span>
          <span onClick={() => scrollToSection("tokenomics")} className="cursor-pointer hover:text-white">Tokenomics</span>
          <span onClick={() => scrollToSection("roadmap")} className="cursor-pointer hover:text-white">Roadmap</span>
          <span onClick={() => scrollToSection("promotion")} className="cursor-pointer hover:text-white">Promotion</span>
          <span onClick={() => scrollToSection("private")} className="cursor-pointer hover:text-white">Private Sale</span>
          <span onClick={() => scrollToSection("community")} className="cursor-pointer hover:text-white">Community</span>

          <div onClick={() => setShowDisclaimer(true)} className="flex items-center gap-2 cursor-pointer hover:text-white">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            <span>Download App</span>
          </div>
        </div>

        {/* BUTTON */}
        <button
          onClick={handlePrivateSale}
          className="hidden lg:block px-5 py-2.5 rounded-xl text-white text-sm font-medium bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500"
        >
          Join Private Sale
        </button>

        {/* MOBILE MENU */}
        <div className="lg:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE DROPDOWN */}
        {open && (
          <div className="absolute top-full left-0 w-full bg-[#060B1A] border-t border-white/10 flex flex-col px-6 py-6 gap-4 lg:hidden">

            <span onClick={() => scrollToSection("home")} className="px-3 py-2 bg-[#0E1629] rounded text-cyan-400">Home</span>
            <span onClick={() => scrollToSection("ecosystem")}>Ecosystem</span>
            <span onClick={() => scrollToSection("tokenomics")}>Tokenomics</span>
            <span onClick={() => scrollToSection("roadmap")}>Roadmap</span>
            <span onClick={() => scrollToSection("promotion")}>Promotion</span>
            <span onClick={() => scrollToSection("private")}>Private Sale</span>
            <span onClick={() => scrollToSection("community")}>Community</span>

            <div onClick={() => setShowDisclaimer(true)} className="flex gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              Download App
            </div>

            <button
              onClick={handlePrivateSale}
              className="w-full mt-3 px-5 py-3 rounded-xl text-white bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500"
            >
              Join Private Sale
            </button>
          </div>
        )}
      </div>

      {/* ================= DISCLAIMER MODAL ================= */}
      {showDisclaimer && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="w-full max-w-2xl rounded-2xl border border-red-500 bg-[#0B1224]"
          >
            <div className="flex justify-between p-5 border-b border-red-500">
              <h2 className="text-lg font-semibold">Beta Risk Disclaimer</h2>
              <button onClick={() => setShowDisclaimer(false)}>✕</button>
            </div>

            <div className="p-6">
              <p className="text-gray-400 mb-4">
                This application is currently released as a beta version.
              </p>

              <div className="flex justify-end gap-3">
                <button onClick={() => setShowDisclaimer(false)} className="px-4 py-2 border rounded">
                  Exit
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

      {/* ================= DOWNLOAD MODAL ================= */}
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
    </>
  );
}