import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";
import SearchBar from "./SearchBar";
import RecipeList from "./RecipeList";
import FavoritesList from "./FavoritesList";
import RecommendationsList from "./RecommendationsList";
import RecipeDetails from "./RecipeDetails";

const App = () => {
  const setRecipes = useRecipeStore((state) => state.setRecipes);

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
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/favorites">Favorites</Link> |{" "}
          <Link to="/recommendations">Recommendations</Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar />
                <RecipeList />
              </>
            }
          />
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="/recommendations" element={<RecommendationsList />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
