import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Container from "@/components/global/Container";
import Providers from "./providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "900"],
});

export const metadata: Metadata = {
  title: "Nexify Store",
  description: "Online ecommerce website all in one place",
};

// we need to use that supressHydrationWarning attribute in the html to suppress the hydration error that is being displayed in the console
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} `}>
        {/* our global provider component that will have all of our global providers in the app */}
        <Providers>
          <Navbar />
          <Container>{children}</Container>
        </Providers>
      </body>
    </html>
  );
}
