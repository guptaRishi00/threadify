import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="bg-[#0B0C1E] h-screen flex items-center justify-center py-10 text-white font-sans">
      <div className="bg-linear-to-r from-[#D5F334] to-[#111223] w-full max-w-175 h-auto rounded-4xl p-px">
        <div className="bg-linear-to-r from-[#161729] to-[#111223] w-full h-auto rounded-4xl">
          <div className="flex flex-col items-center justify-center gap-12 p-12">
            <div className="flex flex-col items-center justify-center gap-6">
              <p className="text-5xl font-semibold">
                LogIn or <span className="text-[#D5F334]">SignUp</span>
              </p>
              <p className="text-center text-xs text-white max-w-[320px] leading-relaxed">
                Lorem ipsum dolor amet, consectetur eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
            </div>

            <div className="w-full max-w-95 flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                {/* <p className="text-[#D5F334] font-medium text-sm ml-1">Email</p> */}
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full bg-white rounded-full py-3 px-6 text-gray-800 outline-hidden placeholder:text-gray-400"
                />
              </div>

              <button className="w-full cursor-pointer bg-[#D5F334] text-black py-3 rounded-full hover:bg-[#c4e22e] transition-colors">
                Continue
              </button>
            </div>

            <div className="w-full max-w-95 flex items-center gap-4">
              <div className="h-px bg-gray-700 flex-1"></div>
              <span className="text-xs text-gray-400">Or</span>
              <div className="h-px bg-gray-700 flex-1"></div>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <button className="flex items-center cursor-pointer gap-2 border border-[#D5F334] rounded-full px-5 py-2 text-sm text-[#D5F334] hover:bg-[#D5F334]/10 transition-all">
                <FaGoogle size={18} /> Google
              </button>
              <button className="flex items-center cursor-pointer gap-2 border border-[#D5F334] rounded-full px-5 py-2 text-sm text-[#D5F334] hover:bg-[#D5F334]/10 transition-all">
                <FaFacebook size={18} /> Facebook
              </button>
              <button className="flex items-center cursor-pointer gap-2 border border-[#D5F334] rounded-full px-5 py-2 text-sm text-[#D5F334] hover:bg-[#D5F334]/10 transition-all">
                <RiTwitterXLine size={18} /> Twitter
              </button>
            </div>

            <p className="text-[11px] text-gray-500 text-center mt-4 leading-relaxed tracking-wide">
              By signing up, I agree to the{" "}
              <span className="text-[#D5F334] cursor-pointer hover:underline">
                Terms & Conditions
              </span>
              <br />
              and{" "}
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
