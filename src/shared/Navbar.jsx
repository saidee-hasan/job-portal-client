import { Link, NavLink } from "react-router-dom"; // Import NavLink
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";
import Logo from "../assets/logo.png"
function Navbar() {
  const { signOutUser , user } = useContext(AuthContext);
  
  const handleSignOut = () => {
    signOutUser ()
      .then(res => console.log(res))
      .catch(err => console.error(err));
  }

  return (
    <div>
      <div className="navbar bg-base-100 bg-opacity-80 fixed z-40 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" aria-label="Open menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><NavLink to="/" activeClassName="text-orange-400">Home</NavLink></li>
              <li><NavLink to="/my-application" activeClassName="text-orange-400">MyApplication</NavLink></li>
              <li><NavLink to="/about" activeClassName="text-orange-400">About</NavLink></li>
            </ul>
          </div>
          <img className="w-8" src={Logo} alt="" />
          <NavLink to="/" className=" p-2 font-bold text-xl">Job <span className="text-orange-400">Portal</span></NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><NavLink to="/" activeClassName="text-orange-400">Home</NavLink></li>
            <li><NavLink to="/my-application" activeClassName="text-orange-400">MyApplication</NavLink></li>
            <li><NavLink to="/about" activeClassName="text-orange-400">About</NavLink></li>
          </ul>
        </div>
        <div className="navbar-end">
          {
            user ? (
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="User  Avatar"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                  <li>
                    <NavLink to="/profile" className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </NavLink>
                  </li>
                  <li><NavLink to="/settings">Settings</NavLink></li>
                  <li><a onClick={handleSignOut}>Logout</a></li>
                </ul>
              </div>
            ) : (
              <Link to={'/register'}>
                <button
                  className='bg-green-600 text-white p-2 rounded-md hover:bg-green-700 transition duration-200'
                  aria-label="Login"
                >
                  Login
                </button>
              </Link>
            )
          }
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Navbar;