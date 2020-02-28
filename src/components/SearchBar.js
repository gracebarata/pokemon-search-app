import React from "react";

function SearchBar({ searchTerm, setSearchTerm }) {
  function handleChange(e) {
    console.log(e.target.value);
    setSearchTerm(e.target.value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="start your search here"
        onChange={handleChange}
        searchTerm={searchTerm}
      ></input>
    </div>
  );
}

export default SearchBar;

/* - searchTerm
      - needs to be seen by search bar > search field, autocomplete > options list
      - needs to be edited by options > option, search bar > search field
        - options needs to be able to set the searchTerm when clicking an option
        - search field needs to be able to set the searchTerm when typing in to the input
      - lives in PokeSuggest */
