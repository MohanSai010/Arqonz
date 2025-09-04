// src/components/Calendar.js
export default function Calendar() {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const dates = [4, 5, 6, 7, 8, 9, 10]; // example week

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h3 className="text-gray-600 mb-4">July 2022</h3>
      <div className="grid grid-cols-7 gap-2 text-center">
        {days.map((d) => (
          <p key={d} className="text-gray-400 text-sm">
            {d}
          </p>
        ))}
        {dates.map((d, i) => (
          <button
            key={i}
            className={`p-2 rounded-full text-sm ${
              d === 7
                ? "bg-indigo-600 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {d}
          </button>
        ))}
      </div>
    </div>
  );
}
