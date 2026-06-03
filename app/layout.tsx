import "./globals.css";
import type { Metadata } from "next";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "AI丐帮 × AI道人 / 零世界",
  description: "即时落地商业作战手册",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="font-hei">
        <Nav />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
