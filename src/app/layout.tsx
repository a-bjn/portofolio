import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "./header/header";
import Footer from "./footer/footer";


const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  title: "Andrei Bejan — Fullstack Engineer",
  description: "Fullstack Software Engineer specializing in Next.js and Spring Boot. Building scalable web applications with modern frontend interfaces and robust backend APIs.",
  openGraph: {
    title: "Andrei Bejan — Fullstack Engineer",
    description: "Fullstack Software Engineer specializing in Next.js and Spring Boot.",
    url: "https://portofolio-beta-pied.vercel.app",
    siteName: "Andrei Bejan",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Andrei Bejan — Fullstack Engineer",
    description: "Fullstack Software Engineer specializing in Next.js and Spring Boot.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.className} antialiased` } 
      >
        {/* Global programming particles */}
        <div className="programming-particles"></div>
        <div className="programming-particles-2"></div>
        <div className="programming-particles-3"></div>
        <div className="programming-particles-4"></div>
        <Header/>
        <div className="mx-auto w-full max-w-8xl">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
