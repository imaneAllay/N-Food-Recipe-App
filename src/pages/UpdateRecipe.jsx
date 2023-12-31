import React, { useState } from 'react';

const UpdateRecipe = ({ recipeData, onUpdate }) => {
  const [updatedRecipeData, setUpdatedRecipeData] = useState(recipeData);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update Ingredients as an array if it is the target property
    if (name === 'Ingredients') {
      const ingredientsArray = value.split(',').map((ingredient) => ingredient.trim());
      setUpdatedRecipeData((prevData) => ({
        ...prevData,
        [name]: ingredientsArray,
      }));
    } else if (name === 'Image') {
      // If the image input changes, set the selected image directly in the state
      const file = e.target.files[0];
      setSelectedImage(file);

      // Update the state with the selected image
      setUpdatedRecipeData((prevData) => ({
        ...prevData,
        [name]: file,
      }));
    } else {
      // For other properties, update the state as usual
      setUpdatedRecipeData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('Name', updatedRecipeData.Name);
      formData.append('Cuisine', updatedRecipeData.Cuisine);
      formData.append('Ingredients', updatedRecipeData.Ingredients);
      formData.append('Description', updatedRecipeData.Description);
      formData.append('Image', updatedRecipeData.Image); // Append the image File object

      const response = await fetch(`http://localhost:3000/${recipeData._id}`, {
        method: 'PUT',
        body: formData, // Send the formData containing the image File object
      });

      if (response.ok) {
        console.log('Recipe updated successfully');
        onUpdate(updatedRecipeData); // Notify the parent component (MyRecipes) of the update
      } else {
        throw new Error('Error updating recipe');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);

    // Update the state with the selected image
    setUpdatedRecipeData((prevData) => ({
      ...prevData,
      Image: file,
    }));
  };

  return (
  
          <div className="w-full max-w-sm mx-auto">
      <h2 className="text-orange-500 font-extrabold text-xl">Update Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="Name"
            value={updatedRecipeData.Name}
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
            value={updatedRecipeData.Cuisine}
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
  value={updatedRecipeData.Ingredients.join(', ')} // Join the array back to a string for display
  onChange={handleChange} // Use the handleChange function for updating Ingredients
  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500 text-gray-800"
/>
        </div>
        <div>
          <label htmlFor="description" className="block mb-1">
            Description:
          </label>
          <textarea
            type="text"
            id="description"
            name="Description"
            value={updatedRecipeData.Description}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-gray-800"
          />
        </div>
        <div>
          {/* Display the current image */}
          {recipeData.Image && (
            <img
              className="flex justify-center"
              src={`http://localhost:3000/uploads/${recipeData.Image}`} // Use the generated URL to access the image
              alt={recipeData.Name}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          )}
          <label htmlFor="image" className="block mb-1">
            Update Image:
          </label>
          <input
            type="file"
            id="image"
            name="Image"
            onChange={handleImageChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-gray-800"
          />
        </div>
        <button
          type="submit"
          className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 focus:outline-none"
        >
          Update Recipe
        </button>
     </form>
    </div>
  );
};

export default UpdateRecipe;
