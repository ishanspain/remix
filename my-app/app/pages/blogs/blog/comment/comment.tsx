import React, { useEffect } from "react";
import type { Route } from "./+types/comment";
import { Link } from "react-router";

export default function comment({ params }: Route.ComponentProps) {
  useEffect(() => {
    console.log("Received param in comment", params);
  }, []);

  return (
    <div>
      <h1>Single blog</h1>

      <Link to="/blogs">GO back to blogs</Link>
    </div>
  );
}
