import Image from "next/image";

const pricingFeatures = [
  {
    feature: "Smart Tags Included",
    starter: "1 Smart Tag",
    value: "2 Smart Tag",
  },
  {
    feature: "Talk Time",
    starter: "200 minutes",
    value: "500 minutes (shared)",
  },
  { feature: "Call Masking", starter: true, value: true },
  { feature: "Instant Setup", starter: true, value: true },
  { feature: "Privacy Protected", starter: true, value: true },
  { feature: "QR-Based Recovery", starter: true, value: true },
  { feature: "Matte Finish QR Decal", starter: true, value: true },
  { feature: "Weather & Tear Proof", starter: true, value: true },
  {
    feature: "Leather Tag Included",
    starter: "1 Premium Leather Tag",
    value: "2 Premium Leather Tags",
  },
  { feature: "Multiple Bag Coverage", starter: false, value: true },
  {
    feature: "Ideal For",
    starter: "Personal bags, backpacks",
    value: "Couples, families, travellers",
  },
];

export default function PricingHeroSection() {
  return (
    <div className="min-h-screen w-full bg-[#0B0C1E] flex flex-col items-center py-20 px-6 font-ubuntu">
      {/* Hero Section */}
      <div className="mt-20 lg:mt-32 flex flex-col items-center text-center gap-6 mb-16">
        <div className="rounded-full flex w-fit h-fit items-center justify-center p-[0.6px] bg-linear-to-r from-[#D5F334] to-[#121324]">
          <div className="bg-linear-to-r from-[#171829] to-[#121324] rounded-full px-6 py-2">
            <span className="font-light text-[14px] text-white tracking-wide">
              smart qr luggage tag
            </span>
          </div>
        </div>

        <h1 className="text-white font-bold text-5xl lg:text-7xl leading-tight uppercase">
          Threadify <br /> Pricing <span className="text-[#D5F334]">Plans</span>
        </h1>

        <p className="text-white/70 font-light text-xl">
          Simple plans for secure, stress-free travel
        </p>
      </div>

      {/* Pricing Table Container */}
      <div className=" w-full bg-white/5 border border-white/10 rounded-[40px] overflow-hidden mb-10 max-w-350 p-8">
        <div className="grid grid-cols-3 border-b border-white/10">
          <div className="p-8"></div>
          {/* Starter Plan Header */}
          <div className="p-8 text-center flex flex-col items-center gap-4 border-l border-white/10">
            <span className="text-white text-xl">Starter</span>
            <div className="text-white text-4xl font-bold">₹199</div>
            <button className="w-full py-3 rounded-full border border-[#D5F334] text-[#D5F334] text-sm hover:bg-[#D5F334]/10 transition">
              Get Started
            </button>
          </div>
          {/* Value Pack Header */}
          <div className="p-8 text-center flex flex-col items-center gap-4 border-l border-white/10">
            <span className="text-white text-xl">Value Pack</span>
            <div className="text-white text-4xl font-bold">₹399</div>
            <button className="w-full py-3 rounded-full bg-[#D5F334] text-[#0B0C1E] text-sm font-bold hover:opacity-90 transition">
              Get Started
            </button>
          </div>
        </div>

        {/* Table Body */}
        {pricingFeatures.map((row, index) => (
          <div
            key={index}
            className="grid grid-cols-3 border-b border-white/5 last:border-0 hover:bg-white/5 transition"
          >
            <div className="p-5 pl-10 text-white/80 text-sm flex items-center">
              {row.feature}
            </div>
            <div className="p-5 text-center text-white/60 text-sm border-l border-white/5 flex items-center justify-center">
              {typeof row.starter === "boolean" ? (
                row.starter ? (
                  <Image src="/check.svg" alt="Check" width={20} height={20} />
                ) : (
                  "—"
                )
              ) : (
                row.starter
              )}
            </div>
            <div className="p-5 text-center text-white/60 text-sm border-l border-white/5 flex items-center justify-center">
              {typeof row.value === "boolean" ? (
                row.value ? (
                  <Image src="/check.svg" alt="Check" width={20} height={20} />
                ) : (
                  "—"
                )
              ) : (
                row.value
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Add-on Section */}
      <div className="max-w-350 w-full bg-white/5 border border-white/10 rounded-full p-6 flex items-center justify-between px-12">
        <div className="flex gap-20">
          <span className="text-white/60 text-sm">Add-on</span>
          <span className="text-white text-sm">Premium Leather Tag</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-white text-3xl font-bold">₹150</span>
          <div className="w-12 h-6 bg-white/20 rounded-full relative">
            <div className="absolute right-1 top-1 w-4 h-4 bg-[#D5F334] rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
