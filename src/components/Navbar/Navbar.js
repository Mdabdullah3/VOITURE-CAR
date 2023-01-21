import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { TiThMenuOutline } from "react-icons/ti";
import logo from '../../image/logo.png'
import "./Navbar.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [user] = useAuthState(auth);
  return (
    <div>
      {/* Navbar Icons */}
      <div
        onClick={() => setOpen(!open)}
        className="md:hidden text-white absolute right-0 top-10 icon"
      >
        {open ? <ImCross></ImCross> : <TiThMenuOutline></TiThMenuOutline>}
      </div>
      <div className="navbar">
        <div className="logo">
          <p className="logo font-mono">
            <img src={logo} alt="" />
          </p>
        </div>
        <div
          className={`absolute md:static font-mono duration-500 ease-in ${
            open ? "top-20 flex flex-col" : "top-[-120px]"
          }`}
        >
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "link")}
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "link")}
            to="/blog"
          >
            Blogs
          </NavLink>
          {user ? (
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "link")}
              to="/myItems"
            >
              My Item
            </NavLink>
          ) : (
            ""
          )}
          {user ? (
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "link")}
              to="/additems"
            >
              Add Items
            </NavLink>
          ) : (
            ""
          )}
          {user ? (
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "link")}
              to="/manageItems"
            >
              Manage Itmes
            </NavLink>
          ) : (
            ""
          )}

          {user ? (
            <button className="singupBtn" onClick={() => signOut(auth)}>
              Log Out
            </button>
          ) : (
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "link")}
              to="/login"
            >
              LogIn
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
