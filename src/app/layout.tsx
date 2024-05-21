import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.scss";
import {Toaster} from "sonner";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "GenPassX",
    description: "Générez vos mots de passe robustes en un clic !",
    keywords: "password, generate, random, secure, safe, simple, fast",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
        <Toaster/>
        <body className={inter.className}>{children}</body>
        </html>
    );
}
