import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Container from "@/components/global/Container";
import Providers from "./providers";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "900"],
});

export const metadata: Metadata = {
  title: "Nexify Store",
  description: "Online ecommerce website all in one place",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} `}>
        <Providers>
          <Navbar />
          <Container>{children}</Container>
        </Providers>
      </body>
    </html>
  );
}
