// should contain a component (function) x
// take in a searchTerm x
// display the matches in a list x
// fetch the matches from the api x
// when the searchTerm changes, we want to sync our matches

import React, { useState, useEffect } from "react";

function AutoComplete({ searchTerm }) {
  const [matches, setMatches] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/pokemon?search=${searchTerm}`)
      .then(res => res.json())
      .then(data => setMatches(data));
  }, [searchTerm]);

  return matches.map(item => (
    <ul>
      <li>{item.name}</li>
    </ul>
  ));
}

export default AutoComplete;
