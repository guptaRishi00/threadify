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
    // Scaled padding: py-16 on mobile, py-32 on desktop
    <div className="w-full bg-[#0B0C1E] py-16 md:py-32 px-6 md:px-16 flex flex-col items-start gap-10">
      <div className="flex flex-col items-start gap-3">
        {/* Scaled text: text-3xl on mobile, text-5xl on desktop */}
        <p className="text-3xl md:text-5xl font-bold text-white leading-tight">
          Why This? <br /> <span className="text-[#D5F334]">Just Works</span>
        </p>
      </div>

      {/* Standard Flex Column - No Grid Columns */}
      <div className="flex flex-col items-start gap-6 md:gap-8 w-full">
        {items.map((item, index) => (
          <div className="flex items-center gap-5 md:gap-8" key={index}>
            {/* Added flex-shrink-0 so the circle doesn't turn into an oval on small screens */}
            <div className="w-5 h-5 md:w-10 md:h-10 rounded-full bg-linear-to-r from-[#FFFFFF00] to-[#D5F334] shrink-0" />
            <p className="text-lg md:text-xl text-white">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
