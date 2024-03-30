import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/Components/Navigation";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My porfolio site",
  authors: [{ name: "NguyenNgocHuuThong", url: "https://github.com/NHTNg" }],
  creator: "NguyenNgocHuuThong",
  keywords: ["Next.js", "React", "JavaScript"],
  applicationName: "My Portfolio Website",
  icons: { icon: "/icon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
