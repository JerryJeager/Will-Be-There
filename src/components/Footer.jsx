import React from "react";
import Image from "next/image";
import linkedinIcon from "../../public/assets/linkedin.png";
import facebookIcon from "../../public/assets/facebook.png";
import twitterIcon from "../../public/assets/twitter.png";
export const Footer = () => {
  return (
    <section className="flex flex-col items-start justify-center gap-7 h-auto bg-[#0B195B] text-white py-8 md:px-10 px-5 ">
      <div className="flex flex-wrap items-center w-full h-full justify-between md:px-8 space-y-4 ">
        <div className="gap-10">
          <span className="mb-6 text-xl">LOGO</span>
          <h3 className="leading-8 text-sm md:text-medium ">
            Email:kemelevictory3802@gmail.com <br />
            +2348140732549
          </h3>
          <div className="flex items-start gap-2 mt-2">
            <Image
              src={linkedinIcon}
              alt="linkedin"
              height={20}
              width={20}
              quality={100}
              className="hover:opacity-70 transition-all duration-200"
            />
            <Image
              src={facebookIcon}
              alt="facebook"
              height={20}
              width={20}
              quality={100}
              className="hover:opacity-70 transition-all duration-200"
            />
            <Image
              src={twitterIcon}
              alt="twitter"
              height={20}
              width={20}
              quality={100}
              className="hover:opacity-70 transition-all duration-200"
            />
          </div>
        </div>
        <div className="gap-10 text-base leading-9">
          <h2 className="text-xl">INFO</h2>
          <div className="">
            About <br />
            FAQ <br />
            Contact <br />
            Cookies
          </div>
        </div>
        <div className="gap-10 text-base leading-9">
          <div className="text-xl">RESOURCES</div>
          <div className="">
            Features <br />
            Review
            <br />
            Pricing <br />
            Support
          </div>
        </div>
        <div className="md:px-10 ">
          <h3 className="">Subscribe to our Newsletter</h3>
          <div className="flex items-center py-2">
            <input
              className="bg-[#DFE0FF]/10 text-white p-3 outline-none rounded text-sm sm:text-normal"
              placeholder="Enter your email address"
            />
            <button
              className="bg-black p-3 rounded hover:bg-opacity-70 transition-all text-sm text-normal"
              type="submit"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="h-[1px] bg-white w-full md:w-[90%]"></div>
      <div className="text-sm flex flex-wrap gap-2 items-center ">
        <p>&copy; 2023 positvus. All right reserved</p>
        <p>Privacy Policy</p>
      </div>
    </section>
  );
};
