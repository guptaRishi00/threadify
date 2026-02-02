import Image from "next/image";
import React from "react";
import { TbScan } from "react-icons/tb";

type Props = {
  innerBgClass: string;
};

export default function QrCard({ innerBgClass }: Props) {
  return (
    <div className="bg-[#D5F334] w-full h-full">
      {/* Replace 'bg-black' with the dynamic prop */}
      <div
        className={`${innerBgClass} w-full h-[76%] p-12 rounded-b-[85px] transition-colors duration-500`}
      >
        <div className="flex items-start w-full flex-col">
          <p className="text-[#D5F334]">
            Found <span className="font-bold">Lost Bag?</span>
          </p>
          <div className="w-full items-center flex flex-col gap-4">
            <Image
              src="/qr2.png"
              width={200}
              height={200}
              alt="QR Code"
              className="w-100"
            />
            <p className="text-[#D5F334] text-lg flex items-center gap-2">
              <TbScan size={30} />
              Scan to Notify <span className="font-bold">The Owner</span>
            </p>
          </div>
        </div>
      </div>

      <div className="py-10 px-8 flex items-end justify-between">
        <div className="flex flex-col items-start">
          <p className="text-3xl font-bold text-black">JACK</p>
          <p className="text-3xl text-black">Williams</p>
        </div>

        <Image
          src="/logo.svg"
          alt="Threadify Logo"
          width={100}
          height={100}
          className="brightness-0"
        />
      </div>
    </div>
  );
}
