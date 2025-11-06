import React from "react";
import Metrics from "./Metrics";

export default function Hero() {
  return (
    <section className="pt-2 text-center">
      <div className="max-w-4xl mx-auto px-3">
        <h1 className="font-extrabold leading-tight text-white text-5xl md:text-7xl lg:text-7xl drop-shadow-[0_8px_40px_rgba(91,73,240,0.15)]">
          Experience the Future of
          <br />
          <span className="text-[#b892ff] block">Communication</span>
        </h1>

        <p className="mt-6 text-indigo-200 text-lg md:text-xl max-w-3xl mx-auto">
          QUILLSPARK revolutionizes how you connect with the world. Beautiful design meets powerful features in the most advanced messaging platform ever created.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-[#6c5cff] to-[#9a6bff] text-white font-semibold shadow-2xl hover:translate-y-0.5 transition-transform">
            Start Chatting →
          </button>
          <button className="px-6 py-3 rounded-full border border-[#3b2a57]/40 text-indigo-100">
            Join Free
          </button>
        </div>

        <Metrics />
      </div>
    </section>
  );
}