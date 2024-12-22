import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/">Movie Database</Link>
        </h1>
        <nav>
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/search">Search</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
