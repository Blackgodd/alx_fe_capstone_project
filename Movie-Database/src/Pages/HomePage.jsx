import React, { useState } from 'react';
import SearchBar from '../components/Searchbar';
import MovieList from '../components/MovieList';
import { searchMovies } from '..ImdbService';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (query) => {
    const results = await searchMovies(query);
    setMovies(results);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-4">Search Movies</h1>
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
