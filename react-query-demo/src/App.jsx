// Install dependencies: npm install @tanstack/react-query axios
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostsComponent from "./PostsComponent";

// Initialize React Query client
const queryClient = new QueryClient();

// Main App Component
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PostsComponent />
    </QueryClientProvider>
  );
}

export default App;
