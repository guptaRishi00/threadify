"use client";

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

type Props = {};

export default function page({}: Props) {
  const [activeTab, setActiveTab] = useState<string>("background");

  const [innerBg, setInnerBg] = useState<string>("bg-black");

  const [firstName, setFirstName] = useState<string>("Jack");
  const [lastName, setLastName] = useState<string>("Williams");

  return (
    <div className="bg-[#121432] w-full min-h-screen mt-5 p-10 rounded-3xl flex flex-col">
      <div className="flex items-stretch justify-between flex-1 w-full">
        <div className="flex flex-col justify-start items-center mr-5 gap-10 w-[25%] ">
          <div
            className={`flex items-center flex-col gap-3 cursor-pointer hover:text-[#D5F334] ${
              activeTab === "background" ? "text-[#D5F334]" : "text-white"
            }`}
            onClick={() => setActiveTab("background")}
          >
            <IoCopyOutline size={20} />
            <p className="text-xs">Background</p>
          </div>

          <div
            className={`flex items-center flex-col gap-3 cursor-pointer hover:text-[#D5F334] ${
              activeTab === "text" ? "text-[#D5F334]" : "text-white"
            }`}
            onClick={() => setActiveTab("text")}
          >
            <TbTextResize size={30} />
            <p className="text-xs">Text</p>
          </div>

          <div
            className={`flex items-center flex-col gap-3 cursor-pointer hover:text-[#D5F334] ${
              activeTab === "qr" ? "text-[#D5F334]" : "text-white"
            }`}
            onClick={() => setActiveTab("qr")}
          >
            <TbQrcode size={30} />
            <p className="text-xs">QR Generate</p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-5 w-full px-8 border-x border-white/10 h-[90vh] overflow-y-auto scrollbar-hide">
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
        </div>
        <div className="w-full px-10">
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
