import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full bg-[#0B0C1E] overflow-hidden h-auto flex items-center justify-center py-20 lg:py-62">
      <div className="relative w-full mx-auto h-auto px-6 md:px-14 flex flex-col lg:flex-row justify-center items-start">
        <div className="relative z-20 flex flex-col items-center lg:items-start text-center lg:text-left w-full gap-5">
          <h1 className="mt-16 md:mt-0 w-full font-ubuntu font-bold uppercase text-white text-2xl sm:text-[56px] md:text-[70px] lg:text-[6.56rem] leading-[1.1] lg:leading-[1.05] mb-6">
            NEVER LOSE YOUR <br />
            <span className="text-[#D5F334]">LUGGAGE AGAIN</span>
          </h1>

          <p className="font-ubuntu font-light text-md md:text-3xl lg:text-4xl leading-snug md:leading-9.5 text-white max-w-full lg:max-w-2xl mb-10">
            One scan connects you to the owner safely and privately.
          </p>

          <Link
            href="/customize"
            className="w-60 h-12 sm:w-90 sm:h-16 lg:h-18 bg-[#D5F334] rounded-[41px] text-[#0B0C1E] text-base lg:text-[22px] font-ubuntu hover:bg-opacity-90 transition mb-8 lg:mb-17.5 flex items-center justify-center"
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

        <div className="relative mt-12 lg:mt-0 lg:absolute lg:right-10 lg:-top-28 z-10 w-full lg:w-1/2 flex justify-center lg:justify-end">
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
