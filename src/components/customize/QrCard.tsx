import { forwardRef } from "react";
import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";
import { TbScan } from "react-icons/tb";

type Props = {
  innerBgClass: string;
  firstName: string;
  lastName: string;
  qrData: string;
  isReady: boolean;
};

const QrCard = forwardRef<HTMLDivElement, Props>(
  ({ innerBgClass, firstName, lastName, qrData, isReady }, ref) => {
    return (
      <div
        ref={ref}
        className="bg-[#D5F334] w-full h-[50vh] lg:h-[75vh] rounded-3xl overflow-hidden"
      >
        {/* Inner dark area */}
        <div
          style={{ background: innerBgClass }}
          className="w-full h-[76%] flex items-center justify-between p-4 lg:p-8 rounded-b-[2.5rem] transition-all duration-500"
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
              {isReady ? (
                <>
                  <QRCodeSVG
                    value={qrData}
                    size={150}
                    bgColor="transparent"
                    fgColor="#D5F334"
                    className="w-28 lg:w-52"
                  />
                  <p className="text-[#D5F334] text-xs lg:text-lg flex items-center gap-2">
                    <TbScan size={20} className="lg:w-[30px] lg:h-[30px]" />
                    Scan It. Call Made.
                  </p>
                  <p className="text-[#D5F334] text-xs lg:text-lg font-bold">
                    Number Stays Private.
                  </p>
                </>
              ) : (
                <div className="flex flex-col items-center gap-3 py-6">
                  <TbScan size={48} className="text-[#D5F334]/30" />
                  <p className="text-[#D5F334]/50 text-sm lg:text-base text-center leading-relaxed">
                    Fill in all your details to
                    <br />
                    generate your QR code
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="py-3 lg:py-5 px-4 lg:px-8 flex items-end justify-between">
          <div className="flex flex-col items-start">
            <p className="text-2xl lg:text-3xl font-bold text-black tracking-tight">
              {firstName}
            </p>
            <p className="text-2xl lg:text-3xl text-black/70 tracking-tight">
              {lastName}
            </p>
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
);

QrCard.displayName = "QrCard";

export default QrCard;
