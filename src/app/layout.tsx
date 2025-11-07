import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fork.AI Ads Platform",
  description: "Ad showcase platform with multiple ad provider integrations",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense - Auto Ads */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2936566029635389"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {/* Enable page-level ads (Auto Ads) */}
        <Script id="adsense-auto-ads" strategy="afterInteractive">
          {`
            (adsbygoogle = window.adsbygoogle || []).push({
              google_ad_client: "ca-pub-2936566029635389",
              enable_page_level_ads: true
            });
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
