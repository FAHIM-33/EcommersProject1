import { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";

function Searchbar() {
  const [search, setSearch] = useState('')
  const searchRef = useRef();

  function handleSearch() {
    if (!search) { return }
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
        placeholder="Search products  (ctrl+k)"
        className="bg-transparent w-full px-3 outline-none block py-2 my-2 focus:border-b focus:border-prim placeholder:text-mid" />
      <button
        onClick={handleSearch}
        className="p-2 px-4 border-l border-low"><FaSearch></FaSearch></button>
    </div>
  )
}

export default Searchbar