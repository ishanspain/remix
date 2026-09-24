import React from "react";
import { Link } from "react-router";

export default function blogs() {
  return (
    <div>
      <h1>This is blog page</h1>

      <Link to="/blog/1">Blog 1</Link>

      <h3>Click below to navigate home page</h3>
      <Link to="/">GO to HOme</Link>
    </div>
  );
}
