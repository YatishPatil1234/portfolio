import { DM_Sans, Inter } from "next/font/google";
import Script from "next/script";
import { Toaster } from "sonner";
import BackToTop from "../components/BackToTop";
import ClientNavbar from "../components/ClientNavbar";
import HashCleanup from "../components/HashCleanup";
import JsonLd from "../components/JsonLd";
import SiteBackground from "../components/SiteBackground";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  preload: true,
});

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: `${siteConfig.name} Portfolio`,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.shortDescription,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${dmSans.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="font-sans antialiased bg-black text-white [font-feature-settings:'kern'_1,'liga'_1]">
        <Script id="clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "wojj5cslf7");`}
        </Script>
        <HashCleanup />
        <SiteBackground />
        <ClientNavbar />
        <Toaster position="top-right" theme="dark" richColors expand />
        <main className="site-main relative z-10 min-h-svh w-full">{children}</main>
        <BackToTop />
      </body>
    </html>
  );
}
