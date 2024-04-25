import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";

const inter = Inter({ subsets: ["latin"] });
import SessionProvider from "../src/utils/SessionProvider";
import Navbar from "../src/components/Navbar";


export const metadata = {
  title: "Will Be There",
  description:
    "An online RSVP service that allows registered users to create events, share the link with their friends, and have their friends indicate whether they are attending or not",
};

export default async function RootLayout({
  children,
}
) {
  const session = await getServerSession();
  return (
    <html lang="en" style={{scrollBehavior: "smooth"}}>
      <body className={inter.className}>
        <SessionProvider session={session}>
        <div className="mx-auto text-xl gap-10 ">
          <Navbar />
          {children}
        </div>
        </SessionProvider>
      </body>
    </html>
  );
}
