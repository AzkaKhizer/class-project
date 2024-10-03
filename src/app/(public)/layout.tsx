import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./../../components/Header"
import Footer from "./../../components/Footer"
import Hero from "./../../components/Hero"
import Link from "next/link";

const geistSans = localFont({
  src: "./../../../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./../../../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "My Website",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
       <Hero/>
       <Footer/>
        {children}
      </body>
    </html>
  );
}
