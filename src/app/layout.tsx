import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Header } from "./components/Header";
import { ApolloWrapper } from "@/components/connectors/ApolloWrapper";

import "./styles.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Header />

        <ApolloWrapper>
          <main>
            {children}
          </main>
        </ApolloWrapper>
      </body>
    </html>
  );
}
