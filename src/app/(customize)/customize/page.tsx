"use client";

import ContactDetails from "@/components/customize/ContactDetails";
import Default from "@/components/customize/Default";
import Designs from "@/components/customize/Designs";

import QrCard from "@/components/customize/QrCard";
import Text from "@/components/customize/Text";
import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import { IoCopyOutline } from "react-icons/io5";
import { TbTextResize } from "react-icons/tb";

import { MdOutlineContactPhone } from "react-icons/md";
import { HiOutlineDownload } from "react-icons/hi";

type Props = {};

const tabs = [
  { id: "background", label: "Background", icon: IoCopyOutline },
  { id: "text", label: "Text", icon: TbTextResize },
  { id: "contact", label: "Contact", icon: MdOutlineContactPhone },
];

export default function page({ }: Props) {
  const [activeTab, setActiveTab] = useState<string>("background");

  const [innerBg, setInnerBg] = useState<string>("#000000");

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

  // Build a redirect URL so scanning the QR opens the /found page
  const redirectUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/found?name=${encodeURIComponent(firstName)}&phone=${encodeURIComponent(phone)}&email=${encodeURIComponent(email)}&ig=${encodeURIComponent(instagram)}`
      : "";

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

  const handleNext = () => {
    const currentIndex = tabs.findIndex((tab) => tab.id === activeTab);
    const nextIndex = (currentIndex + 1) % tabs.length;
    setActiveTab(tabs[nextIndex].id);
  };

  return (
    <>
      <Default onNext={handleNext} />
      <div className="bg-[#121432] w-full min-h-screen mt-4 p-4 lg:p-8 rounded-3xl flex flex-col">
        {/* Mobile Tab Navigation - horizontal on mobile */}
        <div className="flex lg:hidden items-center justify-center gap-2 py-3 mb-4 bg-white/5 rounded-2xl">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium transition-all duration-300 cursor-pointer
              ${activeTab === tab.id
                  ? "bg-[#D5F334] text-black"
                  : "text-white/50 hover:text-white"
                }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <tab.icon size={16} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-0 lg:justify-between flex-1 w-full">
          {/* Desktop Tab Navigation - vertical, hidden on mobile */}
          <div className="hidden lg:flex flex-col justify-start items-center pt-2 gap-2 w-[80px] shrink-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`flex items-center flex-col gap-2 w-full py-3 rounded-xl cursor-pointer transition-all duration-300
                ${activeTab === tab.id
                    ? "text-[#D5F334] bg-[#D5F334]/10"
                    : "text-white/40 hover:text-white/70 hover:bg-white/5"
                  }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <tab.icon size={22} />
                <p className="text-[10px] font-medium tracking-wide">
                  {tab.label}
                </p>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="flex flex-col items-start gap-5 w-full px-2 lg:px-8 lg:border-x lg:border-white/10 h-auto lg:h-[85vh] overflow-y-auto scrollbar-hide order-1 lg:order-0">
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
          <div className="w-full lg:w-[40%] lg:px-6 order-2 lg:order-0 lg:mt-0 shrink-0">
            <QrCard
              ref={cardRef}
              innerBgClass={innerBg}
              firstName={firstName}
              lastName={lastName}
              qrData={redirectUrl}
              isReady={isReady}
            />
            {isReady && (
              <button
                type="button"
                onClick={handleDownload}
                className="mt-4 w-full flex items-center justify-center gap-2 bg-[#D5F334] text-black font-semibold py-3.5 px-6 rounded-full hover:brightness-110 transition-all duration-200 cursor-pointer"
              >
                <HiOutlineDownload size={20} />
                Download Card
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
