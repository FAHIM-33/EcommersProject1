import { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./navbar.css"


function Searchbar() {
  const [search, setSearch] = useState('')
  const [isFocused, setFocused] = useState(false)
  const searchRef = useRef();
  const autofillRef = useRef();

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
        e.preventDefault()
        searchRef.current.focus()
      }
    }
    function hideSearch(e) {
      if (e.target != searchRef.current && e.target != autofillRef.current) {
        setFocused(false)
      }
    }
    document.addEventListener('keydown', shortFocus)
    document.addEventListener('click', hideSearch)
    return () => { document.removeEventListener('keydown', shortFocus) }
  }, [])

  return (
    <div className='flex relative bg-low my-2 rounded-md'>
      <input
        value={search}
        ref={searchRef}
        onFocus={() => setFocused(!isFocused)}
        onChange={(e) => { setSearch(e.target.value) }}
        onKeyDown={handleKeypress}
        placeholder="Search products  (ctrl+k)"
        className="bg-transparent w-full px-3 outline-none block py-1 my-2 focus:border-b focus:border-prim placeholder:text-mid" />

      <button
        onClick={handleSearch}
        className="p-2 px-4 border-l border-low hover:text-prim duration-200 text-xl"><FaSearch></FaSearch></button>

      <div
        ref={autofillRef}
        className={`search-autofill ${isFocused ? 'block' : 'hidden'} absolute w-full h-20 top-14 bg-low rounded-md`}>
        <p className="text-center">No results</p>
        <button onClick={() => alert("you clicked")}>press here</button>
      </div>
    </div>
  )
}

export default Searchbar