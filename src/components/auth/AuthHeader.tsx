import Image from "next/image";
import Link from "next/link";

export default function AuthHeader() {
  return (
    <div className="bg-[#0B0C1E] w-full flex items-center justify-center py-20">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="Threadify Logo"
          width={200}
          height={200}
          className="lg:w-60"
        />
      </Link>
    </div>
  );
}
