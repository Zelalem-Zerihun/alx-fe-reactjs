import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !ingredients || !steps) {
      setError("All fields are required.");
      return;
    }
    setError("");
    console.log({ title, ingredients, steps });
  };

  return (
    <div className="max-w-lg mx-auto my-10 p-6 bg-gray-100 rounded-lg shadow-md md:p-8">
      <h2 className="text-2xl font-bold text-center text-blue-800 mb-6 md:text-3xl">
        Add a New Recipe
      </h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-semibold md:text-lg">
            Recipe Title:
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none md:p-3"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold md:text-lg">
            Ingredients:
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none md:p-3"
            rows="4"
          ></textarea>
        </div>
        <div>
          <label className="block text-gray-700 font-semibold md:text-lg">
            Preparation Steps:
          </label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none md:p-3"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition duration-300 md:p-4"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
