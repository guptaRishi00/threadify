import Image from "next/image";

const starterFeatures = [
  "1 Threadify Smart Tag: Matte-finish, pop-colour decal that makes your luggage unmissable - weather-proof, tear-proof, travel-proof.",
  "Includes ONE premium leather tag that instantly upgrades the look of any bag.",
  "Adds a stylish, professional look to your bag while keeping it safe..",
  "200 minutes of safe, call-masked talk time",
  "Instant setup, privacy protected.",
  "Ideal for personal bags, backpacks & daily travel",
];

const valuePackFeatures = [
  "2 Threadify Smart Tag: Matte-finish, pop-colour decal that makes your luggage unmissable - weather-proof, tear-proof, travel-proof.",
  "Includes TWO luxury leather tags crafted for travellers who want style + safety.",
  "Built to last with premium stitching and scratch-resistant finish for long-term travel.",
  "500 minutes of talk time shared across both tags",
  "Enhanced recovery for multiple bags.",
  "Maximum priority & convenience.",
];

export default function PricingHeroSection() {
  return (
    <div className="min-h-screen mt-10 lg:mt-0 w-full bg-[#0B0C1E] flex flex-col items-center py-12 md:py-20 px-4 md:px-6 font-ubuntu text-white">
      {/* Header Section */}
      <div className="mt-10 lg:mt-24 flex flex-col items-center text-center gap-4 mb-12 md:mb-20">
        <h1 className="font-bold text-4xl md:text-5xl lg:text-7xl leading-tight uppercase">
          Threadify <br /> Pricing <span className="text-[#D5F334]">Plans</span>
        </h1>
        <p className="text-white/60 font-light text-base md:text-lg">
          Simple plans for secure, stress-free travel
        </p>
      </div>

      {/* Main Pricing Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full  gap-8 px-2 md:px-10">
        {/* Starter Card */}
        <div className="bg-gradient-to-r from-[#FFFFFF00] to-[#D5F334] rounded-3xl p-px w-full">
          <div className="bg-gradient-to-r from-[#161729] to-[#111223] h-full rounded-[23px] p-8 md:p-16 flex flex-col gap-10">
            <div className="space-y-4">
              <p className="text-2xl font-medium">Starter</p>
              <p className="text-white/60">
                1 Smart Tag • 200 Minutes Talk Time
              </p>
              <div className="h-px w-full bg-white/10"></div>
            </div>

            <div className="space-y-6">
              <div className="flex items-end gap-2">
                <p className="text-5xl md:text-6xl font-bold">₹199</p>
                <div className="py-1 px-3 border border-white/40 rounded-full text-[10px] uppercase tracking-wider mb-2">
                  /month
                </div>
              </div>
              <button className="w-full md:w-fit border border-[#D5F334] bg-white/5 hover:bg-[#D5F334] hover:text-black transition-colors px-12 py-4 rounded-full font-medium">
                Get Started
              </button>
              <p className="text-lg md:text-xl font-light text-white/70">
                Perfect for individuals who want a secure way to recover lost
                luggage.
              </p>
              <div className="h-px w-full bg-white/10"></div>
            </div>

            <div className="flex flex-col gap-6">
              {starterFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <Image
                    src="/check.svg"
                    alt="check"
                    width={24}
                    height={24}
                    className="mt-1 flex-shrink-0"
                  />
                  <p className="text-base md:text-lg font-light text-white/70">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Value Pack Card */}
        <div className="bg-gradient-to-r from-[#FFFFFF00] to-[#D5F334] rounded-3xl p-px w-full">
          <div className="bg-gradient-to-r from-[#161729] to-[#111223] h-full rounded-[23px] p-8 md:p-16 flex flex-col gap-10">
            <div className="space-y-4">
              <p className="text-2xl font-medium">Value Pack</p>
              <p className="text-white/60">2 Smart Tags • 500 Shared Minutes</p>
              <div className="h-px w-full bg-white/10"></div>
            </div>

            <div className="space-y-6">
              <div className="flex items-end gap-2">
                <p className="text-5xl md:text-6xl font-bold">₹399</p>
                <div className="py-1 px-3 border border-white/40 rounded-full text-[10px] uppercase tracking-wider mb-2">
                  /month
                </div>
              </div>
              <button className="w-full md:w-fit bg-[#D5F334] text-black hover:bg-opacity-90 transition-opacity px-12 py-4 rounded-full font-medium">
                Get Started
              </button>
              <p className="text-lg md:text-xl font-light text-white/70">
                Best for families or frequent travellers who want more coverage.
              </p>
              <div className="h-px w-full bg-white/10"></div>
            </div>

            <div className="flex flex-col gap-6">
              {valuePackFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <Image
                    src="/check.svg"
                    alt="check"
                    width={24}
                    height={24}
                    className="mt-1 flex-shrink-0"
                  />
                  <p className="text-base md:text-lg font-light text-white/70">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Leather Tag Bar */}
      <div className="w-full px-2 md:px-10 mt-8 mb-20">
        <div className="bg-gradient-to-r from-[#FFFFFF00] to-[#D5F334] rounded-3xl p-px">
          <div className="bg-gradient-to-r from-[#161729] to-[#111223] rounded-[23px] px-6 py-8 md:px-16 md:py-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <p className="text-3xl font-medium">Leather Tag</p>

            <div className="flex flex-col md:flex-row items-center gap-4">
              <Image src="/check.svg" alt="check" width={32} height={32} />
              <p className="text-base md:text-lg text-white/70 max-w-md">
                Upgrade any bag with a premium, durable leather tag for added
                style and protection
              </p>
            </div>

            <div className="flex items-center gap-6">
              <p className="text-5xl md:text-6xl font-bold">₹150</p>
              <div className="w-[68px] h-[36px] rounded-full border border-gray-500/50 flex items-center px-1.5 flex-shrink-0">
                <div className="w-6 h-6 rounded-full bg-[#D5F334] shadow-[0_0_10px_rgba(213,243,52,0.4)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
