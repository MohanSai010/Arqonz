import { useState } from "react";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("general");
  const [language, setLanguage] = useState("English (Default)");
  const [timezone, setTimezone] = useState("English (Default)");
  const [timeFormat, setTimeFormat] = useState("24 Hours");

  return (
    <div className="flex h-screen bg-gray-50">
     

      {/* SETTINGS CONTENT */}
      <div className="flex-1 p-8">
        <h1 className="text-xl font-semibold mb-6">Settings</h1>

        <div className="bg-white rounded-xl shadow-sm border p-6">
          {/* Tabs */}
          <div className="flex border-b mb-6">
            <button
              onClick={() => setActiveTab("general")}
              className={`px-4 py-2 font-medium text-sm ${
                activeTab === "general"
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-500"
              }`}
            >
              General
            </button>
            <button
              onClick={() => setActiveTab("notification")}
              className={`px-4 py-2 font-medium text-sm ${
                activeTab === "notification"
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-500"
              }`}
            >
              Notification
            </button>
          </div>

          {/* General Settings */}
          {activeTab === "general" && (
            <div className="space-y-6">
              {/* Language */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Language
                </label>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="mt-2 w-full border rounded-lg px-3 py-2 text-sm"
                >
                  <option>English (Default)</option>
                  <option>French</option>
                  <option>Spanish</option>
                </select>
              </div>

              {/* Timezone */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Timezone
                </label>
                <select
                  value={timezone}
                  onChange={(e) => setTimezone(e.target.value)}
                  className="mt-2 w-full border rounded-lg px-3 py-2 text-sm"
                >
                  <option>English (Default)</option>
                  <option>UTC</option>
                  <option>IST</option>
                  <option>PST</option>
                </select>
              </div>

              {/* Time Format */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Timezone Format
                </label>
                <div className="mt-2 flex space-x-4">
                  <button
                    onClick={() => setTimeFormat("24 Hours")}
                    className={`px-4 py-2 rounded-lg border ${
                      timeFormat === "24 Hours"
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-gray-700"
                    }`}
                  >
                    24 Hours
                  </button>
                  <button
                    onClick={() => setTimeFormat("12 Hours")}
                    className={`px-4 py-2 rounded-lg border ${
                      timeFormat === "12 Hours"
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-gray-700"
                    }`}
                  >
                    12 Hours
                  </button>
                </div>
              </div>

              {/* Save Button */}
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
                Save Changes
              </button>
            </div>
          )}

          {/* Notification Tab Placeholder */}
          {activeTab === "notification" && (
            <div className="text-gray-500 text-sm">Notification settings go here...</div>
          )}
        </div>
      </div>
    </div>
  );
}
