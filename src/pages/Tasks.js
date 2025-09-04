// src/pages/Tasks.js
import { useState } from "react";
import { Search, Bell } from "lucide-react";

export default function Tasks() {
  const [tasks] = useState([
  {
    title: "Creating Awesome Mobile Apps",
    category: "UI/UX Design",
    progress: 90,
    time: "1 Hour",
    img: "https://picsum.photos/seed/mobileapp/400/250",
  },
  {
    title: "Creating Fresh Website",
    category: "Web Developer",
    progress: 85,
    time: "2 Hour",
    img: "https://picsum.photos/seed/website/400/250",
  },
  {
    title: "Creating Color Palletes",
    category: "UI/UX Design",
    progress: 100,
    time: "1 Hour",
    img: "https://picsum.photos/seed/colors/400/250",
  },
  {
    title: "Creating Mobile App Design",
    category: "UI/UX Design",
    progress: 75,
    time: "3 Days Left",
    img: "https://picsum.photos/seed/uiux/400/250",
  },
  {
    title: "Creating Perfect Website",
    category: "Web Developer",
    progress: 85,
    time: "4 Days Left",
    img: "https://picsum.photos/seed/developer/400/250",
  },
  {
    title: "Mobile App Design",
    category: "UI/UX Design",
    progress: 65,
    time: "3 Days Left",
    img: "https://picsum.photos/seed/prototype/400/250",
  },
]);




  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Explore Task</h1>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Bell className="w-5 h-5 text-gray-500" />
          </button>
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="profile"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>

      {/* Search & Filter */}
      <div className="flex items-center gap-4 mb-8">
        <div className="flex items-center border rounded-lg px-3 py-2 w-full max-w-md">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search Task"
            className="ml-2 w-full outline-none text-gray-600"
          />
        </div>
        <button className="border px-4 py-2 rounded-lg text-sm">
          Category
        </button>
        <button className="border px-4 py-2 rounded-lg text-sm">
          Sort By : Deadline
        </button>
      </div>

      {/* Time Limit Section */}
      <h2 className="text-lg font-semibold mb-4">Time Limit</h2>
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {tasks.slice(0, 3).map((task, i) => (
          <div key={i} className="bg-white shadow-md rounded-2xl overflow-hidden">
            <img src={task.img} alt={task.title} className="h-40 w-full object-cover" />
            <div className="p-4">
              <h3 className="font-semibold">{task.title}</h3>
              <p className="text-sm text-gray-500">{task.category}</p>
              <div className="mt-2">
                <p className="text-sm">Progress</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${task.progress}%` }}
                  />
                </div>
                <p className="text-sm text-gray-600 mt-1">{task.progress}%</p>
              </div>
              <p className="text-sm text-gray-500 mt-2">⏰ {task.time}</p>
            </div>
          </div>
        ))}
      </div>

      {/* New Task Section */}
      <h2 className="text-lg font-semibold mb-4">New Task</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {tasks.slice(3).map((task, i) => (
          <div key={i} className="bg-white shadow-md rounded-2xl overflow-hidden">
            <img src={task.img} alt={task.title} className="h-40 w-full object-cover" />
            <div className="p-4">
              <h3 className="font-semibold">{task.title}</h3>
              <p className="text-sm text-gray-500">{task.category}</p>
              <div className="mt-2">
                <p className="text-sm">Progress</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${task.progress}%` }}
                  />
                </div>
                <p className="text-sm text-gray-600 mt-1">{task.progress}%</p>
              </div>
              <p className="text-sm text-gray-500 mt-2">⏰ {task.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
