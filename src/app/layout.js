import "./globals.css";
import "../styles/aos.css";

export const metadata = {
  title: "Test",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
