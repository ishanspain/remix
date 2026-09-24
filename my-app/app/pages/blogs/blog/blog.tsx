import React, { useEffect } from "react";
import type { Route } from "./+types/blog";
import { Link } from "react-router";

export default function blog({ params }: Route.ComponentProps) {
  useEffect(() => {
    console.log("Received param in blog", params);
  }, []);

  return (
    <div>
      <h1>Single blog</h1>

      <h3>Commments test</h3>
      <Link to="/blog/1/one">comment 1</Link>
      <Link to="/blog/1/two">comment 2</Link>

      <Link to="/blogs">GO back to blogs</Link>
    </div>
  );
}
