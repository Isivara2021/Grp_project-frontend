import React from 'react';
import './SearchButton.css'; // Import the CSS file

const SearchButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="search-button">
      Search
    </button>
  );
};

export default SearchButton;
