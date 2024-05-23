import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Theme } from "@radix-ui/themes";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Contribute from "@/components/contribute";
import Faqs from "@/components/faqs";

import "./globals.css";
import "@radix-ui/themes/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://generaterobotstxt.com/"),
  title: {
    default:
      "Robots.txt Generator - A beautifully open-source robots.txt generator",
    template: "%s - Robots.txt Generator",
  },
  manifest: "/manifest.json",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/images/logo.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "any",
      url: "/images/logo.png",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      sizes: "180x180",
      url: "/images/apple-touch-icon.png",
    },
  ],
  description: "An open-source robots.txt generator.",
  openGraph: {
    title: "Robots.txt Generator",
    description: "An beautifully open-source robots.txt generator",
    url: "https://generaterobotstxt.com/images/og_image.png",
    siteName:
      "Robots.txt Generator - An beautifully open-source robots.txt generator",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title:
      "Robots.txt Generator - An beautifully open-source robots.txt generator",
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  themeColor: "#171717",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Theme>
            <Header />
            {children}
            <Faqs />
            <Contribute />
            <Footer />
          </Theme>
        </ThemeProvider>
        <Script
          async
          src="https://cloud.umami.is/script.js"
          data-website-id="03fb5087-8d74-47f2-a3ee-e4725b26e1cd"
        />
      </body>
    </html>
  );
}
