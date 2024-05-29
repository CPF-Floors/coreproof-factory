import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";


export const metadata: Metadata = {
  title: "Log In",
  description: "Coreproof Factory LLC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        {children}
        <Toaster />
    </>
  );
}
