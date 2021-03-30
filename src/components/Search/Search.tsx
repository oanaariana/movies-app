import React, { useState, useContext } from "react"

import { searchMovies } from "../../services/movies.service";
import { MoviesContext } from "../../services/context";

export const Search = () => {
  const { updateMovies } = useContext(MoviesContext);
  const [ searchTerm, setSearchTerm ] = useState("");
 
  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm) {
      searchMovies(searchTerm).then((movies) => {
        updateMovies(movies);
      })
      setSearchTerm("");
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }

  return (
    <div>
      <form name="form" onSubmit={handleOnSubmit} noValidate>
        <input
          type="search"
          name="movie"
          className="search"
          placeholder="Search movie ... "
          value={searchTerm}
          onChange={handleOnChange}
        />
      </form>
    </div>
  );
};