import React from "react";

const features = [
  {
    title: "Privacy First",
    description:
      "Your personal details stay hidden — only you choose what to share.",
  },
  {
    title: "Smart QR Technology",
    description:
      "Instant scan. Instant message. Instant return. No apps. No awkward sign-ups.",
  },
  {
    title: "Custom Designs",
    description:
      "Make your tag match your style. Minimal, bold, fun — your vibe, your QR.",
  },
  {
    title: "Worldwide Compatibility",
    description: "Every phone can scan your tag — no special app needed.",
  },
];

const WhyChoose = () => {
  return (
    <section className="w-full bg-[#0B0C1E] py-[100px] px-6 md:px-16 flex justify-center font-ubuntu">
      <div className="max-w-[1100px] w-full flex flex-col items-center gap-16">
        <div className="text-center space-y-4">
          <h2 className="text-white text-[42px] md:text-[60px] font-bold leading-tight">
            Why Choose <span className="text-[#D5F334]">Threadify?</span>
          </h2>
          <p className="text-white/90 text-[16px] md:text-[18px] font-light max-w-[500px] mx-auto leading-relaxed">
            Smart, secure, and built for people who like traveling not losing
            things.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {features.map((item, index) => (
            <div
              key={index}
              className="
                w-full
                aspect-[4/3]
                md:h-[400px]
                rounded-[40px]
                p-10 md:p-12
                flex flex-col
                justify-start
                border border-white/5
                transition-transform hover:scale-[1.02] duration-300
              "
              style={{
                background:
                  "linear-gradient(135deg, rgba(11, 12, 30, 0.8) 0%, #D5F334 150%)",
              }}
            >
              <h3 className="text-[#D5F334] text-[32px] md:text-[36px] font-bold mb-6">
                {item.title}
              </h3>

              <p className="text-white text-[16px] md:text-[18px] font-light leading-relaxed max-w-[320px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
