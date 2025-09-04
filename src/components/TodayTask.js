// src/components/TodayTask.js
import ProgressBar from "./ProgressBar";

export default function TodayTask() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h3 className="text-gray-600 mb-4">Task Today</h3>
      <img
        src="https://images.unsplash.com/photo-1557838923-2985c318be48"
        alt="task"
        className="rounded-xl mb-4"
      />
      <h4 className="font-semibold">Creating Awesome Mobile Apps</h4>
      <p className="text-sm text-gray-500">UI & UX Designer</p>
      <ProgressBar value={90} />
      <p className="text-sm text-gray-500 mt-2">⏱ 1 Hour</p>

      <div className="mt-6">
        <h5 className="font-semibold mb-2">Detail Task</h5>
        <ul className="text-sm text-gray-600 list-decimal list-inside space-y-1">
          <li>Understand the tools in Figma</li>
          <li>Understand the basics of making designs</li>
          <li>Design a mobile application with Figma</li>
        </ul>
        <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg">
          Go to Detail
        </button>
      </div>
    </div>
  );
}
