import React from "react";
import { Link } from "react-router-dom";
export default function NotFount() {
  return (
    <div>
      <h1>Page You were looking for not found</h1>
      <Link to="/">&larr;Back to Home</Link>
    </div>
  );
}
