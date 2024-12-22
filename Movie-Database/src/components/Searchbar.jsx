import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
      setQuery('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input 
        type="text" 
        placeholder="Search for a movie..." 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        className="w-full p-2 border border-gray-400 rounded-l-md" 
      />
      <button 
        type="submit" 
        className="bg-blue-500 text-white px-4 py-2 rounded-r-md">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
