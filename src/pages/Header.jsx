import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? storedValue : initialValue;
  });

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === key) {
        setValue(event.newValue);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [key]);

  return [value, setValue];
}

export default function Header() {
  const [loggedIn, setLoggedIn] = useLocalStorage("loggedIn", "false");
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.setItem("loggedIn", "false");
    setLoggedIn("false");
    navigate("/"); // Redirect to the home page after logout
  }

  return (
    <div>
      <header>
        <NavLink to="/" className="logo">
          #LOGO
        </NavLink>

        <nav>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "")}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "")}
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "")}
            to="/vans"
          >
            Vans
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "")}
            to="/host"
          >
            Host
          </NavLink>
          {loggedIn === "true" ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to="/login"
            >
              Login
            </NavLink>
          )}
        </nav>
      </header>
    </div>
  );
}
