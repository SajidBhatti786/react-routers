import React from "react";
import { useParams } from "react-router-dom";
export default function Category() {
  const param = useParams();
  return <div>{param.category && <h1>category is: {param.category}</h1>}</div>;
}
