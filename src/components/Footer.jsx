import React from "react";

export const Footer = () => {
  return (
    <div className="flex flex-col items-start gap-7 w-full h-full bg-[#0B195B] text-white py-8 px-10 ">
      <div className="flex items-center w-full h-full gap-20 px-8">
        <div className="gap-10 px-10">
          <span className="mb-6 text-xl">LOGO</span>

          <h3 className="mt-9 leading-8 text-sm">
            Email:kemelevictory3802@gmail.com <br />
            +2348140732549
          </h3>
        </div>

        <div className="gap-10 text-base leading-9 px-10">
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

        <div className="px-10">
          <h3 className="text-base">Subscribe to our Newsletter</h3>
          <div className="flex items-center mt-9 ">
            <input
              className="bg-[#DFE0FF]/10 text-white  p-2 outline-none rounded text-sm"
              placeholder="Enter your email address"
            />
            <button
              className="bg-black p-2 text-sm rounded hover:bg-opacity-70 transition-all"
              type="submit"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="h-[1px] bg-white w-[90%]"></div>
      <div className="flex item-center gap-4 justify-start  text-sm">
        <h4>&copy; 2023 positvus. All right reserved</h4>
        <h4>Privacy Policy</h4>
      </div>
    </div>
  );
};
