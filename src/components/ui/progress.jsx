import * as React from "react";

export function Progress({ value, className }) {
  return (
    <div className={`w-full h-2 bg-gray-200 rounded-full ${className}`}>
      <div
        className="h-2 bg-indigo-600 rounded-full transition-all"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
