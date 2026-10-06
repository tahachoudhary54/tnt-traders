import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "T&T Traders | Industrial Valves & Flow Control Solutions",
  description: "T&T Traders provides industrial valve and flow-control solutions for demanding applications. Explore our product range and request a quotation.",
  openGraph: {
    title: "T&T Traders | Industrial Valves & Flow Control Solutions",
    description: "T&T Traders provides industrial valve and flow-control solutions for demanding applications.",
    type: "website",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth`}>
      <body className="flex flex-col min-h-screen overflow-x-hidden">
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
