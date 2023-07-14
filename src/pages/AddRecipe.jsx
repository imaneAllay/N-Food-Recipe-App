import React, { useState } from 'react';
import Nav from './Nav';

const AddRecipe = () => {
  const [recipeData, setRecipeData] = useState({
    Name: '',
    Cuisine: '',
    Ingredients: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'ingredients') {
      const ingredientsArray = value.split(',').map((ingredient) => ingredient.trim());
      setRecipeData((prevData) => ({
        ...prevData,
        ingredients: ingredientsArray,
      }));
    } else {
      setRecipeData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(recipeData),
        
      });
      console.log(recipeData)
      if (response.ok) {
        // Handle the successful response, e.g., show a success message or redirect to a new page
        console.log('Recipe added successfully');
        // Reset the form fields after successful submission
        setRecipeData({
          Name: '',
          Cuisine: '',
          Ingredients: '',
        });
      } else {
        throw new Error('Error adding recipe');
      }
    } catch (error) {
      // Handle the error, e.g., display an error message
      console.error(error);
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto">
     <div className="mb-4"> <Nav/></div>  
<h2 className="text-orange-500 font-extrabold text-xl  ">
    Add your Recipe
  </h2>    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
      
        <label htmlFor="name" className="block mb-1">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="Name"
          value={recipeData.Name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-gray-800"
        />
      </div>
      <div>
        <label htmlFor="cuisine" className="block mb-1">
          Cuisine:
        </label>
        <input
          type="text"
          id="cuisine"
          name="Cuisine"
          value={recipeData.Cuisine}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-gray-800"
        />
      </div>
      <div>
        <label htmlFor="ingredients" className="block mb-1">
          Ingredients (comma-separated):
        </label>
        <input
          type="text"
          id="ingredients"
          name="Ingredients"
          value={recipeData.Ingredients}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500 text-gray-800"
        />
      </div>
      <button
        type="submit"
        className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 focus:outline-none"
      >
        Add Recipe
      </button>
    </form>
  </div>
);
};



export default AddRecipe;
