import { useEffect, useState } from 'react';
import axios from 'axios';
import { useGetUserID } from '../hooks/useGetUserID';

export const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const userID = useGetUserID()

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get('http://localhost:3001/recipes');
        setRecipes(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRecipe();
  }, []);

  const saveRecipe = async (recipeID) => {
    try {
      const response = await axios.put('http://localhost:3001/recipes', {
        recipeID,
        userID,
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>My Recipes</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe._id}>
            <div>
              <h2>{recipe.name}</h2>
              <button onClick={() => saveRecipe(recipe._id)}>
                Save to My Recipes
              </button>
            </div>
            <div className='instructions'>
              <p>{recipe.instructions}</p>
            </div>
            <img src={recipe.imageUrl} alt={recipe.name} />
            <p>Cooking Time: {recipe.cookingtime} (minutes)</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
