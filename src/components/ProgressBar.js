// src/components/ProgressBar.js
export default function ProgressBar({ value }) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
      <div
        className="bg-indigo-600 h-2 rounded-full"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
}
