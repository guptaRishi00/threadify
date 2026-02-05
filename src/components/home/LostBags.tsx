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
    <div className="w-full bg-[#0B0C1E] py-8 md:py-12 lg:py-16 px-6 md:px-16 flex flex-col items-center lg:items-start gap-16">
      <div className="flex flex-col lg:items-start text-center items-centerlg:text-left gap-3">
        <p className="lg:text-5xl text-4xl font-bold text-white">
          Lost bags? <br />
          <span className="text-[#D5F334]">Not your problem</span>
        </p>
        <p className="text-[#FFFFFF]">We make Hard to miss. Hard to lose.</p>
      </div>

      <div className="flex flex-col items-center gap-10">
        {items.map((item, index) => (
          <div
            className="flex flex-row items-center gap-4 md:gap-8"
            key={index}
          >
            <div className="w-15 h-15 rounded-full bg-linear-to-r from-[#D5F334] to-[#FFFFFF00] p-px flex items-center justify-center">
              <div className="w-14.5 h-14.5 rounded-full bg-linear-to-r from-[#222333] to-[#18192a]"></div>
            </div>

            <p className="text-xl max-w-xs text-left text-white">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
