"use client";
import React, { useState } from "react";
import { Wrapper } from "../../shared/Wrapper";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


interface FaqDataItem {
  id: number;
  title: string;
  details: string;
}
const FaqData : FaqDataItem[] = [
  {
    id: 1,
    title: "What Is Will Be There About",
    details: "Will Be There is standard online event planning, guest tracking and management platform making it easy for event organizers to  manage their guest in real time.",
  },
  {
    id: 2,  
    title: "Is it free to use?",
    details: "Will Be There has different pricing structure that fits individual peculiar needs beginning from the free plan to basic and premium.",
  },
  {
    id: 3,
    title: "Do I need to download any software to use Will Be There?",
    details: "Users do not necessarily need to download additional software as our website is web base and responsive on various devices",
  },
  {
    id: 4,
    title: "Can I manage my guest list?",
    details: "Yes, our RSVP app lets you easily handle your guest list. Add, update, and track RSVPs hassle-free, ensuring your event planning runs smoothly.",
  },
  {
    id: 5,
    title: "Can I send follow-up reminders?",
    details: "Yes, our RSVP platform allows you to schedule and send follow-up reminders with ease. Keep your guests informed and ensure maximum attendance with our convenient reminder feature.",
  },
  {
    id: 6,
    title: "Can guests update their RSVP after they respond?",
    details: "Yes, guests can update their RSVP responses at any point, giving them the flexibility they need for your event.",
  },
];

export const Faq: React.FC = () => {
  const [isOpen, setIsOpen] = useState<number | false>(false);

  const handleToggle = (index: number) => {
    isOpen === index ? setIsOpen(false) : setIsOpen(index);
  };

  return (
    <section>
      <Wrapper>
        <div className="flex flex-col items-center justify-center py-10">
          <div className="p-5">
            <p className="text-xl sm:text-3xl text-center font-semibold">
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
                    <p className="text-[1.1rem] pr-2">{data.title}</p>
                    <span className="transition-all duration-200">
                      {isOpen === index ? <IoIosArrowDown /> : <IoIosArrowUp />}
                    </span>
                  </div>
                  <div className="p-2 text-gray-500 ease-in-out transition-all duration-300">
                    {isOpen === index && <div className="text-lg">{data.details}</div>}
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
