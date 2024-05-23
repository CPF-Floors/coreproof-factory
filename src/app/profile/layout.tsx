import type { Metadata } from "next";
import MenuBar from "../../components/ui/menuBar";
import GetProfileInfo from "@/components/GetProfileInfo";

export const metadata: Metadata = {
  title: "Profile",
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
        <MenuBar />
    </>
  );
}
