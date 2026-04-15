import { useParams, useOutletContext } from "react-router-dom";

function MovieCard() {
  const { movieId } = useParams();
  const { director } = useOutletContext();

  if (!director) return <h2>Director not found.</h2>;
  
  const movie = director.movies.find((m) => String(m.id) === String(movieId))
  if (!movie) {
    return (
      <div className="error-message">
        <h2>🎬 Movie not found.</h2>
        <p>We couldn't find a movie with ID: {movieId} for this director.</p>
      </div>
    );
  }

  return (
    <div className="movie-detail">
      <h2>{movie.title}</h2>
      <p>⏱️ Duration: {movie.time} minutes</p>
      <p>🎬 Genres: {movie.genres.join(", ")}</p>
    </div>
  ); 
}

export default MovieCard
