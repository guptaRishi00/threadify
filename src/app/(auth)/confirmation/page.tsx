"use client";

import React from "react";

type Props = {};

export default function Confirmation({}: Props) {
  return (
    <main className="bg-[#0B0C1E] min-h-screen flex items-center justify-center py-20 px-6 font-ubuntu">
      <div className="bg-linear-to-r from-[#D5F334] to-[#111223] w-full max-w-200 rounded-[60px] p-px">
        <div className="bg-[#111223] w-full h-auto rounded-[60px] p-10 lg:p-20 flex flex-col items-center gap-12">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold text-white uppercase tracking-tight">
              Lorem ipsum <span className="text-[#D5F334]">dolor</span>
            </h1>
            <p className="text-white/70 text-lg">Lorem ipsum dolor amet</p>
          </div>

          <div className="w-64 h-64 bg-white rounded-[40px] flex items-center justify-center shadow-2xl"></div>

          <div className="w-full max-w-sm">
            <button className="w-full h-14 bg-[#D5F334] text-black text-lg rounded-full hover:opacity-90 transition-opacity">
              Done
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
