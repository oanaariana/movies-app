import React, { useContext } from "react"
import imgPlaceholder from "./image_placeholder.png"
import { MoviesContext } from "../../services/context"

export const MovieList = () => {
    const { movies } = useContext(MoviesContext);

    return (
        <div className="movie-container">

            {movies.slice(0, 20).sort((a,b) => b.rating - a.rating).map((movie) => (
                <div className="movie" key={movie.id}>
                    <img src={movie.picture || imgPlaceholder} alt={movie.title} />
                    <div className="movie-info">
                        <h3>{movie.title}</h3>
                        <span>{movie.rating}</span>
                    </div>
                    <div className="movie-overview">
                        <h2>Overview:</h2>
                        <p>{movie.resume}</p>
                    </div>
                </div>
            ))}

        </div>
    );
}

export default MovieList;