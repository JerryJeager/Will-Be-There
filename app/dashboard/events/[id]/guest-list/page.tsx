"use client";

import { useRouter } from "next/navigation";
import Searchbar from "../../../../../src/components/Searchbar";
import AddNewGuest from "../../../../../src/components/dashboard/AddNewGuest";
import GuestListTable from "../../../../../src/components/dashboard/GuestListTable";
import { useEffect, useState } from "react";
import axios from "axios";
import { Guests } from "../../../../../src/types/guests";
import { Event } from "../../../../../src/types/event";

const url = "https://will-be-there.onrender.com";

export default function GuestListPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [guests, setGuests] = useState<Guests[] | []>([]);
  const [allGuests, setAllGuests] = useState<Guests[] | []>([]);
  const [event, setEvent] = useState<Event>();
  const [isLoading, setIsLoading] = useState(false);
  const [accToken, setAccToken] = useState("");

  const getEventByID = async (id: string, url: string, token: string) => {
    try {
      const response = await axios.get(`${url}/api/v1/event/${id}`, {
        headers: { Authorization: "Bearer " + token },
      });

      console.log("Event:", response.data);
      setEvent(response.data);
      return response.data;
    } catch (error: any) {
      console.error("Error:", error);
      setEvent({} as Event);
      return [];
    }
  };
  const getGuests = async (id: string, url: string, token: string) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${url}/api/v1/invitation/guests/${id}`,
        {
          headers: { Authorization: "Bearer " + token },
        }
      );

      console.log("Guests:", response.data);
      setGuests(response.data);
      setAllGuests(response.data);
      return response.data;
    } catch (error: any) {
      console.error("Error:", error);
      setGuests([]);
      return [];
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    setAccToken(token);
    if (!token) {
      router.push("/auth/login");
    }

    getGuests(params.id, url, token);
    getEventByID(params.id, url, token);
  }, [0]);
  return (
    <main className="space-y-6">
      <header className="text-[#303036]">
        <h1 className="font-medium text-2xl leading-9 capitalize ">
          Guest list for{" "}
          {event && event.name ? (
            <span className="font-bold">{event.name}</span>
          ) : (
            <div className="animate-pulse inline-block w-fit rounded-full">
              ...
            </div>
          )}
        </h1>
      </header>

      <section className="space-y-6">
        <div className="flex justify-between items-center md:flex-nowrap flex-wrap md:gap-y-0 gap-y-5">
          {event && <AddNewGuest eventID={event.id} accToken={accToken} />}
          <Searchbar
            allGuests={allGuests}
            setGuests={setGuests}
          />
        </div>

        <div className="rounded-lg overflow-hidden">
          <div className="bg-[#DFE0FF] text-[#0B195B] grid grid-cols-12 p-4">
            <div className="min-[800px]:col-span-1 col-span-2">SN.</div>
            <div className="min-[800px]:col-span-3 col-span-4">Name</div>
            <div className="xl:col-span-3 col-span-4">Email</div>
            <div className="col-span-3 min-[800px]:block hidden">Status</div>

            <div className="xl:col-span-2 min-[800px]:col-span-1 col-span-2">
              {/*meant to be empty*/}
            </div>
          </div>

          {guests.length === 0 && isLoading ? (
            <div className="animate-pulse w-fit rounded-full">Loading ...</div>
          ) : (
            guests.map((guest, index) => (
              <GuestListTable key={guest.id} guest={guest} index={index} />
            ))
          )}
        </div>
      </section>
    </main>
  );
}
