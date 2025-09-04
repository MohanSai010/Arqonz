import { Home, ClipboardList, Users, MessageSquare, Settings, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const menus = [
    { name: "Overview", icon: <Home size={18} />, path: "/" },
    { name: "Task", icon: <ClipboardList size={18} />, path: "/tasks" },
    { name: "Mentors", icon: <Users size={18} />, path: "/mentors" },
    { name: "Message", icon: <MessageSquare size={18} />, path: "/messages" },
    { name: "Settings", icon: <Settings size={18} />, path: "/settings" },
  ];

  return (
    <>
      {/* 🔹 Mobile Hamburger Button */}
      <button
        className="md:hidden p-3 fixed top-4 left-4 z-50 bg-indigo-600 text-white rounded-lg"
        onClick={() => setOpen(true)}
      >
        <Menu size={20} />
      </button>

      {/* 🔹 Sidebar (hidden on mobile unless toggled) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg flex flex-col p-6 transform transition-transform duration-300 z-40
          ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static`}
      >
        {/* Close button (only for mobile) */}
        <button
          className="md:hidden self-end mb-4 text-gray-600"
          onClick={() => setOpen(false)}
        >
          <X size={24} />
        </button>

        <h1 className="text-2xl font-bold text-indigo-600 mb-10">DNX</h1>
        <nav className="flex flex-col gap-6">
          {menus.map((m) => (
            <Link
              key={m.name}
              to={m.path}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 text-gray-600 hover:text-indigo-600"
            >
              {m.icon}
              {m.name}
            </Link>
          ))}
        </nav>

        {/* Help Center */}
        <div className="mt-auto bg-indigo-50 p-4 rounded-xl text-sm text-gray-700">
          <p className="font-semibold">Help Center</p>
          <p className="text-xs mt-1">Having trouble? Contact us for support.</p>
          <button className="mt-3 bg-indigo-600 text-white px-3 py-2 rounded-lg text-xs">
            Go to Help Center
          </button>
        </div>
      </div>
    </>
  );
}
