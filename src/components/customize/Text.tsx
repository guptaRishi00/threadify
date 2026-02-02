import React from "react";

type Props = {};

export default function Text({}: Props) {
  return (
    <div className="flex-1 flex flex-col gap-4 w-full">
      <div className="relative">
        <input
          type="text"
          placeholder="First Name"
          className="w-full bg-white border border-transparent rounded-full px-5 py-4 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D5F334] transition-all duration-300"
        />
      </div>

      <div className="relative">
        <input
          type="text"
          placeholder="Last Name"
          className="w-full bg-white border border-transparent rounded-full px-5 py-4 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D5F334] transition-all duration-300"
        />
      </div>
    </div>
  );
}
