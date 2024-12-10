import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Morpho Vault Card Info Demo",
  description: "Demo for Morpho Vault Card Information",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
