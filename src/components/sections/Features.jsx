import React from "react";
import icon1 from "../../../public/assets/icon1.png";
import icon2 from "../../../public/assets/icon2.png";
import icon3 from "../../../public/assets/icon3.png";
import icon4 from "../../../public/assets/icon4.png";
import icon5 from "../../../public/assets/icon5.png";
import icon6 from "../../../public/assets/icon6.png";
import Image from "next/image";
import { Wrapper } from "../../shared/Wrapper";

export const Featuredata = [
  {
    id: 1,
    icon: icon1,
    title: "Personalize Invite",
    text: "Easily customize invitations effortlessly to reflect your unique style and event theme",
  },
  {
    id: 2,
    icon: icon2,
    title: "Feedback Message",
    text: "Stay informed about guest attendance with RSVP responses indicating their attendance status",
  },
  {
    id: 3,
    icon: icon3,
    title: "Guest List Tracking",
    text: "Manage your guest list and track delivery status to recipients' emails with precision",
  },
  {
    id: 4,
    icon: icon4,
    title: "Event Reminder",
    text: "Never miss a beat, Receive timely reminders for both hosts and RSVPs as the big day approaches",
  },
  {
    id: 5,
    icon: icon5,
    title: "Invite Update",
    text: "Receive instant notifications for any updates to RSVPs, including additional guests or gift items",
  },
  {
    id: 6,
    icon: icon6,
    title: "Special Note",
    text: "RSVPs can include special notes or congratulatory messages to enhance the event experience",
  },
];

export const Features = () => {
  return (
    <section id="feature" className="">
      <div className="bg-[#0D154B] flex flex-col justify-center items-center p-5 pb-12">
        <div className="text-center space-y-5 p-5 pt-10 ">
          <p className="text-[#BCC2FF] text-4xl font-bold">Features</p>
          <p className="text-white text-lg  md:text-xl">
            Essential Tools for Seamless Planning and Delighted Guests.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:m-6">
          {Featuredata.map((data) => {
            return (
              <div
                key={data.id}
                className="hover:shadow-2xl shadow-indigo-500 hover:scale-105  cursor-pointer transition-all duration-200 text-white bg-[#BCC2FF]/20 min-w-full lg:w-[23rem] h-[16rem] md:h-[20rem] lg:h-[16rem] rounded-lg flex flex-col items-center justify-center space-y-2 p-4 lg:p-8"
              >
                <p className="text-center h-[4rem] w-[4rem]">
                  <Image
                    src={data.icon}
                    alt="icon"
                    width="400"
                    height={"500"}
                    quality={100}
                    className="w-full h-full"
                  />
                </p>
                <p className="text-[#FFFFFF] font-bold">{data.title}</p>
                <p className="text-[1rem] font-[500] text-center p-2 text-[#F5F2FA]">
                  {data.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
