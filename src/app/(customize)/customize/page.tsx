"use client";

import ContactDetails from "@/components/customize/ContactDetails";
import Designs from "@/components/customize/Designs";

import QrCard from "@/components/customize/QrCard";
import Text from "@/components/customize/Text";
import Image from "next/image";
import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import { IoCopyOutline } from "react-icons/io5";
import { TbTextResize } from "react-icons/tb";

import { MdOutlineContactPhone } from "react-icons/md";
import { HiOutlineDownload } from "react-icons/hi";

type Props = {};

export default function page({ }: Props) {
  const [activeTab, setActiveTab] = useState<string>("background");

  const [innerBg, setInnerBg] = useState<string>("bg-black");

  const [firstName, setFirstName] = useState<string>("Jack");
  const [lastName, setLastName] = useState<string>("Williams");

  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [instagram, setInstagram] = useState<string>("");

  const cardRef = useRef<HTMLDivElement>(null);

  const isReady =
    firstName.trim() !== "" &&
    lastName.trim() !== "" &&
    email.trim() !== "" &&
    phone.trim() !== "" &&
    instagram.trim() !== "";

  // Build a readable text so scanning the QR shows all details clearly
  const qrValue = [
    `Name: ${firstName} ${lastName}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    `Instagram: ${instagram}`,
  ].join("\n");

  const handleDownload = async () => {
    if (!cardRef.current || !isReady) return;
    try {
      const dataUrl = await toPng(cardRef.current, {
        cacheBust: true,
        pixelRatio: 3,
      });
      const link = document.createElement("a");
      link.download = `${firstName}-${lastName}-qr-card.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Failed to generate image:", err);
    }
  };

  return (
    <div className="bg-[#121432] w-full min-h-screen mt-5 p-4 lg:p-10 rounded-3xl flex flex-col">
      {/* Mobile Tab Navigation - horizontal on mobile */}
      <div className="flex lg:hidden items-center justify-center gap-6 py-4 mb-4">
        <div
          className={`flex items-center flex-col gap-2 cursor-pointer hover:text-[#D5F334] ${activeTab === "background" ? "text-[#D5F334]" : "text-white"
            }`}
          onClick={() => setActiveTab("background")}
        >
          <IoCopyOutline size={16} />
          <p className="text-[10px]">Background</p>
        </div>

        <div
          className={`flex items-center flex-col gap-2 cursor-pointer hover:text-[#D5F334] ${activeTab === "text" ? "text-[#D5F334]" : "text-white"
            }`}
          onClick={() => setActiveTab("text")}
        >
          <TbTextResize size={20} />
          <p className="text-[10px]">Text</p>
        </div>


        <div
          className={`flex items-center flex-col gap-2 cursor-pointer hover:text-[#D5F334] ${activeTab === "contact" ? "text-[#D5F334]" : "text-white"
            }`}
          onClick={() => setActiveTab("contact")}
        >
          <MdOutlineContactPhone size={20} />
          <p className="text-[10px]">Contact Details</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-0 lg:justify-between flex-1 w-full">
        {/* Desktop Tab Navigation - vertical, hidden on mobile */}
        <div className="hidden lg:flex flex-col justify-start items-center mr-5 gap-10 w-[25%]">
          <div
            className={`flex items-center flex-col gap-3 cursor-pointer hover:text-[#D5F334] ${activeTab === "background" ? "text-[#D5F334]" : "text-white"
              }`}
            onClick={() => setActiveTab("background")}
          >
            <IoCopyOutline size={20} />
            <p className="text-xs">Background</p>
          </div>

          <div
            className={`flex items-center flex-col gap-3 cursor-pointer hover:text-[#D5F334] ${activeTab === "text" ? "text-[#D5F334]" : "text-white"
              }`}
            onClick={() => setActiveTab("text")}
          >
            <TbTextResize size={30} />
            <p className="text-xs">Text</p>
          </div>


          <div
            className={`flex items-center flex-col gap-3 cursor-pointer hover:text-[#D5F334] ${activeTab === "contact" ? "text-[#D5F334]" : "text-white"
              }`}
            onClick={() => setActiveTab("contact")}
          >
            <MdOutlineContactPhone size={30} />
            <p className="text-xs">Contact Details</p>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex flex-col items-start gap-5 w-full px-2 lg:px-8 lg:border-x lg:border-white/10 h-auto lg:h-[90vh] overflow-y-auto scrollbar-hide order-1 lg:order-0">
          {activeTab === "background" && <Designs onSelect={setInnerBg} />}
          {activeTab === "text" && (
            <Text
              setFirstName={setFirstName}
              setLastName={setLastName}
              firstName={firstName}
              lastName={lastName}
            />
          )}

          {activeTab === "contact" && (
            <ContactDetails
              email={email}
              setEmail={setEmail}
              phone={phone}
              setPhone={setPhone}
              instagram={instagram}
              setInstagram={setInstagram}
            />
          )}
        </div>

        {/* QR Card Preview */}
        <div className="w-full lg:px-10 order-2 lg:order-0 lg:mt-0">
          <QrCard
            ref={cardRef}
            innerBgClass={innerBg}
            firstName={firstName}
            lastName={lastName}
            qrData={qrValue}
            isReady={isReady}
          />
          {isReady && (
            <button
              type="button"
              onClick={handleDownload}
              className="mt-4 w-full flex items-center justify-center gap-2 bg-[#D5F334] text-black font-semibold py-3 px-6 rounded-xl hover:brightness-110 transition-all duration-200 cursor-pointer"
            >
              <HiOutlineDownload size={20} />
              Download Card
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
