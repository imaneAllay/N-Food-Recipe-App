import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from './Nav';
import UpdateRecipe from './UpdateRecipe'; // Import the UpdateRecipe component

const MyRecipes = () => {
  const [data, setData] = useState([]);
  const [editingRecipe, setEditingRecipe] = useState(null); // Track the recipe being edited

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/');
        setData(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // ... your existing handleDelete function ...

  // Function to handle editing a recipe
  const handleEdit = (item) => {
    setEditingRecipe(item);
  };

  // Function to handle canceling the edit
  const handleCancelEdit = () => {
    setEditingRecipe(null);
  };

  // Function to update the recipe after the PUT request
  const handleUpdateRecipe = async (updatedRecipe) => {
    try {
      const response = await axios.put(`http://localhost:3000/api/${updatedRecipe._id}`, updatedRecipe);
      if (response.status === 200) {
        // Update the local data state with the updated recipe from the response.
        setData((prevData) => prevData.map(item => item._id === updatedRecipe._id ? response.data.data : item));
        console.log('Recipe updated successfully');
        setEditingRecipe(null); // Reset the editing state after successful update
      } else {
        throw new Error('Error updating recipe');
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Check if data is undefined before mapping
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="mb-4">
        <Nav />
      </div>
      <h2 className="text-orange-500 font-extrabold text-xl">My Recipes</h2>
      {/* Conditionally render UpdateRecipe component if editingRecipe is set */}
      {editingRecipe ? (
        <UpdateRecipe recipeData={editingRecipe} onUpdate={handleUpdateRecipe} onCancel={handleCancelEdit} />
      ) : (
        data.map((item) => (
          <div key={item._id} className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-bold mb-2 text-orange-500">{item.Name}</h2>
            <p className="mb-2 text-gray-700">Cuisine: {item.Cuisine}</p>
            <ul className="text-gray-700">
              {item.Ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <button
              className="text-white font-thin text-sm bg-orange-500 p-4 m-2"
              onClick={() => handleEdit(item)}
            >
              Update
            </button>
            <button
              className="text-white font-thin text-sm bg-orange-500 p-4"
              
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default MyRecipes;
