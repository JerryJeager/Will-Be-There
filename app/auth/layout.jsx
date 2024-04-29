import { Inter } from "next/font/google";
import AuthImage from "../../src/components/auth/AuthImage"

const inter = Inter({ subsets: ["latin"] });


export default async function RootLayout({ children }) {
  return (
    <section className={inter.className}>
      <div className="flex mt-24">
        <div className="bg-authBg bg-cover bg-center bg-[#0D35FB] h-screen lg:w-1/2 hidden lg:flex justify-center items-end">
          <AuthImage />
        </div>
        <div className="w-full lg:w-1/2">{children}</div>
      </div>
    </section>
  );
}
