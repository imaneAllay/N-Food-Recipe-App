import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from './Nav';

const MyRecipes = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/');
        setData(response.data.data);
        console.log(response.data.data)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4">
            <div className="mb-4"> <Nav/></div>  
      <h2 className="text-orange-500 font-extrabold text-xl  ">
    My Recipes
  </h2> 
      {data.map((item) => (
        <div key={item.id} className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-bold mb-2 text-orange-500">{item.Name}</h2>
          <p className="mb-2 text-gray-700">Cuisine: {item.Cuisine}</p>
          <ul className="text-gray-700">
            
            {item.Ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MyRecipes;
