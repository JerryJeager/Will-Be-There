import React from "react";
import { addGuestByEmail } from "../../actions/addGuestByEmail";
import { IoAdd } from "react-icons/io5";

export default function AddNewGuest({ eventID, accToken }: { eventID: string, accToken: string }) {
  return (
    <form action={addGuestByEmail}>
      <div className="flex gap-2">
        <input
          required
          type="email"
          name="email"
          className="flex gap-x-1 items-center text-base font-medium text-[#0B195B] p-2 rounded-[10px] border-[1.5px] border-[#0B195B] hover:bg-[#0B195B] hover:text-white duration-200"
          placeholder="Add New Guest by Email"
        />
        <button>
          <IoAdd className="text-2xl bg-[#0B195B] text-white p-1 rounded-md" />
        </button>
      </div>
      <input type="text" name="event_id" className="hidden" value={eventID} />
      <input type="text" name="token" className="hidden" value={accToken} />
    </form>
  );
}
