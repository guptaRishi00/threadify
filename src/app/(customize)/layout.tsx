import Default from "@/components/customize/Default";
import ProfileHeader from "@/components/customize/ProfileHeader";
import Sidebar from "@/components/customize/Sidebar";

export default function CustomizeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex p-10 bg-[#0B0C1E] w-full min-h-screen items-start gap-5">
      <Sidebar />
      <div className="flex flex-col w-full">
        <ProfileHeader />
        <Default />
        {children}
      </div>
    </div>
  );
}
