import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import VanDetail from "../VanDetail";
import { useParams } from "react-router-dom";
function HostVansDetailsLayout() {
  const param = useParams();
  console.log(param);
  return (
    <>
      <VanDetail />
      <div>
        <NavLink
          end
          className={({ isActive }) => (isActive ? "active-link" : "")}
          to={`/host/vans/${param.id}`}
        >
          Detiails
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "")}
          to="photos"
        >
          Photos
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "")}
          to="pricing"
        >
          Pricing
        </NavLink>
      </div>
      <Outlet />
    </>
  );
}

export default HostVansDetailsLayout;
