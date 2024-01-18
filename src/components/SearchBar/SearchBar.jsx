
import "./SearchBar.css";
export default function SearchBar({searchText,handleSearch}) {
  return (
    <input
    type="text"
    placeholder="Search by name, email or role"
    value={searchText}
    onChange={handleSearch}
    className="search-bar"
  />
  )
}
