import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import User from "./components/User";
import BlogPost from "./components/BlogPost";

export default function App() {
  const [isAuthenticated, setAuth] = useState(false);

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |<Link to="/profile">Profile</Link> |
        <Link to="/users/123">User 123</Link> |
        <Link to="/posts/456">Post 456</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/login" element={<Login setAuth={setAuth} />} />

        {/* Protected Profile Route */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        >
          {/* Nested Routes */}
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        {/* Dynamic Routes */}
        <Route path="/users/:userId" element={<User />} />
        <Route path="/posts/:postId" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
}
