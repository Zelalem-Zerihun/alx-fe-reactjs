import { Link, Outlet } from "react-router-dom";

const Profile = () => (
  <div>
    <h2>Profile Page</h2>
    <nav>
      <Link to="details">Details</Link> |<Link to="settings">Settings</Link>
    </nav>
    <Outlet />
  </div>
);

export default Profile;
