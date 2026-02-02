"use client";

import { useRef, useState, useEffect } from "react";
import { FaPlay, FaStar } from "react-icons/fa6";

const testimonials = [
  {
    name: "Sana Williams",
    role: "Solo Traveller",
    rating: 4.5,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    review: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    ],
  },
  {
    name: "Alex Morgan",
    role: "Digital Nomad",
    rating: 5,
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
    review: [
      "Threadify has completely changed how I manage my workflow while traveling. The security is top-notch and the interface is incredibly intuitive.",
    ],
  },
  {
    name: "Priya Sharma",
    role: "Frequent Flyer",
    rating: 4,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    review: [
      "Quick, secure, and always reliable. I never have to worry about my connections anymore. Highly recommended for anyone on the go!",
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
      setPlayIndex(null); // Stop video when scrolling away
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
    <section className="w-full bg-[#0B0C1E] py-16 md:py-[100px] overflow-hidden">
      {/* Header Section */}
      <div className="text-center mb-10 md:mb-[80px] px-6">
        <h2 className="text-white text-4xl md:text-6xl lg:text-[72px] font-bold font-ubuntu leading-[1.1]">
          Customers <br />
          <span className="text-[#D5F334]">Love Threadify</span>
        </h2>
        <p className="text-white/80 text-lg md:text-[24px] font-light mt-4 max-w-2xl mx-auto">
          Quick, secure, and always reliable — just what they needed.
        </p>
      </div>

      {/* Carousel Container */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {testimonials.map((item, index) => (
          <div key={index} className="min-w-full snap-center px-4 md:px-6">
            <div className="max-w-[1200px] mx-auto">
              <div
                className="
                  flex flex-col lg:flex-row
                  rounded-[32px] lg:rounded-[100px]
                  overflow-hidden
                  bg-[#D5F334]
                  min-h-[500px]
                "
              >
                {/* Video/Thumbnail Section */}
                <div className="w-full lg:w-[45%] bg-white flex items-center justify-center aspect-video lg:aspect-auto relative min-h-[250px] lg:min-h-full">
                  {playIndex === index ? (
                    <video
                      src={item.videoUrl}
                      autoPlay
                      controls
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                      {/* Optional: Add a poster image here */}
                      <button
                        onClick={() => setPlayIndex(index)}
                        className="w-16 h-16 lg:w-[100px] lg:h-[100px]
                        rounded-full bg-[#0B0C1E]/10 backdrop-blur-sm
                        flex items-center justify-center pl-1
                        hover:scale-110 transition-transform duration-300"
                        aria-label="Play Video"
                      >
                        <FaPlay className="text-[#0B0C1E] text-xl lg:text-[30px]" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Text Content Section */}
                <div
                  className="
                    w-full lg:w-[55%]
                    p-8 lg:p-[60px_80px]
                    flex flex-col justify-center
                  "
                >
                  <div className="mb-6">
                    <h3 className="text-[#0B0C1E] text-3xl lg:text-[44px] font-bold leading-tight">
                      {item.name}
                    </h3>
                    <p className="text-[#0B0C1E]/80 text-lg lg:text-[24px] font-medium">
                      {item.role}
                    </p>

                    <div className="flex items-center gap-2 mt-4">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={`text-lg ${
                              i < Math.floor(item.rating)
                                ? "text-[#0B0C1E]"
                                : "text-[#0B0C1E]/20"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-[#0B0C1E] text-lg font-bold ml-1">
                        {item.rating}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {item.review.map((text, i) => (
                      <p
                        key={i}
                        className="
                          text-[#0B0C1E]
                          text-base lg:text-xl
                          leading-relaxed
                          italic
                        "
                      >
                        "{text}"
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Pagination */}
      <div className="flex gap-3 mt-10 justify-center">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            className={`h-2.5 rounded-full transition-all duration-500 ${
              activeIndex === i ? "w-10 bg-[#D5F334]" : "w-2.5 bg-white/30"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
