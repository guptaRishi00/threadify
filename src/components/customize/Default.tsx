import Image from "next/image";

type Props = {};

export default function Default({}: Props) {
  return (
    <div className="flex items-center justify-between px-10 py-5 border-b border-gray-700">
      <div className="flex items-center gap-3">
        <p className="">Default</p>
        <Image
          src="/pencil.svg"
          alt="Threadify Logo"
          width={200}
          height={200}
          className="w-5"
          priority
        />
      </div>

      <button className="bg-[#D5F334] text-black px-8 py-2 rounded-full cursor-pointer">
        Next
      </button>
    </div>
  );
}
