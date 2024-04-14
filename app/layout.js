import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Will Be There",
  description:
    "An online RSVP service that allows registered users to create events, share the link with their friends, and have their friends indicate whether they are attending or not",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-auto  text-xl gap-10 m-10">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
