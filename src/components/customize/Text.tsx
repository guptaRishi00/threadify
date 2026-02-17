export default function Text({
  setFirstName,
  setLastName,
  firstName,
  lastName,
}: any) {
  return (
    <div className="flex-1 flex flex-col gap-5 w-full pb-10">
      <p className="text-white/40 text-xs uppercase tracking-widest mb-1">
        Your Name
      </p>

      <div className="relative">
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          placeholder="First Name"
          className="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#D5F334] focus:border-transparent transition-all duration-300"
        />
      </div>

      <div className="relative">
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          placeholder="Last Name"
          className="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#D5F334] focus:border-transparent transition-all duration-300"
        />
      </div>
    </div>
  );
}
