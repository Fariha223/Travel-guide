import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">NewTravels</span>
        </Link>
        {user ? user.username : (
          <div className="navItems">
              <div className="text-center py-2 text-gray-500">
                 <Link className="underline text-black" to={'/register'}>Signup</Link>
              </div>
            <div className="text-center py-2 text-gray-500">
                <Link className="underline text-black" to={'/login'}>Login</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
