import React, { useState, useEffect } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { MovieList } from "./components/MovieList/MovieList";
import { Movie, discoverMovies } from "./services/movies.service";
import { MoviesContext } from "./services/context";

function App() {
    useEffect(() => {
        discoverMovies()
            .then(setMovies)
            .catch((_) => setMovies([]));
    }, []);

    const [movies, setMovies] = useState<Movie[]>([]);

    return (
        <MoviesContext.Provider value={{ movies, updateMovies: setMovies }}>
            <div className="App">
                <Header></Header>
                <MovieList></MovieList>
            </div>
        </MoviesContext.Provider>
    );
}

export default App;