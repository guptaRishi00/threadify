export default function ContactDetails({
    email,
    setEmail,
    phone,
    setPhone,
    instagram,
    setInstagram,
}: any) {
    return (
        <div className="flex-1 flex flex-col gap-4 w-full">
            <div className="relative">
                <input
                    value={email}
                    onChange={(e: any) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-white border border-transparent rounded-full px-5 py-4 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D5F334] transition-all duration-300"
                />
            </div>

            <div className="relative">
                <input
                    value={phone}
                    onChange={(e: any) => setPhone(e.target.value)}
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full bg-white border border-transparent rounded-full px-5 py-4 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D5F334] transition-all duration-300"
                />
            </div>

            <div className="relative">
                <input
                    value={instagram}
                    onChange={(e: any) => setInstagram(e.target.value)}
                    type="text"
                    placeholder="Instagram Handle"
                    className="w-full bg-white border border-transparent rounded-full px-5 py-4 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D5F334] transition-all duration-300"
                />
            </div>
        </div>
    );
}
