import React from "react";
import { Button } from "../../shared/Button";
import { Wrapper } from "../../shared/Wrapper";
import linkIcon from "../../../public/assets/link.png";
import Image from "next/image";
export const Planning = () => {
  return (
    <div>
      <Wrapper>
        <div className="h-[21rem] flex flex-col justify-center items-center p-5 text-sm md:p-11 sm:text-lg rounded-[2rem] bg-[#DFE0FF] mb-11">
          <p className="text-center text-[#0B195B] font-bold text-[1.75rem] md:text-[2.5rem] leading-[2.5rem] md:leading-[3rem] p-5">
            Planning an event shouldn't be stressful, Let's help you create an
            online invite today!
          </p>

          <button className=" gap-2 flex items-center text-[1rem] justify-center p-4 w-[18rem] text-white bg-[#0D35FB] rounded-lg hover:bg-opacity-80 transition-all">
            Get started for free
            <Image src={linkIcon} alt="link" height={10} width={10} />
          </button>
        </div>
      </Wrapper>
    </div>
  );
};
