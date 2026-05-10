import Script from "next/script";
import { Toaster } from "sonner";
import ClientNavbar from "../components/ClientNavbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        <Script id="clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "wojj5cslf7");`}
        </Script>
        <ClientNavbar />
        <Toaster position="top-right" theme="dark" richColors expand />
        <main>{children}</main>
      </body>
    </html>
  );
}
