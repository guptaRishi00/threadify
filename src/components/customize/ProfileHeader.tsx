export default function ProfileHeader() {
  return (
    <div className="w-full bg-[#121432] min-h-20 rounded-3xl flex items-center justify-between px-8 py-6">
      <div className="flex flex-col gap-1">
        <p className="text-white/40 text-xs uppercase tracking-widest">Create QR /</p>
        <p className="text-xl font-medium">Create QR</p>
      </div>

      <p className="text-white/30 text-sm italic tracking-wide">
        ✨ Design your smart tag in seconds
      </p>
    </div>
  );
}
