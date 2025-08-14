import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Fast-stock | E-commerce",
  description:
    "E-commerce website for fast-stock when you can buy an view products",
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
