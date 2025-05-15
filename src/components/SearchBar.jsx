import { useState } from "react";
import { SearchPack } from "../APIs/PackageApi";

const SearchBar = ({ onResults, onClear }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    try {
      const results = await SearchPack(query);
      onResults(results);
    } catch (err) {
      console.error("Search failed:", err);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

   
    if (value.trim() === "") {
      onClear();
    }
  };

  return (
    <form className="flex items-center max-w-sm mx-auto mt-5" onSubmit={handleSubmit}>
      <label className="sr-only">Search</label>
      <div className="relative w-full">
        <input
          type="text"
          name="Qsearch"
          value={query}
          onChange={handleChange}
          id="simple-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
          placeholder="Search package name..."
        />
      </div>
      <button
        type="submit"
        className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
      >
        <svg
          className="w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
        <span className="sr-only">Search</span>
      </button>
    </form>
  );
};

export default SearchBar;
