import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";


const archivo = Archivo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coreproof Factory",
  description: "Coreproof Factory LLC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={archivo.className}>
        {children}
      </body>
    </html>
  );
}
