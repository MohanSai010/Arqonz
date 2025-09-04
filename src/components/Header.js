// src/components/Header.js
export default function Header() {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h2 className="text-xl font-semibold">Hi, Dennis Nzioki</h2>
        <p className="text-gray-500">Let’s finish your task today!</p>
      </div>
      <img
        src="https://i.pravatar.cc/50"
        alt="profile"
        className="w-10 h-10 rounded-full"
      />
    </div>
  );
}
