import { FaQrcode, FaSuitcase } from "react-icons/fa6";
import { MdQrCodeScanner } from "react-icons/md";

const steps = [
  {
    icon: FaQrcode,
    title: "Create your QR sticker",
    description: "Choose your design, colors, and the info you want to share.",
  },
  {
    icon: FaSuitcase,
    title: "Place it on your luggage",
    description: "Attach the sticker anywhere you want quick identification.",
  },
  {
    icon: MdQrCodeScanner,
    title: "Instant alerts when scanned",
    description: "If someone finds your item, you’ll be notified immediately.",
  },
];

const HowItWorks = () => {
  return (
    <section className="w-full bg-[#0B0C1E] py-20 md:py-32 px-6 md:px-16">
      <div className="w-full mx-auto flex flex-col gap-20">
        <div className="text-center space-y-6">
          <h2 className="text-white text-[40px] md:text-[64px] font-bold font-ubuntu leading-tight">
            How It <span className="text-[#D5F334]">Works</span>
          </h2>
          <p className="text-white/70 text-[18px] md:text-[20px] font-light max-w-sm mx-auto leading-relaxed">
            Just three simple steps to keep your belongings safe.
          </p>
        </div>

        <div className="flex flex-col gap-16 w-full lg:mt-30">
          {steps.map((item, index) => (
            <div
              key={index}
              className="flex flex-row items-center gap-8 md:gap-12 group"
            >
              <div className="relative shrink-0">
                <div className="w-[85px] h-[85px] md:w-[94px] md:h-[94px] rounded-full flex items-center justify-center bg-white/5 border border-white/10 relative overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-40"
                    style={{
                      background:
                        "linear-gradient(135deg, #D5F334 0%, transparent 60%)",
                    }}
                  />
                  <item.icon className="text-[#D5F334] text-[32px] md:text-[36px] relative z-10" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-[#D5F334] text-[22px] md:text-[28px] font-bold font-ubuntu">
                  {item.title}
                </h3>
                <p className="text-white/60 text-[16px] md:text-[18px] font-light leading-snug max-w-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
