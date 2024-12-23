import type { Metadata } from "next";

import "./globals.css";
import SnowfallComponent from "@/components/Snowfall Component";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative ">
        <SnowfallComponent />
        <main>{children}</main>
      </body>
    </html>
  );
}
