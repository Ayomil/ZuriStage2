import React from "react";

export default function SearchComponent() {
  return (
    <div className="container mx-auto flex justify-between items-center">
      <div className="relative">
        <input
          type="text"
          placeholder="Search movies..."
          className="px-3 py-2 pr-8 rounded-full bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:shadow-outline"
        />
      </div>
    </div>
  );
}
