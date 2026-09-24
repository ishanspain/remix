import React, { useEffect } from "react";
import type { Route } from "./+types/blog";
import { Link } from "react-router";

export default function blog({ param }) {
  useEffect(() => {
    console.log("Received param", param);
  }, []);

  return (
    <div>
      <h1>Single blog</h1>

      <Link to="/blogs">GO back to blogs</Link>
    </div>
  );
}
