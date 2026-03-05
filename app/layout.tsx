import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Xtreme Concrete Cutting & Demolition | Goldsboro, NC",
  description: "Concrete cutting, core drilling, and demolition services in Goldsboro, NC and surrounding areas.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-[#0d0d0d]">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}