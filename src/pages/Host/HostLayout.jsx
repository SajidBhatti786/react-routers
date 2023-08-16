import React from "react";
import { NavLink, Outlet, Navigate } from "react-router-dom";
import "../index.css";

export default function HostLayout() {
  return (
    <>
      
      <nav>
        <NavLink
          end
          className={({ isActive }) => (isActive ? "active-link" : "")}
          to="/host"
        >
          Dashboard
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "")}
          to="/host/income"
        >
          Income
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "")}
          to="/host/reviews"
        >
          Reviews
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "")}
          to="/host/vans"
        >
          Vans
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
