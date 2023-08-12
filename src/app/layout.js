import "./globals.css";
import "../styles/aos.css";

export const metadata = {
  title: "IMS Markets || Home",
  description: "IMS - Innovative, Market and Scheme.",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
