import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Ecosystem from "../components/Ecosystem";
import Tokenomics from "../components/Tokenomics";
import Roadmap from "../components/Roadmap";
import FeaturedSection from "../components/FeaturedSection";
import PrivateSale from "../components/PrivateSale";
import JoinMovement from "../components/JoinMovement";

export default function Home() {
  return (
    <div className="bg-[#060B1A] text-white scroll-smooth">

      <Header />

      {/* spacing for fixed navbar */}
      <div className="pt-24"></div>

      {/* HERO */}
      <section id="home" className="scroll-mt-24">
        <Hero />
      </section>

      {/* ECOSYSTEM */}
      <section
        id="ecosystem"
        className="min-h-screen flex items-center justify-center bg-[#0E1629] scroll-mt-24"
      >
        <Ecosystem />
      </section>

      {/* TOKENOMICS */}
      <section
        id="tokenomics"
        className="min-h-screen flex items-center justify-center mt-24 mb-4 scroll-mt-24"
      >
        <Tokenomics />
      </section>

      {/* ROADMAP */}
      <section id="roadmap" className="scroll-mt-24">
        <Roadmap />
      </section>

      {/* PROMOTION */}
      <section id="promotion" className="scroll-mt-24">
        <FeaturedSection />
      </section>

      {/* PRIVATE SALE */}
      <section
        id="private"
        className="min-h-screen flex items-center justify-center bg-[#0E1629] scroll-mt-24"
      >

<PrivateSale/>
      </section>

      {/* COMMUNITY */}
      <section
        id="community"
        className="min-h-screen flex items-center justify-center scroll-mt-24"

>
  <JoinMovement/>

      </section>

      {/* DOWNLOAD */}
    
    </div>
  );
}