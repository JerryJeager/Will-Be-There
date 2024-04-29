import { IoSearch } from "react-icons/io5"

export default function Searchbar() {
    
    return (
        <div className="h-full flex flex-row items-center p-2 rounded-md transition-all ease-in bg-white">
            <IoSearch />
            <input type="text" placeholder="Search" className="bg-transparent border-none h-full outline-none"/>
        </div>
    )
}