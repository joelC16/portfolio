import type { Metadata } from "next";
import { Unbounded, Poppins } from "next/font/google";
import "./globals.css";



const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
});
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${unbounded.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
