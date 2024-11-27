import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet"></link>

const montserratRegular = localFont({
  src: "./fonts/Montserrat-Regular.ttf",
  variable: "--font-primary-regular",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "EBAX - Plateforme",
  description: "Plateforme pour les catalogues de produits BIM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${montserratRegular.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
