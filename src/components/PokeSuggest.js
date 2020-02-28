import React, { useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import AutoComplete from "./AutoComplete";
import PokemonDisplay from "./PokemonDisplay";

// render all components in PokeSuggest (SearchBar, AutoComplete, PokemonDisplay)

function PokeSuggest() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <h1>Testing PokeSuggest</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <AutoComplete searchTerm={searchTerm} />
      <PokemonDisplay />
    </div>
  );
}

export default PokeSuggest;

/*  POKEMON SEARCH APP
    PLAN

    Behaviours:
    When searching for Pokemon, I want to see a list of options which match what I’m typing.
    When clicking on an item from the options list, we expect to select that Pokemon for the search field
    When clicking the search button, show the selected pokemon’s profile

    App structure:

- PokeSuggest
  - SearchBar
    - SearchField
    - SearchButton
  - AutoComplete
    - OptionsList
    - Option
  - PokemonDisplay
    - PokemonImage
    - PokemonInfo
    */
