import React from "react";
import { useNavigate } from "react-router-dom";

export default function JoinCTA() {
  const navigate = useNavigate();

  return (
    <section className="mt-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="rounded-2xl frosted p-12 border-[rgba(255,255,255,0.03)] shadow-inner">
          <h3 className="text-4xl md:text-5xl font-extrabold text-[#b892ff] text-center leading-tight">
            Ready to Join the Revolution?
          </h3>

          <p className="max-w-2xl mx-auto text-center text-indigo-200 mt-4">
            Join millions of users worldwide who have made QUILLSPARK their
            go-to communication platform. Experience the difference today.
          </p>

          <div className="mt-8 flex justify-center">
            <button
              onClick={() => navigate("/auth")}
              id="get-started"
              className="px-10 py-3 rounded-full bg-gradient-to-r from-[#6c5cff] to-[#9a6bff] text-white font-semibold shadow-cta hover:brightness-105 transition"
            >
              Get Started Free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
