// app/layout.tsx
import NavBar from "./ui/navBar";
import "./globals.css";
import Footer from "./ui/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}