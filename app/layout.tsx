import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bajukita.my | Pakaian Custom Malaysia",
  description:
    "Bajukita.my menyediakan pakaian custom, uniform, pakaian sukan, apron, topi, beg, dan servis cetakan dari Melaka, Malaysia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ms" className="h-full scroll-smooth">
      <body className="min-h-full bg-[#FFF7EF] antialiased">{children}</body>
    </html>
  );
}
