"use client";
import React, { useState } from "react";
import { Wrapper } from "../../shared/Wrapper";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export const FaqData = [
  {
    id: 1,
    title: "What Is Will Be There About",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    title: "Is it free to use?",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    id: 3,
    title: "Do I need to download any software to use Will Be There?",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    id: 4,
    title: "Can I manage my guest list?",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    id: 5,
    title: "Can I send follow-up reminders?",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    id: 6,
    title: "Can guests update their RSVP after they respond?",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
];

export const Faq = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (index) => {
    isOpen === index ? setIsOpen(false) : setIsOpen(index);
  };

  return (
    <section>
      <Wrapper>
        <div className="flex flex-col items-center justify-center py-10 my-10">
          <div className="p-5">
            <p className="text-[2rem] md:text-[2.5rem] leading-[2.5rem] md:leading-[3rem] text-center font-bold">
              Frequently Asked Questions
            </p>
          </div>
          <div className="md:w-[80%]">
            {FaqData.map((data, index) => {
              return (
                <div key={index} className="p-4">
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => handleToggle(index)}
                  >
                    <p className="leading-[2.5rem] text-[1.3rem] md:text-[1.7rem] ">{data.title}</p>
                    <span className="transition-all duration-300">
                      {isOpen === index ? <IoIosArrowUp /> :<IoIosArrowDown />}
                    </span>
                  </div>
                  <div className="p-2 text-gray-500 ease-in-out transition-all duration-300">
                    {isOpen === index && <div className="text-xl">{data.details}</div>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
