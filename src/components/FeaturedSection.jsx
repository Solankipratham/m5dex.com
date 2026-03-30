import React from "react";
import { motion } from "framer-motion";

// ✅ ADD country codes
const countries = [
  { name: "South Africa", code: "za" },
  { name: "Kenya", code: "ke" },
  { name: "Russia", code: "ru" },
  { name: "Australia", code: "au" },
  { name: "USA", code: "us" },
  { name: "India", code: "in" },
  { name: "Korea", code: "kr" },
  { name: "Malaysia", code: "my" },
  { name: "Thailand", code: "th" },
  { name: "Indonesia", code: "id" },
  { name: "Nigeria", code: "ng" },
  { name: "Togo", code: "tg" },
  { name: "Benin", code: "bj" },
  { name: "Cameroon", code: "cm" },
];

const partners = [
  { name: "Consta", logo: "/images/partner-1.png" },
  { name: "Women Empowerment", logo: "/images/partner-2.png" },
  { name: "AquaPlus", logo: "/images/partner-3.png" },
  { name: "Save Health", logo: "/logos/save.png" },
  { name: "Brahmas", logo: "/images/partner-4.png" },
];

const FeaturedSection = () => {
  return (
    <div className="bg-[#020617] text-white py-16 px-6 md:px-20">

      {/* ================= Featured Promotion ================= */}
      <h2 className="text-center text-2xl md:text-3xl font-bold text-blue-400 mb-8">
        Featured Promotion
      </h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md"
      >
        <div className="rounded-lg overflow-hidden">
          <iframe
            className="w-full h-[220px] md:h-[400px] rounded-lg"
            src="https://www.youtube.com/embed/Si5k7WCva-A"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <p className="text-center text-cyan-400 text-sm mt-4">
          Proud sponsor of “Rolla Rolla” featuring French Montana & Mohamed Ramadan
        </p>
      </motion.div>

      {/* ================= Partners ================= */}
      <div className="mt-16">
        <h3 className="text-center text-xs tracking-widest text-gray-400 mb-8">
          STRATEGIC PARTNERS & BACKERS
        </h3>

        <div className="flex flex-wrap justify-center items-center gap-10">
          {partners.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="opacity-70 hover:opacity-100 transition"
            >
              <img
                src={p.logo}
                alt={p.name}
                className="h-10 md:h-12 object-contain grayscale hover:grayscale-0"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= Global Presence ================= */}
      <div className="mt-20">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-blue-400 mb-10">
          Global Presence and Partnerships
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {countries.map((c, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center gap-2"
            >
              {/* ✅ REAL FLAG IMAGE */}
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
                <img
                  src={`https://flagcdn.com/w40/${c.code}.png`}
                  alt={c.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <p className="text-sm text-gray-300">{c.name}</p>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default FeaturedSection;