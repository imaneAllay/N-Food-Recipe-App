import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from './Nav';
import UpdateRecipe from './UpdateRecipe'; // Import the UpdateRecipe component
import RecipeSearch from './RecipeSearch';

const MyRecipes = () => {
  const [data, setData] = useState([]);
  const [editingRecipe, setEditingRecipe] = useState(null);
  const [recipes, setRecipes] = useState([]);

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

  const handleEdit = (recipe) => {
    setEditingRecipe(recipe);
  };

  const handleCancelEdit = () => {
    setEditingRecipe(null);
  };

  const handleUpdateRecipe = async (updatedData) => {
    try {
      const response = await axios.put(`http://localhost:3000/${editingRecipe._id}`, updatedData);

      if (response.status === 200) {
        console.log('Recipe updated successfully');
        setEditingRecipe(null);
        setData((prevData) =>
          prevData.map((recipe) => (recipe._id === editingRecipe._id ? { ...recipe, ...updatedData } : recipe))
        );
      } else {
        throw new Error('Error updating recipe');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (recipeId) => {
    try {
      const response = await axios.delete(`http://localhost:3000/${recipeId}`);

      if (response.status === 200) {
        console.log('Recipe deleted successfully');
        setData((prevData) => prevData.filter((recipe) => recipe._id !== recipeId));
      } else {
        throw new Error('Error deleting recipe');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (searchResults) => {
    setRecipes(searchResults);
  };

  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="mb-4">
        <Nav />
      </div>

      <h2 className="text-orange-500 font-extrabold text-xl">My Recipes</h2>
      <div>
        <div className="mb-2 text-gray-700">
          <RecipeSearch onSearch={handleSearch} />
        </div>
      </div>

      {/* Conditionally render UpdateRecipe component if editingRecipe is set */}
      {editingRecipe ? (
        <UpdateRecipe recipeData={editingRecipe} onUpdate={handleUpdateRecipe} onCancel={handleCancelEdit} />
      ) : (
        // Render either the filtered recipes or all the recipes from the data state
        (recipes.length > 0 ? recipes : data).map((item) => (
          <div key={item._id} className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-bold mb-2 text-orange-500">{item.Name}</h2>
            <div className="flex justify-center">
              <img src={`http://localhost:3000/${item.Image}`} alt={item.Name} className="w-20 h-auto" />
            </div>

            <p className="mb-2 text-gray-700">Cuisine: {item.Cuisine}</p>
            <ul className="text-gray-700">
              {item.Ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <p className="mb-2 text-gray-700">Description: {item.Description}</p>

            <button className="text-white font-thin text-sm bg-orange-500 p-4 m-2" onClick={() => handleEdit(item)}>
              Update
            </button>
            <button className="text-white font-thin text-sm bg-orange-500 p-4" onClick={() => handleDelete(item._id)}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default MyRecipes;
