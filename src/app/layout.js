import ClientNavbar from "../components/ClientNavbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <ClientNavbar />
        {children}
      </body>
    </html>
  );
}
