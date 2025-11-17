import React, { useState } from "react";
import Sidebar from "../components/Chat/Sidebar";
import ChatArea from "../components/Chat/ChatArea";
// import Navbar from "../components/Navbar";
// import { UserButton } from "@clerk/clerk-react";

export default function Dashboard() {
  const sampleConversations = [
    {
      id: "c1",
      title: "Alice Johnson",
      lastMessage: "Hey! How are you doing today?",
      time: "2:30 PM",
      unread: 2,
      avatar: "AJ"
    },
    {
      id: "c2",
      title: "Team Project",
      lastMessage: "Let's schedule the meeting",
      time: "1:45 PM",
      unread: 0,
      avatar: "TP"
    },
    {
      id: "c3",
      title: "Bob Wilson",
      lastMessage: "Thanks for the help!",
      time: "12:20 PM",
      unread: 1,
      avatar: "BW"
    }
  ];

  const [conversations] = useState(sampleConversations);
  const [activeConversationId, setActiveConversationId] = useState(conversations[0].id);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1b1030] via-[#241033] to-[#5b49f0] text-gray-100">
      {/* <UserButton /> */}

      <main className="max-w-full min-h-screen  mx-auto px-0 py-0 flex gap-0">
        <div className="divider">
          <Sidebar
            conversations={conversations}
            activeId={activeConversationId}
            onSelect={(id) => setActiveConversationId(id)}
          />
        </div>

        <div className="flex-1 min-h-screen">
          <ChatArea conversationId={activeConversationId} />
        </div>
      </main>
    </div>
  );
}
