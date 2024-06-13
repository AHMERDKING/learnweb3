import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import '@rainbow-me/rainbowkit/styles.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ENS dApp",
  description: "ENS dApp",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={inter.className+" bg-gray-800 "}>
        <Providers >{children}</Providers></body>
    </html>
  );
}