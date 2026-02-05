import Image from "next/image";

import { TbScan } from "react-icons/tb";

type Props = {
  innerBgClass: string;
  firstName: string;
  lastName: string;
};

export default function QrCard({ innerBgClass, firstName, lastName }: Props) {
  return (
    <div className="bg-[#D5F334] w-full h-[60vh] lg:h-full rounded-b-3xl lg:rounded-b-none">
      {/* Replace 'bg-black' with the dynamic prop */}
      <div
        className={`${innerBgClass} w-full h-[76%] flex items-center justify-between p-6 lg:p-12 rounded-b-[50px] lg:rounded-b-[85px] transition-colors duration-500`}
      >
        <div className="flex items-center justify-center lg:items-start w-full flex-col">
          <div className="flex items-center justify-between w-full mb-2">
            <p className="text-[#D5F334] text-sm lg:text-base">
              Found <span className="font-bold">Lost Bag?</span>
            </p>
            <Image
              src="/logo.svg"
              alt="Threadify Logo"
              width={80}
              height={20}
              className="w-16 lg:hidden"
            />
          </div>

          <div className="w-full items-center flex flex-col gap-2 lg:mt-0 lg:gap-4">
            <Image
              src="/qr2.png"
              width={200}
              height={200}
              alt="QR Code"
              className="w-40 lg:w-100"
            />
            <p className="text-[#D5F334] text-xs lg:text-lg flex items-center gap-2">
              <TbScan size={20} className="lg:w-[30px] lg:h-[30px]" />
              Scan It. Call Made.
            </p>
            <p className="text-[#D5F334] text-xs lg:text-lg font-bold">
              Number Stays Private.
            </p>
          </div>
        </div>
      </div>

      <div className="py-6 lg:py-10 px-4 lg:px-8 flex items-end justify-between">
        <div className="flex flex-col items-start">
          <p className="text-2xl lg:text-3xl font-bold text-black">
            {firstName}
          </p>
          <p className="text-2xl lg:text-3xl text-black">{lastName}</p>
        </div>

        <Image
          src="/logo.svg"
          alt="Threadify Logo"
          width={100}
          height={100}
          className="brightness-0 hidden lg:block"
        />
      </div>
    </div>
  );
}
