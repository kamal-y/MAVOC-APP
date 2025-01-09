import "./globals.css";
import Navbar from "../components/header/navbar";
import Footer from "@/components/footer/footer";
import { Metadata } from "next";
import QueryClientProviderWrapper from "./QueryClientProvider";

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
      <body className={`antialiased`}>
        <QueryClientProviderWrapper>
          <Navbar />
          {children}
          <Footer />
        </QueryClientProviderWrapper>
      </body>
    </html>
  );
}
