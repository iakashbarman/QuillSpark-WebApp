import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturesGrid from "../components/FeaturesGrid";
import SeeInAction from "../components/SeeInAction";
import MeetDeveloper from "../components/MeetDeveloper";
import JoinCTA from "../components/JoinCTA";
import Footer from "../components/Footer";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#120a22] via-[#241033] to-[#5b49f0] text-gray-100">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-12">
        <Hero />
        <FeaturesGrid />
        <SeeInAction />
        <MeetDeveloper />
        <JoinCTA />
      </main>
      <Footer />
    </div>
  );
}
