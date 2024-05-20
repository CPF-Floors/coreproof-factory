import type { Metadata } from "next";
import MenuBar from "../components/menuBar";

export const metadata: Metadata = {
  title: "Dashboard",
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