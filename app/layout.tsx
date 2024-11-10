import type { Metadata } from "next";
import { config } from "@/config";
import "./globals.css";

export const metadata: Metadata = {
  title: config.metaTitle,
  description: config.metaDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background-950">
      <body>
        {children}
      </body>
    </html>
  );
}
