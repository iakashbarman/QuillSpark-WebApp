import React from "react";

/**
 * MessageBubble: left (contact) and right (self) bubbles styled.
*/

export default function MessageBubble({ fromSelf = false, text, time }) {
  const leftStyle = "bg-[#1f2b31] text-indigo-100 rounded-xl rounded-tl-sm px-4 py-3 max-w-[70%]";
  const rightStyle = "bg-gradient-to-br from-[#9a6bff] to-[#6c5cff] text-black rounded-xl rounded-br-sm px-4 py-3 max-w-[70%]";

  return (
    <div className={`flex ${fromSelf ? "justify-end" : "justify-start"} mb-4`}>
      <div className={fromSelf ? rightStyle : leftStyle}>
        <div className="whitespace-pre-wrap">{text}</div>
        <div className={`text-xs mt-2 ${fromSelf ? "text-indigo-100" : "text-indigo-300"}`}>{time}</div>
      </div>
    </div>
  );
}