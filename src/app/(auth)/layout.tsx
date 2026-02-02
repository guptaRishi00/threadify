import AuthHeader from "@/components/auth/AuthHeader";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AuthHeader />
      {children}
    </>
  );
}
