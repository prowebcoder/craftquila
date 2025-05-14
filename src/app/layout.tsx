import type { Metadata } from "next";
import { Signika } from "next/font/google";
import "./globals.css";

import AppStateProvider from "@app/state/Provider";

import Header from "@app/components/Header";
import Footer from "@app/components/Footer";

import CustomizeProduct from "@app/components/CustomizeProduct";

const signika = Signika({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CraftQuila",
  description: "Craft your own unique tequila masterpiece.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={signika.className}>
        <AppStateProvider>
          <main id="main">
            <Header />

            <div id="content">{children}</div>

            <Footer />

            <CustomizeProduct />
          </main>
        </AppStateProvider>
      </body>
    </html>
  );
}
