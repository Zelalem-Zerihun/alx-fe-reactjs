import React from "react";
import useRecipeStore from "./recipeStore";

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  const favorites = useRecipeStore((state) => state.favorites);

  return (
    <div>
      <h2>Recipes</h2>
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          {favorites.includes(recipe.id) ? (
            <button onClick={() => removeFavorite(recipe.id)}>
              Remove from Favorites
            </button>
          ) : (
            <button onClick={() => addFavorite(recipe.id)}>
              Add to Favorites
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
