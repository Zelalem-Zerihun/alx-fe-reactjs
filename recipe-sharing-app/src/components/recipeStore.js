import create from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [], // List of all recipes
  searchTerm: "", // Search term for filtering
  favorites: [], // List of favorite recipe IDs
  recommendations: [], // Personalized recommendations

  // Actions to update search term and filter recipes
  setSearchTerm: (term) => set({ searchTerm: term }),
  filteredRecipes: [],
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  // Add recipe to favorites
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    })),

  // Remove recipe from favorites
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Generate personalized recommendations based on favorites
  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (recipe) => state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),

  // Set initial recipes (example usage)
  setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),
}));

export default useRecipeStore;
