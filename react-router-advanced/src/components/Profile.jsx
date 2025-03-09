import { Routes, Route, Link, Outlet } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

const Profile = () => (
  <div>
    <h2>Profile Page</h2>
    <nav>
      <Link to="details">Details</Link> |<Link to="settings">Settings</Link>
    </nav>

    {/* Nested Routes */}
    <Routes>
      <Route path="details" element={<ProfileDetails />} />
      <Route path="settings" element={<ProfileSettings />} />
    </Routes>

    {/* Outlet for rendering nested routes */}
    <Outlet />
  </div>
);

export default Profile;
