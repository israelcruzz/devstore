import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/cart-context";

export const metadata: Metadata = {
  title: {
    template: "%s | Devstore",
    default: "Devstore",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <CartProvider>
        <body className="bg-zinc-950 text-zinc-50 antialiased">{children}</body>
      </CartProvider>
    </html>
  );
}
