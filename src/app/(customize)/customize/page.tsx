"use client";

import { useState } from "react";
import Image from "next/image";
import { HiOutlineQrCode } from "react-icons/hi2";
import { LuType } from "react-icons/lu";
import { HiOutlineDocumentText } from "react-icons/hi2";

type TabId = "background" | "text" | "qr";

const tabs = [
  {
    id: "background" as TabId,
    name: "Background",
    icon: HiOutlineDocumentText,
  },
  { id: "text" as TabId, name: "Text", icon: LuType },
  { id: "qr" as TabId, name: "QR Generate", icon: HiOutlineQrCode },
];

const backgroundOptions = [
  { id: 1, color: "#FFFFFF" },
  { id: 2, color: "#F5F5F5" },
  { id: 3, color: "#E8E8E8" },
  { id: 4, color: "#D9D9D9" },
];

export default function Customize() {
  const [activeTab, setActiveTab] = useState<TabId>("text");
  const [firstName, setFirstName] = useState("Jack");
  const [lastName, setLastName] = useState("William");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [selectedBackground, setSelectedBackground] = useState(1);

  const maxMessageLength = 100;

  const renderTabContent = () => {
    switch (activeTab) {
      case "background":
        return (
          <div className="flex-1 flex flex-col gap-4 max-w-md">
            {backgroundOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setSelectedBackground(option.id)}
                className={`w-full h-16 rounded-xl transition-all duration-300 cursor-pointer ${
                  selectedBackground === option.id
                    ? "ring-2 ring-[#D5F334] ring-offset-2 ring-offset-[#121432]"
                    : "hover:ring-1 hover:ring-white/30"
                }`}
                style={{ backgroundColor: option.color }}
              />
            ))}
          </div>
        );

      case "text":
        return (
          <div className="flex-1 flex flex-col gap-4 max-w-md">
            <div className="relative">
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                className="w-full bg-white border border-transparent rounded-xl px-5 py-4 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D5F334] transition-all duration-300"
              />
            </div>

            <div className="relative">
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                className="w-full bg-white border border-transparent rounded-xl px-5 py-4 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D5F334] transition-all duration-300"
              />
            </div>
          </div>
        );

      case "qr":
        return (
          <div className="flex-1 flex flex-col gap-5 max-w-md">
            <div className="flex flex-col gap-2">
              <label className="text-[#D5F334] text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full bg-white border border-transparent rounded-xl px-5 py-4 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D5F334] transition-all duration-300"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[#D5F334] text-sm font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
                className="w-full bg-white border border-transparent rounded-xl px-5 py-4 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D5F334] transition-all duration-300"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[#D5F334] text-sm font-medium">
                Additional Message
              </label>
              <div className="relative">
                <textarea
                  value={message}
                  onChange={(e) => {
                    if (e.target.value.length <= maxMessageLength) {
                      setMessage(e.target.value);
                    }
                  }}
                  placeholder="Enter your message"
                  rows={4}
                  className="w-full bg-white border border-transparent rounded-xl px-5 py-4 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D5F334] transition-all duration-300 resize-none"
                />
                <span className="absolute bottom-3 right-4 text-gray-400 text-xs">
                  {message.length}/{maxMessageLength}
                </span>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full h-auto bg-[#121432] p-10 rounded-3xl mt-5">
      <div className="flex gap-10">
        {/* Left Panel - Customization Options */}
        <div className="flex gap-8 flex-1">
          {/* Tabs */}
          <div className="flex flex-col gap-2 border-r border-[#2A2D5E] pr-6">
            {tabs.map((tab) => {
              const isActive = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex flex-col items-center gap-2 p-4 rounded-xl transition-all duration-300 cursor-pointer min-w-20 ${
                    isActive
                      ? "text-[#D5F334]"
                      : "text-white/50 hover:text-white"
                  }`}
                >
                  {/* Active indicator line */}
                  {isActive && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-10 bg-[#D5F334] rounded-r-full" />
                  )}
                  <tab.icon size={22} />
                  <span className="text-[10px] font-medium text-center leading-tight">
                    {tab.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Form Fields based on active tab */}
          {renderTabContent()}

          <div className="border-r border-[#2A2D5E] pr-6"></div>
        </div>

        {/* Right Panel - QR Card Preview */}
        <div className="shrink-0">
          <div className="relative w-62.5 h-105 overflow-hidden shadow-2xl shadow-[#D5F334]/10 group">
            {/* QR Image as Background */}
            <Image
              src="/qr-image.png"
              alt="QR Code Card"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              priority
            />

            {/* Overlay for name display */}
            <div className="absolute bottom-0 left-0 right-0 bg-[#D5F334] p-4">
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="text-xl font-bold text-black uppercase tracking-tight">
                    {firstName || "Jack"}
                  </h3>
                  <p className="text-xs text-black/80 font-medium uppercase tracking-widest">
                    {lastName || "William"}
                  </p>
                </div>
                <Image
                  src="/logo.svg"
                  alt="Threadify Logo"
                  width={70}
                  height={18}
                  className="opacity-90 invert"
                />
              </div>
            </div>

            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 bg-linear-to-t from-[#D5F334]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>

          {/* Card shadow/reflection */}
          <div className="mt-4 mx-auto w-57.5 h-4 bg-[#D5F334]/10 blur-xl rounded-full" />
        </div>
      </div>
    </div>
  );
}
