import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find(
          (recipe) => recipe.id === parseInt(id)
        );
        setRecipe(selectedRecipe);
      })
      .catch((error) => console.error("Error loading data:", error));
  }, [id]);

  if (!recipe) {
    return <div className="text-center text-gray-600">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-md"
        />
        <h1 className="text-2xl font-bold mt-4">{recipe.title}</h1>
        <p className="text-gray-600 mt-2">{recipe.summary}</p>
        <h2 className="text-xl font-semibold mt-6">Ingredients</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          {recipe.ingredients?.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h2 className="text-xl font-semibold mt-6">Instructions</h2>
        <ol className="list-decimal list-inside text-gray-700 mt-2">
          {recipe.instructions?.map((step, index) => (
            <li key={index} className="mt-1">
              {step}
            </li>
          ))}
        </ol>
        <a
          href="/"
          className="block mt-6 text-blue-500 hover:underline text-center"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}

export default RecipeDetail;
