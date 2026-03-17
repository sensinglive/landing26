import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Sensing — Monitoramento Inteligente de Cadeia Fria",
  description:
    "A única solução de monitoramento de cadeia fria que não apenas registra o passado, mas prevê o futuro.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="bg-bg-page text-text-primary font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
