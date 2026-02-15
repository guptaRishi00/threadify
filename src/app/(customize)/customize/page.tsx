"use client";

import ContactDetails from "@/components/customize/ContactDetails";
import Designs from "@/components/customize/Designs";
import Qr from "@/components/customize/Qr";
import QrCard from "@/components/customize/QrCard";
import Text from "@/components/customize/Text";
import Image from "next/image";
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { TbTextResize } from "react-icons/tb";
import { TbQrcode } from "react-icons/tb";
import { TbScan } from "react-icons/tb";
import { MdOutlineContactPhone } from "react-icons/md";

type Props = {};

export default function page({ }: Props) {
  const [activeTab, setActiveTab] = useState<string>("background");

  const [innerBg, setInnerBg] = useState<string>("bg-black");

  const [firstName, setFirstName] = useState<string>("Jack");
  const [lastName, setLastName] = useState<string>("Williams");

  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [instagram, setInstagram] = useState<string>("");

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
          className={`flex items-center flex-col gap-2 cursor-pointer hover:text-[#D5F334] ${activeTab === "qr" ? "text-[#D5F334]" : "text-white"
            }`}
          onClick={() => setActiveTab("qr")}
        >
          <TbQrcode size={20} />
          <p className="text-[10px]">QR Generate</p>
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
            className={`flex items-center flex-col gap-3 cursor-pointer hover:text-[#D5F334] ${activeTab === "qr" ? "text-[#D5F334]" : "text-white"
              }`}
            onClick={() => setActiveTab("qr")}
          >
            <TbQrcode size={30} />
            <p className="text-xs">QR Generate</p>
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
          {activeTab === "qr" && <Qr />}
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
        <div className="w-full lg:px-10 order-2 lg:order-0  lg:mt-0">
          <QrCard
            innerBgClass={innerBg}
            firstName={firstName}
            lastName={lastName}
          />
        </div>
      </div>
    </div>
  );
}
