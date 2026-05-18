import { DM_Sans, Inter } from "next/font/google";
import Script from "next/script";
import { Toaster } from "sonner";
import BackToTop from "../components/BackToTop";
import ClientNavbar from "../components/ClientNavbar";
import HashCleanup from "../components/HashCleanup";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata = {
  title: "Yatish Patil | Frontend Developer",
  description: "Portfolio of Yatish Patil — Frontend Developer building modern web applications.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased bg-black text-white [font-feature-settings:'kern'_1,'liga'_1]">
        <Script id="clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "wojj5cslf7");`}
        </Script>
        <HashCleanup />
        <ClientNavbar />
        <Toaster position="top-right" theme="dark" richColors expand />
        <main className="relative z-10 min-h-svh w-full">{children}</main>
        <BackToTop />
      </body>
    </html>
  );
}
