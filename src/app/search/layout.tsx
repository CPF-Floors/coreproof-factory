import type { Metadata } from "next";
import MenuBar from "../../components/ui/menuBar";

export const metadata: Metadata = {
  title: "Search",
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
