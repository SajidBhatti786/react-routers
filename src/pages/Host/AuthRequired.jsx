import React, { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function AuthRequired() {
  const location = useLocation();

  const [loggedIn, setLoggedIn] = React.useState(
    localStorage.getItem("loggedIn") === "true"
  );
  console.log("loc", location);
  const user = location.state?.data;

  const navigate = useNavigate();

  useEffect(() => {
    console.log("useEffect");
    console.log("loggedIn", loggedIn);
    if (!loggedIn) {
      console.log("Redirecting to login");
      navigate("/login", {
        state: { message: "You must login first", from: location.pathname },
        replace: true,
      });
    }
  }, [loggedIn, navigate]);

  return loggedIn ? <Outlet /> : null;
}
