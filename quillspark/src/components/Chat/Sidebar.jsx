import React from "react";
import { UserButton } from "@clerk/clerk-react";

/**
 * Sidebar: refined, elegant styling to match screenshot
 */
export default function Sidebar({ conversations = [], activeId, onSelect }) {
  return (
    <aside className="h-[calc(100vh-96px)] px-0">
      <div className="frosted p-4 mb-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#b892ff] to-[#7b5bff] flex items-center justify-center text-black font-extrabold"><img src="/src/assets/chat - w.png" width="75%" /></div>
            <div className="text-[#b892ff] font-bold text-xl tracking-wide">QUILLSPARK</div>
          </div>
          <div className="flex items-center gap-2 relative">
            <button className="w-12 h-12 rounded-md bg-transparent flex items-center justify-center" aria-label="settings">
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarImage: {
                      display: "none",
                    },
                  },
                }}
              />

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  pointerEvents: "none",
                  borderRadius: "50%",
                  backgroundImage: "linear-gradient(135deg, #7b5bff 0%, #b892ff 100%)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-user w-5 h-5"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
            </button>
          </div>
        </div>

        <div className="mt-4">
          <input
            className="w-full bg-[rgba(255,255,255,0.015)] border border-[rgba(255,255,255,0.03)] rounded-lg px-4 py-2 placeholder-indigo-400 text-indigo-100 focus:ring-0 focus:outline-none"
            placeholder="Search chats..."
          />
        </div>

        <div className="mt-4 flex gap-2">
          <button className="flex-1 rounded-lg bg-gradient-to-r from-[#6c5cff] to-[#9a6bff] text-white py-2 text-sm font-medium shadow-sm">All</button>
          <button className="flex-1 rounded-lg bg-[rgba(255,255,255,0.01)] text-indigo-200 py-2 text-sm">Private</button>
        </div>
      </div>

      <div className="space-y-3">
        {conversations.map((c) => (
          <div
            key={c.id}
            onClick={() => onSelect?.(c.id)}
            className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-colors duration-150 relative ${activeId === c.id
              ? "bg-[linear-gradient(90deg,rgba(107,86,255,0.08),rgba(154,107,255,0.03))] shadow-[inset_0_0_30px_rgba(107,86,255,0.03)]"
              : "hover:bg-[rgba(255,255,255,0.015)]"
              }`}
          >
            <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-xl ${activeId === c.id ? "bg-gradient-to-b from-[#6c5cff] to-[#9a6bff]" : "opacity-0"}`} />
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7b5bff] to-[#b892ff] flex items-center justify-center text-white font-bold shrink-0">
              {c.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start">
                <div className="font-semibold text-white text-sm truncate">{c.title}</div>
                <div className="text-xs text-indigo-300 ml-2">{c.time}</div>
              </div>
              <div className="text-sm text-indigo-300 truncate mt-1">{c.lastMessage}</div>
            </div>
            {c.unread > 0 && (
              <div className="ml-2 bg-gradient-to-br from-[#6c5cff] to-[#9a6bff] text-white text-xs px-2 py-1 rounded-full shadow-sm">
                {c.unread}
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
}