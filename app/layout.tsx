import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";
import StyledComponentsRegistry from "./styling/styled-components/registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hello Next 13",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <StyledComponentsRegistry>
          <Navbar></Navbar>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
