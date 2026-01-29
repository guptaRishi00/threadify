import Image from "next/image";
import Link from "next/link";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
    return (
        <>
            <footer className="bg-[#0B0C1E] text-white font-ubuntu overflow-hidden">
                <div className="w-full mx-auto px-6 lg:px-14 pt-[100px] pb-10">
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
                        <div className="flex flex-col gap-10">
                            <div className="space-y-6">
                                <Image
                                    src="/logo.svg"
                                    alt="Threadify"
                                    width={300}
                                    height={50}
                                    className="w-[220px] lg:w-[280px]"
                                />
                                <p className="text-[16px] lg:text-[18px] font-light max-w-[300px] opacity-90 leading-relaxed">
                                    Lorem ipsum dolor sit amet sed do eiusmod tempor
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                {[FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter].map(
                                    (Icon, i) => (
                                        <Link
                                            key={i}
                                            href="#"
                                            className="w-[45px] h-[45px] rounded-full bg-[#D5F334] flex items-center justify-center text-[#0B0C1E] hover:bg-white transition-all duration-300"
                                        >
                                            <Icon size={18} />
                                        </Link>
                                    ),
                                )}
                            </div>
                        </div>

                        <div className="w-full max-w-[550px] space-y-12">
                            <div className="space-y-6">
                                <h3 className="text-[20px] lg:text-[28px] font-medium">
                                    Lorem ipsum dolor sit amet
                                </h3>
                                <div className="relative w-full">
                                    <input
                                        type="email"
                                        placeholder="Enter Your Email ID"
                                        className="w-full h-[60px] rounded-full pl-8 pr-[140px] text-[16px] text-[#0B0C1E] placeholder:text-[#0B0C1E]/40 bg-white outline-none"
                                    />
                                    <button className="absolute right-2 top-2 bottom-2 bg-[#D5F334] rounded-full px-8 text-[#0B0C1E] font-medium text-[16px] hover:opacity-90 transition-opacity">
                                        Subscribe
                                    </button>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <h4 className="text-[18px] font-bold">Company</h4>
                                    <ul className="space-y-4">
                                        {["Home", "Customize", "Pricing", "Contact"].map((item) => (
                                            <li key={item}>
                                                <Link
                                                    href="#"
                                                    className="text-[16px] font-light opacity-80 hover:text-[#D5F334] transition-colors"
                                                >
                                                    {item}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="space-y-6">
                                    <h4 className="text-[18px] font-bold">Other</h4>
                                    <ul className="space-y-4">
                                        {["Privacy Policy", "Terms & Conditions"].map((item) => (
                                            <li key={item}>
                                                <Link
                                                    href="#"
                                                    className="text-[16px] font-light opacity-80 hover:text-[#D5F334] transition-colors"
                                                >
                                                    {item}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 border-t border-white/10 pt-8">
                        <p className="text-center text-[14px] lg:text-[16px] font-light opacity-60">
                            © 2025 Threadify. All rights reserved.
                        </p>
                    </div>
                </div>

                <div className="w-full px-4 mb-[-40px] lg:mb-[-4px]">
                    <Image
                        src="/Group.png"
                        alt="Threadify Large Brand"
                        width={1500}
                        height={400}
                        className="w-[90%] mx-auto h-auto object-contain select-none pointer-events-none"
                        priority
                    />
                </div>
            </footer>
        </>
    );
};

export default Footer;
