import ProfileHeader from "@/components/customize/ProfileHeader";
import Sidebar from "@/components/customize/Sidebar";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

export default function CustomizeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col lg:flex-row p-4 lg:p-8 bg-[#0B0C1E] w-full min-h-screen items-start lg:items-stretch gap-4">
      {/* Mobile Header - visible only on mobile */}
      <div className="flex lg:hidden items-center justify-between w-full px-2 py-4 border-b border-white/10">
        <div className="w-10 h-10 rounded-full overflow-hidden ring-1 ring-[#D5F334]">
          <Image
            src="https://images.unsplash.com/photo-1768489038118-353427798951?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Avatar"
            width={40}
            height={40}
            className="object-cover w-full h-full"
          />
        </div>
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Threadify Logo"
            width={120}
            height={30}
            className="w-28"
            priority
          />
        </Link>
        <button className="text-white">
          <HiOutlineMenuAlt3 size={24} />
        </button>
      </div>

      {/* Sidebar - hidden on mobile */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      <div className="flex flex-col w-full">
        {/* ProfileHeader - hidden on mobile */}
        <div className="hidden lg:block">
          <ProfileHeader />
        </div>
        {children}
      </div>
    </div>
  );
}
