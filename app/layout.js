import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-auto max-w-5xl text-xl gap-10 m-10">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
