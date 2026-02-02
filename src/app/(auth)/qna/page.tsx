"use client";

import React, { useState, useRef } from "react";

type Props = {};

export default function Qna({}: Props) {
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState<string[]>(new Array(4).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleOtpChange = (value: string, index: number) => {
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
    <main className="bg-[#0B0C1E] min-h-screen flex items-center justify-center py-20 px-6 font-ubuntu">
      <div className="bg-linear-to-r from-[#D5F334] to-[#111223] w-full max-w-200 rounded-[60px] p-px">
        <div className="bg-[#111223] w-full h-auto rounded-[60px] p-10 lg:p-20">
          {step === 1 ? (
            <div className="flex flex-col items-center gap-12">
              <div className="text-center space-y-4">
                <h1 className="text-5xl font-bold text-white uppercase tracking-tight">
                  Lorem ipsum <span className="text-[#D5F334]">dolor</span>
                </h1>
                <p className="text-white/70 text-lg">Lorem ipsum dolor amet</p>
              </div>

              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-3">
                  <label className="text-[#D5F334] text-sm font-medium ml-1">
                    Enter first name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    className="w-full h-14 bg-white rounded-full px-8 text-black outline-none"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-[#D5F334] text-sm font-medium ml-1">
                    Enter last name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    className="w-full h-14 bg-white rounded-full px-8 text-black outline-none"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-[#D5F334] text-sm font-medium ml-1">
                    Enter phone number
                  </label>
                  <div className="flex h-14 w-full">
                    <div className="bg-[#D5F334] text-black font-bold h-full px-5 flex items-center rounded-l-full">
                      +91
                    </div>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      className="flex-1 bg-white rounded-r-full px-6 text-black outline-none"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-[#D5F334] text-sm font-medium ml-1">
                    Enter regional
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      readOnly
                      value="India"
                      className="w-full h-14 bg-white rounded-full px-8 text-black outline-none cursor-default"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#D5F334]" />
                  </div>
                </div>
              </div>

              <button
                onClick={() => setStep(2)}
                className="w-full max-w-125 h-14 bg-[#D5F334] text-black font-bold text-lg rounded-full hover:opacity-90 transition-opacity mt-4"
              >
                Confirm
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-12">
              <div className="text-center space-y-4">
                <h1 className="text-5xl font-bold text-white uppercase tracking-tight">
                  Lorem <span className="text-[#D5F334]">ipsum dolor</span>
                </h1>
                <p className="text-white/70 text-lg max-w-sm mx-auto leading-relaxed">
                  Lorem ipsum dolor amet, consectetur eiusmod tempor incidi
                </p>
              </div>

              <div className="flex flex-col items-center gap-8 w-full max-w-sm">
                <div className="flex justify-between w-full gap-4">
                  {otp.map((data, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength={1}
                      ref={(el) => {
                        inputRefs.current[index] = el;
                      }}
                      value={data}
                      onChange={(e) => handleOtpChange(e.target.value, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-3xl text-black text-center text-3xl font-bold outline-none focus:ring-4 focus:ring-[#D5F334]/30 transition-all placeholder:text-gray-300"
                      placeholder="•"
                    />
                  ))}
                </div>

                <div className="w-full space-y-4">
                  <button className="w-full h-14 bg-[#D5F334] text-black font-bold text-lg rounded-full hover:opacity-90 transition-opacity">
                    Verify Account
                  </button>
                  <p className="text-xs uppercase tracking-widest text-white/60 ml-1">
                    Resend{" "}
                    <span className="text-[#D5F334] font-bold">1:00sec</span>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
