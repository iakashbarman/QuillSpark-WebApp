import React from "react";

export default function Footer() {
  return (
    <footer className="mt-12">
      <div className="max-w-7xl mx-auto px-6">

        <div className="h-px bg-[rgba(255,255,255,0.03)] mb-6"></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-6 text-indigo-200">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#b892ff] to-[#7b5bff] flex items-center justify-center font-bold text-black">
            <img src="/src/assets/chat - w.png" alt="" width="75%" />
            </div>
            <div className="font-semibold text-indigo-100">QUILLSPARK</div>
            <div className="ml-4 text-sm text-indigo-300">Connecting the world, one message at a time.</div>
          </div>

          <div className="flex items-center gap-6 text-sm text-indigo-300">
            <a className="hover:text-white" href="#privacy">Privacy Policy</a>
            <a className="hover:text-white" href="#terms">Terms of Service</a>
            <a className="hover:text-white" href="#support">Support</a>
          </div>
        </div>

        <div className="text-center text-indigo-300 text-sm pb-8">
          © 2025 QUILLSPARK. All rights reserved. Made with <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart w-4 h-4 inline text-red-500"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg> by passionate developers.
        </div>
      </div>
    </footer>
  );
}