import React from "react";

type Props = {};

export default function JustWorks({}: Props) {
  const items = [
    {
      text: "No ribbons. No hacks.",
    },
    {
      text: "Seen first. Found fast.",
    },
    {
      text: "Your number stays hidden. Always.",
    },
    {
      text: "300 mins talktime. On us.",
    },
    {
      text: "Premium leather tag included.",
    },
    {
      text: "All-weather. Tear-proof. Travel-tough.",
    },
  ];
  return (
    <div className="w-full bg-[#0B0C1E] py-20 md:py-32 px-6 md:px-16 flex flex-col items-start gap-10">
      <div className="flex flex-col items-start gap-3">
        <p className="text-5xl font-bold">
          Why This? <br /> <span className="text-[#D5F334]">Just Works</span>
        </p>
      </div>

      <div className="flex items-start gap-5 flex-col">
        {items.map((item, index) => (
          <div className="flex items-center gap-8" key={index}>
            <div className="w-10 h-10 rounded-full bg-linear-to-r to-[#D5F334] from-[#FFFFFF00] p-px flex items-center justify-center"></div>
            <p className="text-xl ">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
