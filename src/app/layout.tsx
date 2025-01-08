import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/header/navbar";
import Footer from "@/components/footer/footer";
import { Metadata } from "next";
import QueryClientProviderWrapper from "./QueryClientProvider"; // Move QueryClient logic here

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MAVOK",
  description: "",
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
        <QueryClientProviderWrapper>
          <Navbar />
          {children}
          <Footer />
        </QueryClientProviderWrapper>
      </body>
    </html>
  );
}
