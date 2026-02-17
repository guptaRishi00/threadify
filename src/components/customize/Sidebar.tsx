"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HiOutlineQrCode,
  HiOutlineShoppingCart,
  HiOutlineCurrencyDollar,
} from "react-icons/hi2";

import { LuPencilRuler } from "react-icons/lu";

const navItems = [
  { name: "Create QR", href: "/customize", icon: HiOutlineQrCode },
  // { name: "My Design", href: "/my-design", icon: LuPencilRuler },
  // { name: "Order", href: "/order", icon: HiOutlineShoppingCart },
  // { name: "My Plan", href: "/my-plan", icon: HiOutlineCurrencyDollar },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="bg-[#121432] h-[126.5vh] w-72 rounded-3xl flex flex-col py-8 overflow-hidden font-ubuntu self-stretch">
      <div className="px-8 mb-10">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Threadify Logo"
            width={180}
            height={40}
            className="w-44"
            priority
          />
        </Link>
      </div>

      <nav className="flex flex-col w-full">
        <p className="px-8 text-white/40 text-xs uppercase font-light mb-6 tracking-widest">
          Menu
        </p>

        <div className="flex flex-col gap-3">
          {navItems.map((item) => {
            const isActive = item.name === "Create QR";

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  flex items-center gap-4 py-3.5 px-8 transition-all duration-300 group relative
                  ${isActive
                    ? "bg-[#D5F334]/10 text-[#D5F334] border-l-[3px] border-[#D5F334]"
                    : "text-white/60 hover:text-white hover:bg-white/5 border-l-[3px] border-transparent"
                  }
                `}
              >
                <item.icon
                  size={22}
                  className={
                    isActive
                      ? "text-[#D5F334]"
                      : "text-white/60 group-hover:text-white"
                  }
                />
                <span className="text-sm font-medium">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}
