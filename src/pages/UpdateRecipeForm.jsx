import React, { useState } from 'react';
import axios from 'axios';

const UpdateRecipeForm = ({ recipeData, onUpdateSuccess }) => {
  const [formData, setFormData] = useState({
    Name: recipeData.Name,
    Cuisine: recipeData.Cuisine,
    Ingredients: recipeData.Ingredients,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/${formData._id}`, formData);

      if (response.status === 200) {
        console.log('Recipe updated successfully');
        onUpdateSuccess();
      } else {
        throw new Error('Error updating recipe');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Edit Recipe</h2>
      <div>
        <label>Name:</label>
        <input type="text" name="Name" value={formData.Name} onChange={handleChange} />
      </div>
      <div>
        <label>Cuisine:</label>
        <input type="text" name="Cuisine" value={formData.Cuisine} onChange={handleChange} />
      </div>
      <div>
        <label>Ingredients:</label>
        {formData.Ingredients.map((ingredient, index) => (
          <input
            key={index}
            type="text"
            value={ingredient}
            onChange={(e) => {
              const newIngredients = [...formData.Ingredients];
              newIngredients[index] = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                Ingredients: newIngredients,
              }));
            }}
          />
        ))}
      </div>
      <button onClick={handleUpdate}>Update Recipe</button>
    </div>
  );
};

export default UpdateRecipeForm;
