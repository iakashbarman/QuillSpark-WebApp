import React from "react";

function Bubble({ text, time, side = "left" }) {
  const base = "px-4 py-2 rounded-2xl max-w-md break-words text-sm";
  if (side === "left") {
    return (
      <div className="self-start">
        <div className={`${base} bg-[#26323a] text-indigo-100`}>{text}</div>
        <div className="text-xs text-indigo-300 mt-1">{time}</div>
      </div>
    );
  }
  return (
    <div className="self-end text-right">
      <div
        className={`${base} bg-gradient-to-br from-[#9a6bff] to-[#6c5cff] text-black`}
      >
        {text}
      </div>
      <div className="text-xs text-indigo-300 mt-1">{time}</div>
    </div>
  );
}

export default function SeeInAction() {
  return (
    <section className="mt-20">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center leading-tight text-[#b892ff] mb-6">
        See QUILLSPARK in Action
      </h2>
      <p className="text-center text-indigo-200 max-w-2xl mx-auto mb-6">
        Experience the intuitive interface and powerful features that make
        QUILLSPARK the perfect choice for modern communication.
      </p>

      <div className="max-w-5xl mx-auto rounded-2xl p-8 frosted border-[rgba(255,255,255,0.03)]">
        <div className="rounded-xl overflow-hidden bg-gradient-to-br from-[#12081a] to-[#3b1a6d] p-4 shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#8d6bff] flex items-center justify-center text-white font-bold">
                JD
              </div>
              <div>
                <div className="text-sm font-semibold text-indigo-100">
                  John Doe
                </div>
                <div className="text-xs text-indigo-300">Online</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-indigo-200">
              <button className="flex justify-center items-center w-9 h-9 rounded-md bg-transparent border border-[rgba(255,255,255,0.03)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-phone w-4 h-4 text-white"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </button>
              <button className="flex justify-center items-center w-9 h-9 rounded-md bg-transparent border border-[rgba(255,255,255,0.03)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-video w-4 h-4 text-white"
                >
                  <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
                  <rect x="2" y="6" width="14" height="12" rx="2"></rect>
                </svg>
              </button>
            </div>
          </div>

          <div className="h-px bg-[rgba(255,255,255,0.03)] mb-6"></div>

          {/* Body */}
          <div className="h-64 flex flex-col gap-4 overflow-none pb-4">
            <Bubble
              side="left"
              text="Hey! How's the new project going?"
              time="2:25 PM"
            />
            <Bubble
              side="right"
              text="It's going great! The new features are amazing 🚀"
              time="2:26 PM"
            />
            <Bubble
              side="left"
              text="That's awesome! Can't wait to see the demo"
              time="2:27 PM"
            />
            <Bubble
              side="right"
              text="I'll share it with you soon!"
              time="2:27 PM"
            />
          </div>

          <div className="h-px bg-[rgba(255,255,255,0.03)] mt-6"></div>
          {/* Input */}
          <div className="mt-4 bg-[rgba(0,0,0,0.25)] rounded-full p-2 flex items-center gap-3">
            <button className="flex justify-center items-center w-10 h-10 rounded-full bg-transparent border border-[rgba(255,255,255,0.03)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M21.44 11.05l-8.49 8.49a5.5 5.5 0 0 1-7.78-7.78l8.49-8.49a4 4 0 0 1 5.66 5.66l-7.07 7.07a2.5 2.5 0 1 1-3.54-3.54l6.36-6.36"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <input
              className="flex-1 bg-transparent outline-none text-indigo-100 placeholder-indigo-400 px-3"
              placeholder="Type a message..."
            />
            <button className="flex justify-center items-center w-10 h-10 rounded-full bg-gradient-to-br from-[#6c5cff] to-[#9a6bff] text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-send w-5 h-5 text-white"
              >
                <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                <path d="m21.854 2.147-10.94 10.939"></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="px-10 py-4 rounded-2xl bg-gradient-to-r from-[#6c5cff] to-[#9a6bff] text-white shadow-lg"
          >
            Try It Now
          </button>
        </div>
      </div>
    </section>
  );
}
