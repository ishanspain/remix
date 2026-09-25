import React from "react";
import { Link } from "react-router";
import type { Route } from "./+types/aboutPage";
import aboutStylesheet from "./about.css?url";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About" },
    { name: "description", content: "About this application" },
  ];
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: aboutStylesheet,
    },
  ];
}

export default function AboutPage() {
  return (
    <main>
      <div>this is About page</div>
      <Link to="/">Go to Home</Link>
    </main>
  );
}
