import React from "react";

type Props = {};

export default function JustWorks({}: Props) {
  const items = [
    { text: "No ribbons. No hacks." },
    { text: "Seen first. Found fast." },
    { text: "Your number stays hidden. Always." },
    { text: "300 mins talktime. On us." },
    { text: "Premium leather tag included." },
    { text: "All-weather. Tear-proof. Travel-tough." },
  ];

  return (
    <div className="w-full bg-[#0B0C1E] py-8 md:py-12 lg:py-16 px-6 md:px-16 flex flex-col items-center justify-center gap-10">
      <div className="flex flex-col items-center text-center gap-3">
        <p className="text-3xl md:text-5xl font-bold text-white leading-tight">
          Why This? <br /> <span className="text-[#D5F334]">Just Works</span>
        </p>
      </div>

      <div className="flex flex-col items-start w-fit gap-6 md:gap-8">
        {items.map((item, index) => (
          <div
            className="flex flex-row items-center gap-5 md:gap-8"
            key={index}
          >
            <div className="w-5 h-5 md:w-10 md:h-10 rounded-full bg-linear-to-r from-[#FFFFFF00] to-[#D5F334] shrink-0" />
            <p className="text-lg md:text-xl text-white text-left">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
