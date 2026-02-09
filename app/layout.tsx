import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Rakan Alhakim — SaaS Product Engineer & AI Builder",
  description: "SaaS product engineer, AI builder, and digital systems architect based in Riyadh, Saudi Arabia. Building full SaaS platforms, AI-powered products, and finance & operations software.",
  keywords: ["SaaS engineer", "AI builder", "product engineer", "Riyadh", "Saudi Arabia", "cybersecurity", "decentralized systems"],
  authors: [{ name: "Rakan Alhakim" }],
  openGraph: {
    title: "Rakan Alhakim — SaaS Product Engineer & AI Builder",
    description: "Building serious technology. Senior-level product thinking.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans selection:bg-white/20 selection:text-white">
        {children}
      </body>
    </html>
  );
}
