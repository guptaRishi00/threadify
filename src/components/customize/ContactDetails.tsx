import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { RiInstagramLine } from "react-icons/ri";

export default function ContactDetails({
    email,
    setEmail,
    phone,
    setPhone,
    instagram,
    setInstagram,
}: any) {
    return (
        <div className="flex-1 flex flex-col gap-5 w-full pb-10">
            <p className="text-white/40 text-xs uppercase tracking-widest mb-1">
                Contact Info
            </p>

            <div className="relative">
                <HiOutlineMail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
                />
                <input
                    value={email}
                    onChange={(e: any) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-white/10 border border-white/10 rounded-xl pl-11 pr-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#D5F334] focus:border-transparent transition-all duration-300"
                />
            </div>

            <div className="relative">
                <HiOutlinePhone
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
                />
                <input
                    value={phone}
                    onChange={(e: any) => setPhone(e.target.value)}
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full bg-white/10 border border-white/10 rounded-xl pl-11 pr-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#D5F334] focus:border-transparent transition-all duration-300"
                />
            </div>

            <div className="relative">
                <RiInstagramLine
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
                />
                <input
                    value={instagram}
                    onChange={(e: any) => setInstagram(e.target.value)}
                    type="text"
                    placeholder="Instagram Handle"
                    className="w-full bg-white/10 border border-white/10 rounded-xl pl-11 pr-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#D5F334] focus:border-transparent transition-all duration-300"
                />
            </div>
        </div>
    );
}
