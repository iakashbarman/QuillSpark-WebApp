import React, { useState } from "react";

/**
 * MessageInput: composer with attach icon and send button
 */
export default function MessageInput({ onSend }) {
  const [value, setValue] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    onSend(trimmed);
    setValue("");
  };

  return (
    <form onSubmit={submit} className="flex items-center gap-3 max-w-3xl mx-auto">
      <button type="button" className="flex justify-center items-center w-10 h-10 rounded-full bg-transparent border border-[rgba(255,255,255,0.03)]">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M21.44 11.05l-8.49 8.49a5.5 5.5 0 0 1-7.78-7.78l8.49-8.49a4 4 0 0 1 5.66 5.66l-7.07 7.07a2.5 2.5 0 1 1-3.54-3.54l6.36-6.36" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </button>

      <input
        className="flex-1 bg-transparent border border-[rgba(255,255,255,0.04)] rounded-full px-4 py-3 placeholder-indigo-400 text-indigo-100 "
        placeholder="Type a message..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      
      <button>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-smile w-5 h-5 dark:text-dark-text text-light-text"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
      </button>
      
      <button type="submit" className="flex justify-center items-center w-12 h-12 rounded-full bg-gradient-to-br from-[#6c5cff] to-[#9a6bff] text-white">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send w-5 h-5 text-white"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
      </button>
    </form>
  );
}