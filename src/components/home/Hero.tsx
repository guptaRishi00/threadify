import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full bg-[#0B0C1E] overflow-hidden h-auto flex items-center justify-center py-20 lg:py-62">
      <div className="relative w-full mx-auto h-auto px-6 md:px-14 flex flex-col lg:flex-row justify-center items-start">
        <div className="relative z-20 flex flex-col items-center lg:items-start text-center lg:text-left w-full gap-5">
          <div className="mb-6 rounded-full flex items-center justify-center p-[0.6px] bg-linear-to-r from-[#D5F334] to-[#121324]">
            <div className="bg-linear-to-r from-[#171829] to-[#121324] rounded-full px-6 py-2">
              <span className="font-ubuntu font-light text-[16px] text-white tracking-wide">
                smart qr luggage tag
              </span>
            </div>
          </div>

          <h1 className="w-full font-ubuntu font-bold uppercase text-white text-[38px] sm:text-[56px] md:text-[70px] lg:text-[6.56rem] leading-[1.1] lg:leading-[1.05] mb-6">
            NEVER LOSE YOUR <br />
            <span className="text-[#D5F334]">LUGGAGE AGAIN</span>
          </h1>

          <p className="font-ubuntu font-light text-[18px] md:text-3xl lg:text-4xl leading-snug md:leading-9.5 text-white max-w-full lg:max-w-2xl mb-10">
            One scan connects you to the owner safely and privately.
          </p>

          <Link
            href="/customize"
            className="w-full sm:w-90 h-16 lg:h-18 bg-[#D5F334] rounded-[41px] text-[#0B0C1E] text-[20px] lg:text-[22px] font-ubuntu hover:bg-opacity-90 transition mb-12 lg:mb-17.5"
          >
            Customize Your QR
          </Link>

          <div className="flex flex-col items-center lg:items-start">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D5F334]" />
              <span className="font-ubuntu font-light text-[18px] lg:text-[22px] text-white">
                Active User
              </span>
            </div>

            <div className="flex items-center gap-6">
              <span className="font-ubuntu font-bold text-[36px] lg:text-[48px] text-white">
                22K+
              </span>
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 lg:w-9.5 lg:h-9.5 rounded-full border border-[#0B0C1E] bg-white overflow-hidden relative"
                  >
                    <Image
                      src={`https://randomuser.me/api/portraits/${i % 2 ? "women" : "men"}/${40 + i}.jpg`}
                      alt="User"
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-12 lg:mt-0 lg:absolute lg:right-10 lg:-top-8 z-10 w-full lg:w-1/2 flex justify-center lg:justify-end">
          <Image
            src="/heroImage.svg"
            alt="Hero Image"
            width={600}
            height={600}
            className="w-[80%] md:w-[60%] lg:w-full h-auto max-w-xl lg:max-w-none mx-auto lg:mx-0"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
