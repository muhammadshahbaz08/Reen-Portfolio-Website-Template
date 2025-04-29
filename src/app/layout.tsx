import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Source_Sans_3 } from "next/font/google";
import { Navbar, Footer } from "./components";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "REEN - Made for Designers",
  description: "Designer Portfolio Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={sourceSans.className}>
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
