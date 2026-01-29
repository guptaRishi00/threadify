import React from "react";

const WhyThisWorks = () => {
    const features = [
        "No ribbons. No hacks.",
        "Seen first. Found fast.",
        "Your number stays hidden. Always.",
        "300 mins talktime. On us.",
        "Premium leather tag included.",
        "All-weather. Tear-proof. Travel-tough.",
    ];

    return (
        <section className="w-full bg-[#0B0C1E] py-20 px-6 md:px-16 flex justify-center">
            <div className="max-w-[1440px] w-full flex flex-col gap-19">
                {/* Header */}
                <div>
                    <h2 className="font-ubuntu font-bold text-5xl md:text-[80px] leading-tight text-white mb-2">
                        Why This
                    </h2>
                    <h2 className="font-ubuntu font-bold text-5xl md:text-[80px] leading-tight text-[#D5F334]">
                        Just Works
                    </h2>
                </div>

                {/* List */}
                <div className="flex flex-col gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-6">
                            {/* Bullet Icon */}
                            <div
                                className="w-[38px] h-[38px] rounded-full flex-shrink-0"
                                style={{
                                    background: "linear-gradient(90deg, #D5F334 0%, rgba(213, 243, 52, 0) 100%)",
                                    backdropFilter: "blur(20px)",
                                    transform: "scaleX(-1)"
                                }}
                            ></div>
                            <p className="font-ubuntu text-xl md:text-3xl text-white">
                                {feature}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyThisWorks;
