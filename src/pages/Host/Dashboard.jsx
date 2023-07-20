import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function Dashboard() {
  const storedData = localStorage.getItem("userData");

  // Parse the JSON string back to the original object form
  const retrievedData = JSON.parse(storedData);
  console.log("dash", retrievedData);
  return (
    <>
      <section className="host-dashboard-earnings">
        <div className="info">
          <h1>Welcome! {retrievedData != null && retrievedData.firstName}</h1>
          <p>
            Income last <span>30 days</span>
          </p>
          <h2>$2,260</h2>
        </div>
        <Link to="income">Details</Link>
      </section>
      <section className="host-dashboard-reviews">
        <h2>Review score</h2>

        <FontAwesomeIcon icon={faStar} className="star" />

        <p>
          <span>5.0</span>/5
        </p>
        <Link to="reviews">Details</Link>
      </section>
      <section className="host-dashboard-vans">
        <div className="top">
          <h2>Your listed vans</h2>
          <Link to="vans">View all</Link>
        </div>
      </section>
    </>
  );
}
