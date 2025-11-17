import React, { useEffect, useRef, useState } from "react";
import MessageBubble from "./MessageBubble";
import MessageInput from "./MessageInput";

/**
 * ChatArea: chat header + messages + composer
 * For now uses local sample messages to render left/right bubbles.
 */
export default function ChatArea({ conversationId }) {
  // sample messages (in production load from API)
  const [messages, setMessages] = useState([
    { id: "m1", fromSelf: false, text: "Hey! How are you doing today?", time: "2:25 PM" },
    { id: "m2", fromSelf: true, text: "I'm doing great! Just finished working on the new project. How about you?", time: "2:26 PM" },
    { id: "m3", fromSelf: false, text: "That's awesome! I'd love to hear more about it. Can we schedule a call later?", time: "2:27 PM" },
    { id: "m4", fromSelf: true, text: "Sure! I'm free after 4 PM. Let me know what works for you.", time: "2:28 PM" }
  ]);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    // scroll to bottom on new messages
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, conversationId]);

  const handleSend = (text) => {
    const newMsg = {
      id: `m${Date.now()}`,
      fromSelf: true,
      text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };
    setMessages((prev) => [...prev, newMsg]);
    // later: send to server / websocket here
  };

  return (
    <div className="flex flex-col h-[calc(100vh-0px)]">
      {/* Header */}
      <header className="frosted p-4 flex items-center gap-4 border-b border-[rgba(255,255,255,0.03)]">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7b5bff] to-[#b892ff] flex items-center justify-center text-white font-bold">AJ</div>
        <div className="flex-1">
          <div className="font-semibold text-white">Alice Johnson</div>
          <div className="text-sm text-indigo-300">Online</div>
        </div>
        <div className="flex gap-3">
          <button className="flex justify-center items-center w-10 h-10 rounded-md bg-transparent border border-[rgba(255,255,255,0.03)]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search w-5 h-5 dark:text-dark-text text-light-text"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
          </button>
          <button className="flex justify-center items-center w-10 h-10 rounded-md bg-transparent border border-[rgba(255,255,255,0.03)]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone w-5 h-5 dark:text-dark-text text-light-text"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          </button>
          <button className="flex justify-center items-center w-10 h-10 rounded-md bg-transparent border border-[rgba(255,255,255,0.03)]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-video w-5 h-5 dark:text-dark-text text-light-text"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect x="2" y="6" width="14" height="12" rx="2"></rect></svg>
          </button>
          <button className="flex justify-center items-center w-10 h-10 rounded-md bg-transparent border border-[rgba(255,255,255,0.03)]"><button class="p-2 rounded-lg hover:bg-white/10 transition-colors duration-300 glow-effect"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis-vertical w-5 h-5 dark:text-dark-text text-light-text"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></button></button>
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-auto px-6 py-6">
        <div className="max-w-3xl mx-auto">
          {messages.map((m) => (
            <MessageBubble key={m.id} fromSelf={m.fromSelf} text={m.text} time={m.time} />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Composer */}
      <footer className="p-4 frosted border-t border-[rgba(255,255,255,0.03)]">
        <MessageInput onSend={handleSend} />
      </footer>
    </div>
  );
}