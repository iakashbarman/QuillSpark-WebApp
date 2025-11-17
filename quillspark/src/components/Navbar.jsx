import React from "react";

export default function Navbar() {
  return (
    <header className="left-0 right-0 top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#b892ff] to-[#7b5bff] flex items-center justify-center text-black font-extrabold shadow-md">
            <img src="/src/assets/chat - w.png" alt="" width="75%" />
          </div>
          <div className="text-[#b892ff] font-bold tracking-wide text-2xl">
            QUILLSPARK
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            aria-label="toggle-theme"
            className="w-10 h-10 rounded-lg bg-transparent border border-[#3b2a57]/30 flex items-center justify-center text-indigo-200 hover:bg-white/5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-sun"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </svg>
          </button>

          <a
            href="/auth"
            className="ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#6c5cff] to-[#9a6bff] text-white font-semibold shadow-lg hover:opacity-95"
          >
            Get Started
          </a>
        </div>
      </div>

      <div className="h-1 bg-transparent" />
    </header>
  );
}
