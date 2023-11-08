import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import NavbarFixed from "./components/navbarfixed";

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  style: "italic",
  weight: "700",
});

export const metadata: Metadata = {
  title: "JayDav",
  description: "Personal portfolio page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* Global Text */}
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@700&style=italic&display=swap"
        rel="stylesheet"
      />
      <NavbarFixed />
      <main>{children}</main>
      {/* footer here */}
    </div>
  );
}
