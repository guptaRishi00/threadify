"use client";

import React, { useState } from "react";
import {
  Headphones,
  Briefcase,
  Camera,
  Plus,
  Minus,
  Loader2,
} from "lucide-react";

const faqData = [
  {
    question: "What happens if someone finds my luggage?",
    answer:
      "Our system allows the finder to scan your QR code and contact you securely without revealing your personal phone number or address.",
  },
  {
    question: "Do I need an app to use Threadify?",
    answer:
      "Nope. Everything works through a simple QR scan that opens a secure web-link. You don't need to download any app, install anything, or sign up — just scan and you're instantly connected.",
  },
  {
    question: "Is my personal information safe?",
    answer:
      "Yes, we use advanced encryption and call-masking technology to ensure your private details are never exposed to strangers.",
  },
];

export default function Contact() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  // 1. Updated state to use "message" to match Apps Script
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbwJ36VElUqZ3npZFJYmbVGPJBmksh_A10DC1zP020DzWtDqznXImL_BLstqtGNmwZfXAg/exec";

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-[#0B0C1E] pt-10 pb-20 px-6 font-ubuntu">
      <section className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 my-32">
        <div className="flex flex-col justify-center lg:order-last">
          <h1 className="text-white text-5xl lg:text-6xl font-bold mb-4">
            Get In <span className="text-[#D5F334]">Touch</span>
          </h1>
          <p className="text-white/70 text-lg mb-12 max-w-md">
            Have a question? We reply faster than your baggage carousel spins.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full border border-[#D5F334] flex items-center justify-center shrink-0">
                <Headphones className="text-[#D5F334]" size={20} />
              </div>
              <div>
                <h4 className="text-[#D5F334] font-bold text-lg">
                  Customer Support
                </h4>
                <p className="text-white/60 text-sm">
                  Quick help for anything Threadify-related.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full border border-[#D5F334] flex items-center justify-center shrink-0">
                <Briefcase className="text-[#D5F334]" size={20} />
              </div>
              <div>
                <h4 className="text-[#D5F334] font-bold text-lg">
                  Business Partnerships
                </h4>
                <p className="text-white/60 text-sm">
                  Want to collaborate? We&apos;d love to chat.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full border border-[#D5F334] flex items-center justify-center shrink-0">
                <Camera className="text-[#D5F334]" size={20} />
              </div>
              <div>
                <h4 className="text-[#D5F334] font-bold text-lg">
                  Media & Press
                </h4>
                <p className="text-white/60 text-sm">
                  For interviews, features, or product demos.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FORM SECTION */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-10 lg:order-first"
        >
          <div className="flex flex-col items-start gap-4">
            <label className="text-[#D5F334] text-sm font-medium">Name</label>
            <input
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full h-14 bg-white rounded-full px-8 text-[#0B0C1E] placeholder:text-gray-400 outline-none"
            />
          </div>

          <div className="flex flex-col items-start gap-4">
            <label className="text-[#D5F334] text-sm font-medium">
              Enter Email
            </label>
            <input
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email id"
              className="w-full h-14 bg-white rounded-full px-8 text-[#0B0C1E] placeholder:text-gray-400 outline-none"
            />
          </div>

          <div className="flex flex-col items-start gap-4">
            <label className="text-[#D5F334] text-sm font-medium">
              Message
            </label>
            <textarea
              name="message" // Changed name to "message"
              required
              value={formData.message} // Changed value to formData.message
              onChange={handleChange}
              placeholder="How can we help?"
              className="w-full h-40 bg-white rounded-[30px] p-8 text-[#0B0C1E] placeholder:text-gray-400 outline-none resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full h-14 bg-[#D5F334] rounded-full text-[#0B0C1E] font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            {status === "loading" ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              "Submit"
            )}
          </button>

          {status === "success" && (
            <p className="text-[#D5F334] text-center font-medium">
              Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-500 text-center font-medium">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </section>

      {/* FAQ Section remains the same */}
      <section className="max-w-[1000px] mx-auto flex flex-col items-center">
        <div className="mb-6 rounded-full flex items-center justify-center p-[0.6px] bg-linear-to-r from-[#D5F334] to-[#121324]">
          <div className="bg-linear-to-r from-[#171829] to-[#121324] rounded-full px-6 py-2">
            <span className="font-light text-[14px] text-white tracking-wide">
              Got Questions?
            </span>
          </div>
        </div>

        <h2 className="text-white text-5xl lg:text-7xl font-bold uppercase mb-4 text-center">
          FREQUENTLY <span className="text-[#D5F334]">ASKED</span>
        </h2>
        <p className="text-white/70 text-center max-w-lg mb-16">
          Everything you need to know about keeping your gear safe.
        </p>

        <div className="w-full space-y-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="group cursor-pointer rounded-[40px] overflow-hidden transition-all duration-500 border border-white/5"
              style={{
                background:
                  openIndex === index
                    ? "linear-gradient(135deg, rgba(21, 22, 45, 1) 0%, rgba(213, 243, 52, 0.4) 100%)"
                    : "rgba(255, 255, 255, 0.03)",
              }}
            >
              <div className="p-8 lg:p-10 flex items-center justify-between">
                <h3 className="text-white text-xl lg:text-2xl font-bold">
                  {item.question}
                </h3>
                <div className="w-12 h-12 bg-[#0B0C1E] rounded-full flex items-center justify-center shrink-0">
                  {openIndex === index ? (
                    <Minus className="text-[#D5F334]" size={24} />
                  ) : (
                    <Plus className="text-[#D5F334]" size={24} />
                  )}
                </div>
              </div>

              <div
                className={`px-8 lg:px-10 overflow-hidden transition-all duration-500 ${
                  openIndex === index ? "max-h-60 pb-10" : "max-h-0"
                }`}
              >
                <p className="text-white/80 text-lg leading-relaxed max-w-2xl">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
