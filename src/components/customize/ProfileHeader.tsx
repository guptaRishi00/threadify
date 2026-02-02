import Image from "next/image";

export default function ProfileHeader() {
  return (
    <div className="w-full bg-[#121432] min-h-20 rounded-3xl flex items-center justify-between p-10">
      <div className=" flex flex-col gap-2">
        <p className="text-[#FFFFFF80] text-sm">Create QR /</p>
        <p className="text-2xl font-medium">Create QR</p>
      </div>

      <div className="flex items-center gap-2">
        <div className="rounded-full w-12 h-12 overflow-hidden ring-1 ring-[#D5F334] flex items-center justify-center">
          <Image
            src="https://images.unsplash.com/photo-1768489038118-353427798951?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Avatar"
            width={32}
            height={32}
            priority
            className="object-cover w-full"
          />
        </div>

        <div className="flex flex-col items-start">
          <p className="font-medium">David Adams</p>
          <p className="text-[#FFFFFF] text-xs">Admin</p>
        </div>
      </div>
    </div>
  );
}
