import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../src/components/Navbar";

import { getServerSession } from "next-auth";

const inter = Inter({ subsets: ["latin"] });
import SessionProvider from "../src/utils/SessionProvider";

export const metadata = {
  title: "Will Be There",
  description:
    "An online RSVP service that allows registered users to create events, share the link with their friends, and have their friends indicate whether they are attending or not",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
<<<<<<< HEAD:app/layout.js
        <div className="mx-auto text-xl gap-10 m-10">
=======
        <SessionProvider session={session}>
        <div className="mx-auto max-w-5xl text-xl gap-10 m-10">
>>>>>>> b2f826da72788e44aedb34fc3bd23477bd717b7c:app/layout.tsx
          <Navbar />
          {children}
        </div>
        </SessionProvider>
      </body>
    </html>
  );
}
