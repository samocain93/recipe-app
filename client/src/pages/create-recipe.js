import { useState } from 'react';

export const CreateRecipe = () => {
  const [recipe, setRecipe] = useState({
    name: '',
    ingredients: [],
    instructions: '',
    imageUrl: '',
    cookingTime: 0,
    userOwner: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleIngredientChange = (event, index) => {
    const { value } = event.target;
    const ingredients = recipe.ingredients;
    ingredients[index] = value;
    setRecipe({ ...recipe, ingredients });
  };

  const addIngredient = () => {
    setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ''] });
  };

  console.log(recipe);

  return (
    <div className='create-recipe'>
      <h2>Create Recipe</h2>
      <form>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' name='name' onChange={handleChange} />

        <label htmlFor='ingredients'>Ingredients</label>
        {recipe.ingredients.map((ingredient, index) => (
          <input
            key={index}
            type='text'
            name='ingredients'
            value={ingredient}
            onChange={(event) => handleIngredientChange(event, index)}
          />
        ))}
        <button type='button' onClick={addIngredient}>
          Add Ingredient
        </button>

        <label htmlFor='instructions'>Instructions</label>
        <textarea
          id='instructions'
          name='instructions'
          onChange={handleChange}
        ></textarea>

        <label htmlFor='imageUrl'>Image URL</label>
        <input
          type='text'
          id='imageUrl'
          name='imageUrl'
          onChange={handleChange}
        />

        <label htmlFor='cookingTime'>Cooking Time (minutes)</label>
        <input
          type='number'
          id='cookingTime'
          name='cookingTime'
          onChange={handleChange}
        />
        <button type='submit'>Create Recipe</button>
      </form>
    </div>
  );
};
