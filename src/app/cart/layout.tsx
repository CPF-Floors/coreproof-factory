import type { Metadata } from "next";
import MenuBar from "../../components/ui/menuBar";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Cart",
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
        <MenuBar />
    </>
  );
}
