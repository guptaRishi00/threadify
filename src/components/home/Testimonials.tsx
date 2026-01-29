"use client";

import { useRef, useState } from "react";
import { FaPlay, FaStar } from "react-icons/fa6";

const testimonials = [
  {
    name: "Sana Williams",
    role: "Solo Traveller",
    rating: 4.5,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    review: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
  },
  {
    name: "Alex Morgan",
    role: "Digital Nomad",
    rating: 5,
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
    review: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
  },
  {
    name: "Priya Sharma",
    role: "Frequent Flyer",
    rating: 4,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    review: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
  },
];

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [playIndex, setPlayIndex] = useState<number | null>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, offsetWidth } = scrollRef.current;
    const index = Math.round(scrollLeft / offsetWidth);
    if (index !== activeIndex) {
      setActiveIndex(index);
      setPlayIndex(null);
    }
  };

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTo({
      left: scrollRef.current.offsetWidth * index,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-[#0B0C1E] py-[100px] overflow-hidden">
      <div className="text-center mb-[80px] px-6">
        <h2 className="text-white text-[40px] md:text-[72px] font-bold font-ubuntu leading-tight">
          Customers <br />
          <span className="text-[#D5F334]">Love Threadify</span>
        </h2>
        <p className="text-white text-[18px] md:text-[24px] font-light mt-4">
          Quick, secure, and always reliable - just what they needed.
        </p>
      </div>

      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {testimonials.map((item, index) => (
          <div key={index} className="min-w-full snap-center px-6">
            <div className="max-w-[1300px] mx-auto">
              <div
                className="
                  flex flex-col lg:flex-row
                  rounded-[40px] lg:rounded-[100px]
                  overflow-hidden
                  min-h-[520px] lg:h-[600px]
                "
              >
                <div className="w-full lg:w-[45%] bg-white flex items-center justify-center min-h-[220px] relative">
                  {playIndex === index ? (
                    <video
                      src={item.videoUrl}
                      autoPlay
                      controls
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <button
                      onClick={() => setPlayIndex(index)}
                      className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px]
                        rounded-full bg-[#D9D9D9]
                        flex items-center justify-center pl-1
                        hover:scale-105 transition"
                    >
                      <FaPlay className="text-[#242020] text-[24px] lg:text-[30px]" />
                    </button>
                  )}
                </div>

                <div
                  className="
                    w-full lg:w-[55%]
                    bg-[#D5F334]
                    p-6 lg:p-[80px]
                    grid grid-rows-[auto_auto_1fr]
                  "
                >
                  <div>
                    <h3 className="text-[#0B0C1E] text-[28px] lg:text-[44px] font-bold mb-1">
                      {item.name}
                    </h3>
                    <p className="text-[#0B0C1E] text-[18px] lg:text-[24px] mb-3">
                      {item.role}
                    </p>

                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={`text-[18px] ${
                              i < Math.round(item.rating)
                                ? "text-[#0B0C1E]"
                                : "text-[#0B0C1E]/40"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-[#0B0C1E] text-[18px] font-medium">
                        {item.rating}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {item.review.map((text, i) => (
                      <p
                        key={i}
                        className="
                          text-[#0B0C1E]
                          text-[15px] lg:text-[18px]
                          leading-relaxed
                          line-clamp-3 lg:line-clamp-none
                        "
                      >
                        {text}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-4 mt-[60px] justify-center">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            className={`h-3 rounded-full transition-all duration-300 ${
              activeIndex === i ? "w-8 bg-[#D5F334]" : "w-3 bg-white/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
