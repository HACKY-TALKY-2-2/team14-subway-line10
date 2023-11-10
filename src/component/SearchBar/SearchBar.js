import React, { useState } from "react";
import { SearchText } from "./SearchText.js";

export const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
      <SearchText onChange={handleSearchChange} />
  );
};
