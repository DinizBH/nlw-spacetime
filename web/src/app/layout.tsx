/* eslint-disable prettier/prettier */
import type { Metadata } from "next";
// eslint-disable-next-line camelcase
import { Roboto_Flex as Roboto, Bai_Jamjuree as BaiJamjuree } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const baiJamjuree = BaiJamjuree({
  variable: "--font-bai-jamjuree",
  subsets: ["latin"],
  weight: "700",
});

export const metadata: Metadata = {
  title: "Spacetime NLW",
  description: "Capsula do tempo criada com Next.js, TypeScript e Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} font-sans text-gray-100 bg-gray-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
