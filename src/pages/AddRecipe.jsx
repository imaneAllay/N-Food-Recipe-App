import React, { useState } from 'react';
import Nav from './Nav';
import axios from 'axios';

const AddRecipe = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const [recipeData, setRecipeData] = useState({
    Name: '',
    Cuisine: '',
    Ingredients: '',
    Description: '',
    Image:''
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  
    // Assuming you want to store the image file in the recipeData state
    setRecipeData((prevData) => ({
      ...prevData,
      Image: file,
    }));
  };
  
  
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('Name', recipeData.Name);
      formData.append('Cuisine', recipeData.Cuisine);
      formData.append('Ingredients', recipeData.Ingredients);
      formData.append('Description', recipeData.Description);
      formData.append('Image', selectedImage); // Append the image to the formData

      const response = await axios.post('http://localhost:3000/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set the content type to multipart/form-data for file upload
        },
      });

      if (response.status === 200) {
        console.log('Recipe added successfully');
        // Reset the form fields after successful submission
        setRecipeData({
          Name: '',
          Cuisine: '',
          Ingredients: '',
          Description: '',
          Image:''

        });
        setSelectedImage(null);
      } else {
        throw new Error('Error adding recipe');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="mb-4">
        <Nav />
      </div>
      <h2 className="text-orange-500 font-extrabold text-xl">Add your Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
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
    <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="Description"
          value={recipeData.Description}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500 text-gray-800"
        />
     </div>  
     
        <div>
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            name="Image"
            onChange={handleImageChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500 text-gray-800"
          />
        </div>
        <button type="submit" className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 focus:outline-none">
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipe;
