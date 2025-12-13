import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";
import LenisProvider from "@/components/layout/LenisProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const manrope = Manrope({
    variable: "--font-manrope",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "StreamVibe｜映画・ドラマを一瞬でストリーミング｜無制限で観放題",
    description:
        "StreamVibe なら、数千の映画・ドラマ・ドキュメンタリーをすぐに視聴可能。最新作から名作まで、あらゆるデバイスで楽しめます。今すぐ無料トライアルを開始！",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="ja" className="dark">
            <body className={`${manrope.className} antialiased`}>
                <LenisProvider>
                    <Header />
                    <main className="min-h-svh">{children}</main>
                    <Footer />
                </LenisProvider>
            </body>
        </html>
    );
}
