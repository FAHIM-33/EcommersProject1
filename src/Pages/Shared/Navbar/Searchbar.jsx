import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function Searchbar() {
  const [search, setSearch] = useState('')

  return (
    <div className='flex bg-low'>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products..."
        className="bg-transparent w-full px-3 outline-none block py-2 my-2 rounded-sm" />
      <button className="p-2"><FaSearch></FaSearch></button>
    </div>
  )
}

export default Searchbar