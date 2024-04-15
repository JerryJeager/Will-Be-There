import { Inter } from "next/font/google";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });

import authImage from "../../public/assets/auth-image.png";
import ellipse1 from "../../public/assets/Ellipse 14.svg";
import ellipse2 from "../../public/assets/Ellipse 15.svg";
import ellipse3 from "../../public/assets/Ellipse 17.svg";

export default async function RootLayout({ children }) {
  return (
    <section className={inter.className}>
      <div className="flex">
        <div className="w-1/2 hidden lg:flex bg-primary justify-center items-center">
          <div className="relative ">
            <Image width={300} placeholder="blur" src={authImage} />
            <div className="absolute -top-20 -left-20">
              <Image  width={180} src={ellipse1} />
            </div>
            <div className="absolute top-1 -left-20">
              <Image  src={ellipse2} />
            </div>
            <div className="absolute -bottom-10 -right-10">
              <Image width={100} src={ellipse3} />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">{children}</div>
      </div>
    </section>
  );
}
