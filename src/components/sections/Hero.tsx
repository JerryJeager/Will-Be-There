import React from "react";
import { Button } from "../../shared/Button";
import { Wrapper } from "../../shared/Wrapper";
import heroImage from "../../../public/assets/heroImage.png";
import Image from "next/image";
import Link from "next/link";

export const Hero: React.FC = () => {
  return (
    <section className="mt-24">
      <Wrapper>
        <div className="flex flex-col md:flex-row gap-2 p-2 sm:p-4 items-center justify-between pb-10">
          {/* left side */}
          <div className="space-y-5 py-5 md:w-[50%] flex flex-col items-center md:items-start text-center md:text-start">
            <p className="text-4xl font-semibold">
              Instantly Create{" "}
              <strong className="text-[#0D35FB]">Custom</strong> Invite For Any
              Event.
            </p>
            <p>
              Let's help you keep track of your invited guest with our
              innovative online RSVP platform, creating stunning invites fit for
              you.
            </p>
            <div className="w-[]">
              <Link href="/auth/signup">
                <Button text="Sign up for free" />
              </Link>
            </div>
          </div>
          {/* right side */}
          <div className="md:w-[50%] w-[100%]">
            <Image
              src={heroImage}
              alt="hero-image"
              quality={100}
              className="w-full h-full"
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
