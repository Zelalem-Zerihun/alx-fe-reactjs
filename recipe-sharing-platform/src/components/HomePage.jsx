import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">
        Recipe Sharing Platform
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-lg font-semibold mt-4">{recipe.title}</h2>
            <p className="text-gray-600 text-sm mt-2">{recipe.summary}</p>
            <a
              href={`/recipe/${recipe.id}`}
              className="block mt-4 text-blue-500 hover:underline"
            >
              View Recipe
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
