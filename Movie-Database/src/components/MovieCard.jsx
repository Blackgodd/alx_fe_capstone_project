import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md">
      <img src={movie.Poster} alt={movie.Title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold">{movie.Title}</h2>
        <p className="mt-2">Year: {movie.Year}</p>
        <Link to={`/movie/${movie.imdbID}`} className="text-blue-500 mt-4 block">View Details</Link>
      </div>
    </div>
  );
};

export default MovieCard;
