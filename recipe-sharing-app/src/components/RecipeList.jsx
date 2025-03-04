import React from "react";
import { Link } from "react-router-dom"; // Import Link
import useRecipeStore from "../recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2>Recipe List</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            {/* Link to the individual recipe details page */}
            <Link to={`/recipe/${recipe.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
