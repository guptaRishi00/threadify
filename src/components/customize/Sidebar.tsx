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
    <aside className="bg-[#121432] w-72 h-[140vh] rounded-3xl flex flex-col py-12 overflow-hidden font-ubuntu">
      <div className="px-10 mb-16">
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
        <p className="px-10 text-white/40 text-sm font-light mb-6 tracking-wide">
          Home
        </p>

        <div className="flex flex-col gap-3">
          {navItems.map((item) => {
            const isActive = item.name === "Create QR";

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  flex items-center gap-4 py-4 px-10 transition-all duration-300 group
                  ${isActive
                    ? "bg-[#D5F334] text-black rounded-r-full mr-6"
                    : "text-white hover:text-[#D5F334]"
                  }
                `}
              >
                <item.icon
                  size={26}
                  className={
                    isActive
                      ? "text-black"
                      : "text-white group-hover:text-[#D5F334]"
                  }
                />
                <span className="text-[17px] font-medium">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}
