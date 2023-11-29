import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Netflix",
  description: "Netflix clone",
};
const open = Poppins({
  subsets: ["latin"],
  variable: "--font-open_sans",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={open.className}>{children}</body>
    </html>
  );
}
