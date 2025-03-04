import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import EditRecipeForm from "./components/EditRecipeForm";
import DeleteRecipeButton from "./components/DeleteRecipeButton";
import AddRecipeForm from "./components/AddRecipeForm"; // ✅ Import AddRecipeForm

const App = () => {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        {/* ✅ Include AddRecipeForm */}
        <AddRecipeForm />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
          <Route path="/edit/:recipeId" element={<EditRecipeForm />} />
          {/* No need for a separate route for delete; handled via button */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
