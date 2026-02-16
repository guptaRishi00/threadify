"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { FiPhone, FiMail, FiInstagram } from "react-icons/fi";

function FoundContent() {
    const params = useSearchParams();

    const name = params.get("name") || "Someone";
    const phone = params.get("phone") || "";
    const email = params.get("email") || "";
    const ig = params.get("ig") || "";

    return (
        <div className="min-h-screen bg-[#0B0C1E] flex flex-col items-center justify-center px-6 py-12 font-ubuntu">
            {/* Logo */}
            <Image
                src="/logo.svg"
                alt="Threadify Logo"
                width={160}
                height={40}
                className="mb-12"
                priority
            />

            {/* Card */}
            <div className="w-full max-w-md bg-[#121432] rounded-3xl p-8 flex flex-col items-center gap-6 border border-white/5 shadow-[0_0_60px_rgba(213,243,52,0.08)]">
                {/* Icon badge */}
                <div className="w-16 h-16 rounded-full bg-[#D5F334]/10 flex items-center justify-center">
                    <span className="text-3xl">🎒</span>
                </div>

                {/* Message */}
                <div className="text-center">
                    <p className="text-white/60 text-sm mb-1">I found a lost bag belonging to</p>
                    <h1 className="text-[#D5F334] text-3xl lg:text-4xl font-bold">{name}</h1>
                </div>

                <p className="text-white/40 text-xs text-center max-w-[260px]">
                    Please use the buttons below to reach out and return the bag to its owner.
                </p>

                {/* Divider */}
                <div className="w-full h-px bg-white/10" />

                {/* Contact buttons */}
                <div className="w-full flex flex-col gap-3">
                    {phone && (
                        <a
                            href={`tel:${phone}`}
                            className="w-full flex items-center justify-center gap-3 bg-[#D5F334] text-black font-semibold py-4 rounded-xl hover:brightness-110 transition-all duration-200 text-base"
                        >
                            <FiPhone size={20} />
                            Call Owner
                        </a>
                    )}

                    {email && (
                        <a
                            href={`mailto:${email}`}
                            className="w-full flex items-center justify-center gap-3 bg-white/10 text-white font-medium py-4 rounded-xl hover:bg-white/15 transition-all duration-200 text-base"
                        >
                            <FiMail size={20} />
                            Send Email
                        </a>
                    )}

                    {ig && (
                        <a
                            href={`https://instagram.com/${ig}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex items-center justify-center gap-3 bg-white/10 text-white font-medium py-4 rounded-xl hover:bg-white/15 transition-all duration-200 text-base"
                        >
                            <FiInstagram size={20} />
                            Instagram
                        </a>
                    )}
                </div>
            </div>

            {/* Footer */}
            <p className="text-white/20 text-xs mt-8">
                Powered by <span className="text-[#D5F334]/40 font-medium">Threadify</span>
            </p>
        </div>
    );
}

export default function FoundPage() {
    return (
        <Suspense
            fallback={
                <div className="min-h-screen bg-[#0B0C1E] flex items-center justify-center">
                    <p className="text-white/40 text-sm animate-pulse">Loading…</p>
                </div>
            }
        >
            <FoundContent />
        </Suspense>
    );
}
