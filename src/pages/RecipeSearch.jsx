
import React, { useState } from 'react';
import axios from 'axios';

const RecipeSearch = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async () => {
    try {
        console.log(searchQuery)
      const response = await axios.get(`http://localhost:3000/search?query=${searchQuery}`);

      if (response.status === 200) {
        onSearch(response.data.data); // Pass the search results to the parent component
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div >
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search recipes ..."
        className="m-3 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-gray-800"

      />
      <button className="text-white font-thin text-sm bg-orange-500 p-4" onClick={handleSearch}>Search</button>
    </div>
  );
};

export default RecipeSearch;
