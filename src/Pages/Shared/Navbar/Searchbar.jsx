import { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";

function Searchbar() {
  const [search, setSearch] = useState('')
  const searchRef = useRef();

  function handleSearch() {
    alert(`Searching for ${search}`)
  }

  function handleKeypress(e) {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }

  useEffect(() => {
    function shortFocus(e) {
      if (e.ctrlKey && e.key == 'k') {
        searchRef.current.focus()
      }
    }
    document.addEventListener('keydown', shortFocus)
    return () => { document.removeEventListener('keydown', shortFocus) }
  }, [])

  return (
    <div className='flex bg-low'>
      <input
        value={search}
        ref={searchRef}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeypress}
        placeholder="Search products..."
        className="bg-transparent w-full px-3 outline-none block py-2 my-2 rounded-sm" />
      <button
        onClick={handleSearch}
        className="p-2"><FaSearch></FaSearch></button>
    </div>
  )
}

export default Searchbar