// src/components/SearchExperience.tsx

import * as React from "react";
import {
  SearchBar
  } from "@yext/search-ui-react";

import ProfessionalSearch from "./ProfessionalSearch";

const SearchExperience = () => {

  return (
      <div className="px-4 py-8">
        <div className="mx-auto flex max-w-5xl flex-col">
          <SearchBar placeholder="Search"/>
          <ProfessionalSearch/>
        </div>
      </div>
  );
};

export default SearchExperience;