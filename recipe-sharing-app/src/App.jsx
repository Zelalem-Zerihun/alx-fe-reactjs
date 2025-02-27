import React, { useEffect } from "react";
import useRecipeStore from "./recipeStore";
import SearchBar from "./SearchBar";
import RecipeList from "./RecipeList";
import FavoritesList from "./FavoritesList";
import RecommendationsList from "./RecommendationsList";

const App = () => {
  const setRecipes = useRecipeStore((state) => state.setRecipes);

  // Example recipes data
  useEffect(() => {
    setRecipes([
      {
        id: 1,
        title: "Spaghetti Bolognese",
        description: "A classic Italian pasta dish",
      },
      {
        id: 2,
        title: "Chicken Curry",
        description: "A spicy and flavorful dish",
      },
      {
        id: 3,
        title: "Vegetable Stir Fry",
        description: "A quick and healthy meal",
      },
      {
        id: 4,
        title: "Chocolate Cake",
        description: "A rich and moist dessert",
      },
    ]);
  }, []);

  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <SearchBar />
      <RecipeList />
      <FavoritesList />
      <RecommendationsList />
    </div>
  );
};

export default App;
