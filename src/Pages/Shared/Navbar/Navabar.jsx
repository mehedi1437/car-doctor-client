import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navabar = () => {
  const {logOut,user} = useContext(AuthContext)
  const navItem = (
    <>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
     {user ?  <>
      <li>
        <Link to='/bookings'>Bookings</Link>
      </li>
     </> : <li>
        <Link to='/login'>Log in</Link>
      </li>}
    </>
  );

  const handleLogOut =()=>{
    logOut()
    .then(result=>{
     const loggedOutUser = result?.user
      console.log(loggedOutUser);
    })
    .catch(error=>console.error(error))
  }
  return (
    <div className="navbar bg-base-100 h-28 mb-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItem}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          {" "}
          <img src={logo} alt="" />{" "}
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItem}</ul>
      </div>
      <div className="navbar-end gap-3">
        <a className="btn btn-outline btn-error">Apponment</a>
       { user && <a onClick={handleLogOut} className="btn btn-outline btn-error">Log Out</a>}
      </div>
    </div>
  );
};

export default Navabar;
