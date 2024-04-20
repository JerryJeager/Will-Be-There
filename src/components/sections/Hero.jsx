import React from "react";
import { Button } from "../../shared/Button";
import { Wrapper } from "../../shared/Wrapper";
import heroImage from "../../../public/assets/heroImage.png";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="">
      <Wrapper>
        <div className="flex flex-col md:flex-row items-center justify-between py-10">
          {/* left side */}
          <div className="gap-[1.5rem] md:gap-[1.7rem] p-2 sm:p-4 space-y-5 py-5 md:w-[50%] flex flex-col items-center md:items-start text-center md:text-start">
            <p className="text-[2.5rem] md:text-[4rem] leading-[3rem] md:leading-[4rem] font-semibold max-w-[24rem] md:max-w-[33.6rem]">
              Instantly Create{" "}
              <strong className="text-[#0D35FB]">Custom</strong> Invite For Any
              Event.
            </p>
            <p className="text-[1rem] md:text-[1.37rem] max-w-[22rem] md:max-w-[31rem] font-semibold leading-[1.3rem] md:leading-[2.25rem] tracking-[0.008rem] text-[#303036]">
              Let's help you keep track of your invited guest with our
              innovative online RSVP platform, creating stunning invites fit for
              you.
            </p>
            <div>
              <Button text="Sign up for free" />
            </div>
          </div>
          {/* right side */}
          <div className="md:w-[40%] w-full">
            <Image
              src={heroImage}
              alt="hero-image"
              quality={100}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
