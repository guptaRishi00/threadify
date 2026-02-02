import React from "react";

type Props = {};

export default function Qr({}: Props) {
  return (
    <div className="flex-1 flex flex-col gap-5 w-full">
      <div className="flex flex-col gap-2">
        <label className="text-[#D5F334] text-sm font-medium">
          Email Address
        </label>
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-full bg-white border border-transparent rounded-full px-5 py-4 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D5F334] transition-all duration-300"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[#D5F334] text-sm font-medium">
          Phone Number
        </label>
        <input
          type="tel"
          placeholder="Enter your phone number"
          className="w-full bg-white border border-transparent rounded-full px-5 py-4 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D5F334] transition-all duration-300"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[#D5F334] text-sm font-medium">
          Additional Message
        </label>
        <div className="relative">
          <textarea
            placeholder="Enter your message"
            rows={14}
            className="w-full bg-white border border-transparent rounded-3xl px-5 py-4 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D5F334] transition-all duration-300 resize-none"
          />
          <span className="absolute bottom-3 right-4 text-gray-400 text-xs">
            0/100
          </span>
        </div>
      </div>
    </div>
  );
}
