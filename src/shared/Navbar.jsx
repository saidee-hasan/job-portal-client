import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";

function Navbar() {
  const {signOutUser,user}=useContext(AuthContext)
const handleSignOut =()=>{
  signOutUser ()
  .then(res => console.log(res))
  .catch(err => console.error(err));
}
    return (
      <div>
        <div className="navbar bg-base-100 shadow-lg"> {/* Added shadow for depth */}
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
                <li><a href="#item1">Home</a></li>
                <li><a href="#item2">Item 2</a></li> {/* Added Item 2 */}
                <li><a href="#item3">About</a></li>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">daisyUI</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
            <li><a href="#item1">Home</a></li>
                <li><a href="#item2">Item 2</a></li> {/* Added Item 2 */}
                <li><a href="#item3">About</a></li>
            </ul>
          </div>
          <div className="navbar-end">
          {
                    user ? (
                      <div className="dropdown dropdown-end">
                      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                          <img
                            alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                      </div>
                      <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                          <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                          </a>
                        </li>
                        <li><a >Settings</a></li>
                        <li ><a onClick={handleSignOut}>Logout</a></li>
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