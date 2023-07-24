// import React, { useState } from 'react';

// const UpdateRecipeForm = ({ recipeData, onUpdate }) => {
//   const [formData, setFormData] = useState({
//     Name: recipeData.Name,
//     Cuisine: recipeData.Cuisine,
//     Ingredients: recipeData.Ingredients,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onUpdate(formData); // Pass the updated data to the parent component
//   };

//   return (
//     <div>
//       <h2>Edit Recipe</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input type="text" name="Name" value={formData.Name} onChange={handleChange} />
//         </div>
//         <div>
//           <label>Cuisine:</label>
//           <input type="text" name="Cuisine" value={formData.Cuisine} onChange={handleChange} />
//         </div>
//         <div>
//           <label>Ingredients:</label>
//           {formData.Ingredients.map((ingredient, index) => (
//             <input
//               key={index}
//               type="text"
//               value={ingredient}
//               onChange={(e) => {
//                 const newIngredients = [...formData.Ingredients];
//                 newIngredients[index] = e.target.value;
//                 setFormData((prevData) => ({
//                   ...prevData,
//                   Ingredients: newIngredients,
//                 }));
//               }}
//             />
//           ))}
//         </div>
//         <div>
//           <label>Description:</label>
//           <input type="textarea" name="Description" value={formData.Description} onChange={handleChange} />
//         </div>
//         <button type="submit">Update Recipe</button>
//       </form>
//     </div>
//   );
// };

// export default UpdateRecipeForm;
