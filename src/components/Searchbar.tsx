import { Dispatch, SetStateAction } from "react";
import { IoSearch } from "react-icons/io5";
import { Guests } from "../types/guests";

export default function Searchbar({
  allGuests,
  setGuests,
}: {
  allGuests: Guests[];
  setGuests: Dispatch<SetStateAction<[] | Guests[]>>;
}) {
  const searchGuests = (e) => {
    const search = String(e.target.value).toLowerCase();
    let filtered: Guests[] = [];
    filtered = allGuests.filter(
      (guest) =>
        guest.email.toLowerCase().includes(search) ||
        guest.first_name.toLowerCase().includes(search) ||
        guest.last_name.toLowerCase().includes(search)
    );
    if (filtered.length >= 1) {
      setGuests(filtered);
    } else {
      setGuests(allGuests);
    }
  };

  return (
    <div className="h-full flex flex-row items-center p-2 rounded-md transition-all ease-in bg-white">
      <IoSearch />
      <input
        onChange={(e) => searchGuests(e)}
        name="search"
        type="text"
        placeholder="Search"
        className="bg-transparent border-none h-full outline-none"
      />
    </div>
  );
}
