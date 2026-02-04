import { text } from "stream/consumers";

export default function LostBags({}: any) {
  const items = [
    {
      text: "Put your name on what you can’t afford to lose",
    },
    {
      text: "Mom said don’t share your number - Threadify Tag listened",
    },
    {
      text: "Connecting So easy, even the finder won’t overthink it.",
    },
  ];

  return (
    <div className="w-full bg-[#0B0C1E] py-20 md:py-32 px-6 md:px-16 flex flex-col items-start gap-16">
      <div className="flex flex-col items-start gap-3">
        <p className="text-5xl font-bold">
          Lost bags? <br />{" "}
          <span className="text-[#D5F334]">Not your problem</span>
        </p>
        <p className="text-[#FFFFFF]">We make Hard to miss. Hard to lose.</p>
      </div>

      <div className="flex items-start gap-14 flex-col">
        {items.map((item, index) => (
          <div className="flex items-center gap-8" key={index}>
            <div className="w-15 h-15 rounded-full bg-linear-to-r from-[#D5F334] to-[#FFFFFF00] p-px flex items-center justify-center">
              <div className="w-14.5 h-14.5 rounded-full bg-linear-to-r from-[#222333] to-[#18192a]"></div>
            </div>

            <p className="text-xl max-w-xs">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
