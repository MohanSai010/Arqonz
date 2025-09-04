import { useState } from "react";
import { Search, Phone, Video, Send } from "lucide-react";

export default function Messages() {
  const [messages, setMessages] = useState([
    { sender: "them", text: "Yes sure, Any problem with your assignment?", time: "11:53" },
    { sender: "me", text: "How to make a responsive display from the dashboard?", time: "11:52" },
    { sender: "me", text: "Is there a plugin to do this task?", time: "11:52" },
    { sender: "them", text: "No plugins. You just have to make it smaller according to the size of the phone.", time: "11:53" },
    { sender: "them", text: "Thank you very much. I'm glad you asked about the assignment", time: "11:53" }
  ]);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (!newMessage.trim()) return;
    setMessages([...messages, { sender: "me", text: newMessage, time: "Now" }]);
    setNewMessage("");
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* LEFT SIDEBAR (you already have this, so you can remove if duplicate) */}
      <div className="w-72 border-r border-gray-200 p-4 hidden md:block">
        <h2 className="text-lg font-semibold mb-4">Message</h2>
        <div className="relative mb-4">
          <Search className="absolute left-2 top-2.5 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search Name"
            className="w-full pl-9 pr-3 py-2 border rounded-lg text-sm"
          />
        </div>

        {/* Contact List */}
        <div className="space-y-4 overflow-y-auto h-[calc(100vh-150px)]">
          {[
            "Angelie Crison",
            "Jakob Saris",
            "Emery Korsgard",
            "Jeremy Zucker",
            "Nadia Lauren",
            "Jason Statham",
            "Angeli Kimberly",
            "Jason Momoa"
          ].map((name, i) => (
            <div key={i} className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
              <img
                src={`https://i.pravatar.cc/150?img=${i + 10}`}
                alt={name}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <p className="font-medium text-sm">{name}</p>
                <p className="text-xs text-gray-500 truncate">Last message preview...</p>
              </div>
              <span className="text-xs text-gray-400">{i + 1}m</span>
            </div>
          ))}
        </div>
      </div>

      {/* CHAT AREA */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="flex items-center justify-between border-b border-gray-200 p-4">
          <div className="flex items-center space-x-3">
            <img
              src="https://i.pravatar.cc/150?img=15"
              alt="User"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold">Angelie Crison</p>
              <p className="text-xs text-green-500">Online</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <Phone className="w-5 h-5 text-gray-500 cursor-pointer" />
            <Video className="w-5 h-5 text-gray-500 cursor-pointer" />
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-white">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-2xl text-sm shadow 
                ${msg.sender === "me" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800"}`}
              >
                {msg.text}
                <div className="text-[10px] text-gray-400 mt-1">{msg.time}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-4 border-t flex items-center space-x-3 bg-white">
          <input
            type="text"
            placeholder="Send your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1 px-4 py-2 border rounded-full text-sm"
          />
          <button
            onClick={sendMessage}
            className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
