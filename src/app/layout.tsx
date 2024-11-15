"use client";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <main>
          <Sidebar />
          {children}
        </main>
      </body>
    </html>
  );
}
