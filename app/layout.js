import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bloom",
  description: "Social Media Reimagned",
  icons: {
    icon: [
      { 
        url: '/Bloom.svg', 
        type: 'image/svg+xml',
        sizes: 'any' // Allows SVG to scale to any size
      },
      {
        url: '/Bloom.svg',
        type: 'image/svg+xml',
        sizes: '32x32 48x48 96x96 128x128 256x256' // Common favicon sizes
      }
    ],
    shortcut: '/Bloom.svg',
    apple: {
      url: '/Bloom.svg',
      type: 'image/svg+xml',
      sizes: '180x180' // Size for Apple devices
    }
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
