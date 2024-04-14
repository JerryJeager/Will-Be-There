import React from "react";
import { Button } from "../../shared/Button";
import { Wrapper } from "../../shared/Wrapper";
import linkIcon from "../../../public/assets/link.png";
import Image from "next/image";
export const Planning = () => {
  return (
    <div>
      <Wrapper>
        <div className="flex flex-col items-center p-11 rounded-[2rem] bg-[#DFE0FF] mb-11">
          <p className="text-center text-[#0B195B] font-bold text-[1.8rem] leading-7 p-5">
            Planning an event shouldn't be stressful, Let's help you create an
            online invite today!
          </p>

          <button className=" gap-2 flex items-center p-3 text-white bg-[#0D35FB] rounded-lg text-[16px] hover:bg-opacity-80 transition-all">
            Get started for free
            <Image src={linkIcon} alt="link" height={10} width={10} />
          </button>
        </div>
      </Wrapper>
    </div>
  );
};
