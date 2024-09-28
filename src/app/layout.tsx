import type { Metadata } from "next";
import "./globals.css";
import { Rubik } from "next/font/google";
import { AppFooter, AppNavbar } from "@/layouts";

const rubik = Rubik({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SaltCola",
  description: "Website official SaltCola by Kobre",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <AppNavbar />
        {children}
        <AppFooter />
      </body>
    </html>
  );
}
