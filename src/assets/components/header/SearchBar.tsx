import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchTerm("");
    navigate(`/search-results?query=${searchTerm}`);
  };

  return (
    <form onSubmit={handleSubmit} className="hidden w-full max-w-md mx-5 search:block">
      <div className="flex rounded-4xl text-red-500 h-9">
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={handleInputChange}
          className="flex-grow rounded-l-2xl p-4 bg-[#292929]"
        />
        <button
          type="submit"
          className="bg-[#FFD1DC] text-white rounded-r-2xl p-4 hover:bg-gray-800 flex items-center"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-black" />
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
