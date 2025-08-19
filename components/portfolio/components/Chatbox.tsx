"use client";

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

export default function Chatbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "bot"; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user" as const, content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage.content }),
      });

      const data = await res.json();
      setMessages((prev) => [...prev, { role: "bot", content: data.reply }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: "⚠️ Failed to connect. Try again later." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-8 right-4 z-50 flex items-center justify-center w-12 h-12 rounded-full dark:bg-white text-black shadow-lg hover:scale-105 transition"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 z-50 w-80 sm:w-96 h-[450px] bg-background border rounded-2xl shadow-xl flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center p-3 border-b">
            <h2 className="font-semibold">AI Assistant</h2>
            <button onClick={toggleChat}>
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2 text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[80%] ${
                  msg.role === "user"
                    ? "ml-auto dark:bg-white text-black"
                    : "mr-auto bg-muted"
                }`}
              >
                {msg.content}
              </div>
            ))}
            {loading && (
              <div className="text-xs text-muted-foreground animate-pulse">
                Thinking...
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-3 border-t flex items-center space-x-2">
            <input
              className="flex-1 px-3 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              className="p-2 dark:bg-white text-black/50 rounded-lg hover:bg-primary/90"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
