import "./globals.css";
import { Inter, Playfair_Display, Lora } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

export const metadata = {
  title: "Discover Kutch — Beyond the White Desert",
  description:
    "Travel guide to Kutch: destinations, culture, food, and hidden gems. Explore White Rann, Bhuj, Mandvi, and more.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${lora.variable} bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
