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
    <html lang="en" className={`${config.mode === 'dark' ? 'bg-background-950': 'bg-white'}`}>
      <script defer async data-id="678c08e2ef167ce9e9f111bb" src="https://webhookforms.com/script.js"></script>
      <body className={`${config.mode === 'dark' ? 'dark': ''}`}>
        {children}
      </body>
    </html>
  );
}
