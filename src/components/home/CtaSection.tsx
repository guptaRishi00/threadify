import Link from "next/link";

const CtaSection = () => {
  return (
    <section className="w-full bg-[#D5F334] py-8 md:py-12 lg:py-16 flex items-center justify-center">
      <div className="max-w-[1440px] w-full px-4 sm:px-6 text-center flex flex-col items-center gap-6 sm:gap-8">
        <h2
          className="text-[#0B0C1E]
            text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px]
            font-bold font-ubuntu leading-tight"
        >
          Travel Smart. Travel Safe.
        </h2>

        <p
          className="text-[#0B0C1E]
            text-[18px] sm:text-[16px] md:text-[20px] lg:text-xl
            font-light font-ubuntu max-w-[800px]"
        >
          Create your personalized QR tag and travel with peace of mind.
        </p>

        <Link
          href="/customize"
          className="mt-2 sm:mt-4
            px-6 sm:px-8 md:px-10
            py-3 sm:py-4
            bg-[#0B0C1E]
            rounded-full
            font-ubuntu
            text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]
            font-normal
            text-white
            transition-colors duration-300
            hover:text-[#D5F334]"
        >
          Customize Your QR
        </Link>
      </div>
    </section>
  );
};

export default CtaSection;
