"use client";

import React, { useState, useRef, useEffect } from "react";

export default function OtpVerifyPage() {
  const [otp, setOtp] = useState<string[]>(new Array(4).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (value: string, index: number) => {
    if (isNaN(Number(value))) return;

    const newOtp = [...otp];

    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="bg-[#0B0C1E] h-screen flex items-center justify-center py-10 text-white font-sans">
      {/* Outer container styling matching the Login page design */}
      <div className="bg-linear-to-r from-[#D5F334] to-[#111223] w-full max-w-175 h-auto rounded-4xl p-px">
        <div className="bg-linear-to-r from-[#161729] to-[#111223] w-full h-auto rounded-4xl">
          <div className="flex flex-col items-center justify-center gap-12 p-12">
            <div className="flex flex-col items-center justify-center gap-6">
              <h1 className="text-5xl font-semibold text-center">
                Lorem <span className="text-[#D5F334]">ipsum dolor</span>
              </h1>
              <p className="text-center text-xs text-white/70 max-w-[320px] leading-relaxed">
                Lorem ipsum dolor amet, consectetur eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
            </div>

            <div className="w-full max-w-95 flex flex-col gap-8">
              <div className="flex justify-between gap-4">
                {otp.map((data, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength={1}
                    ref={(el) => {
                      inputRefs.current[index] = el;
                    }}
                    value={data}
                    onChange={(e) => handleChange(e.target.value, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl text-black text-center text-3xl font-bold outline-hidden focus:ring-2 focus:ring-[#D5F334] transition-all"
                  />
                ))}
              </div>

              <div className="flex flex-col gap-4">
                <button className="w-full cursor-pointer bg-[#D5F334] text-black py-4 rounded-full font-semibold hover:bg-[#c4e22e] transition-colors">
                  Verify Account
                </button>

                <p className="text-xs uppercase tracking-widest ml-1">
                  Resend <span className="text-[#D5F334] ml-1">1:00sec</span>
                </p>
              </div>
            </div>

            <p className="text-[11px] text-gray-500 text-center mt-4 leading-relaxed tracking-wide">
              By signing up, I agree to the{" "}
              <span className="text-[#D5F334] cursor-pointer hover:underline">
                Terms & Conditions
              </span>
              <br />
              and
              <span className="text-[#D5F334] cursor-pointer hover:underline">
                Privacy Policy
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
