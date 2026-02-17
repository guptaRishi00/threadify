"use client";

import React, { useState } from "react";
import { IoCheckmark } from "react-icons/io5";

type Props = {
  onSelect: (bg: string) => void;
};

const designs = [
  // Solids
  { id: 1, bg: "#000000", label: "Midnight" },
  { id: 2, bg: "#1a1a2e", label: "Deep Navy" },
  { id: 3, bg: "#0f0f0f", label: "Charcoal" },
  { id: 4, bg: "#1b1b2f", label: "Eclipse" },

  // Dark gradients
  { id: 5, bg: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)", label: "Cosmic" },
  { id: 6, bg: "linear-gradient(135deg, #0c0c0c, #1a1a2e, #16213e)", label: "Dark Matter" },
  { id: 7, bg: "linear-gradient(135deg, #141e30, #243b55)", label: "Midnight Blue" },
  { id: 8, bg: "linear-gradient(135deg, #1a002e, #3a0066)", label: "Deep Purple" },
  { id: 9, bg: "linear-gradient(135deg, #0d0d0d, #1a0000, #330000)", label: "Blood Moon" },
  { id: 10, bg: "linear-gradient(135deg, #000428, #004e92)", label: "Deep Ocean" },
  { id: 11, bg: "linear-gradient(135deg, #200122, #6f0000)", label: "Dark Cherry" },
  { id: 12, bg: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)", label: "Steel" },
  { id: 13, bg: "linear-gradient(135deg, #1d1d3b, #2e1a47, #0f0c29)", label: "Nebula" },
  { id: 14, bg: "linear-gradient(135deg, #0a0a0a, #1a1a1a, #2d2d2d)", label: "Obsidian" },
  { id: 15, bg: "linear-gradient(135deg, #0c1015, #1b3a4b, #0c1015)", label: "Arctic Night" },
  { id: 16, bg: "linear-gradient(135deg, #0d0d0d, #3d1c00, #0d0d0d)", label: "Ember" },
];

export default function Designs({ onSelect }: Props) {
  const [selectedId, setSelectedId] = useState<number>(1);

  const handleSelect = (design: (typeof designs)[0]) => {
    setSelectedId(design.id);
    onSelect(design.bg);
  };

  return (
    <div className="flex flex-col items-start gap-5 w-full pb-10">
      <p className="text-white/40 text-xs uppercase tracking-widest mb-1">
        Select Style
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 lg:gap-4 w-full">
        {designs.map((design) => (
          <div
            key={design.id}
            onClick={() => handleSelect(design)}
            style={{ background: design.bg }}
            className={`
              w-full aspect-[16/9] lg:aspect-[21/9] rounded-xl lg:rounded-2xl shrink-0 
              cursor-pointer border-2 transition-all duration-300
              relative group overflow-hidden
              ${selectedId === design.id
                ? "border-[#D5F334] ring-1 ring-[#D5F334]/30"
                : "border-white/5 hover:border-white/20"
              }
            `}
          >
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 rounded-xl lg:rounded-2xl transition-opacity" />

            {/* Label */}
            <div className="absolute bottom-2 left-3 text-[10px] font-medium text-white/60 opacity-0 group-hover:opacity-100 transition-opacity">
              {design.label}
            </div>

            {/* Selected checkmark */}
            {selectedId === design.id && (
              <div className="absolute top-2 right-2 w-6 h-6 bg-[#D5F334] rounded-full flex items-center justify-center">
                <IoCheckmark size={14} className="text-black" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

