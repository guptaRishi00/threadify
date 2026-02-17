import Image from "next/image";

type Props = {
  onNext?: () => void;
};

export default function Default({ onNext }: Props) {
  return (
    <div className="flex items-center justify-between px-4 lg:px-8 py-4 border-b border-white/10">
      <div className="flex items-center gap-3">
        <p className="text-sm lg:text-base font-medium">Default</p>
        <Image
          src="/pencil.svg"
          alt="Edit"
          width={200}
          height={200}
          className="w-4 lg:w-5 opacity-50"
          priority
        />
      </div>

      <button
        onClick={onNext}
        className="bg-[#D5F334] text-black px-6 lg:px-8 py-2.5 rounded-full cursor-pointer text-sm font-semibold hover:brightness-110 transition-all duration-200"
      >
        Next
      </button>
    </div>
  );
}
