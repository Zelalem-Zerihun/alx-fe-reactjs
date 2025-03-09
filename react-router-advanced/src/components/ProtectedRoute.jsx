import { useAuth } from "./useAuth"; // Import the useAuth hook
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // Use the authentication state

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
