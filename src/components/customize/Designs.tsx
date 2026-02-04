"use client";

import React from "react";

type Props = {
  onSelect: (bgClass: string) => void;
};

// Expanded list of designs to force scrolling
const designs = [
  { id: 1, class: "bg-black" },
  { id: 2, class: "bg-gray-800" },
  { id: 3, class: "bg-indigo-950" },
  { id: 4, class: "bg-linear-to-b from-slate-900 to-black" },
  { id: 5, class: "bg-red-950" },
  { id: 6, class: "bg-emerald-950" },
  { id: 7, class: "bg-zinc-900" },
  { id: 8, class: "bg-linear-to-r from-blue-900 to-indigo-900" },
];

export default function Designs({ onSelect }: Props) {
  return (
    <div className="flex flex-col items-start gap-5 w-full pb-10">
      <p className="text-white/40 text-xs uppercase tracking-widest mb-2">
        Select Style
      </p>

      <div className="grid grid-cols-3 lg:grid-cols-1 gap-3 lg:gap-5 w-full">
        {designs.map((design) => (
          <div
            key={design.id}
            onClick={() => onSelect(design.class)}
            className={`
              w-full h-20 lg:h-32 ${design.class} rounded-xl lg:rounded-2xl shrink-0 
              cursor-pointer border-2 border-white/5 
              hover:border-[#D5F334] transition-all duration-300
              relative group
            `}
          >
            {/* Subtle hover indicator */}
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 rounded-xl lg:rounded-2xl transition-opacity" />
          </div>
        ))}
      </div>
    </div>
  );
}
