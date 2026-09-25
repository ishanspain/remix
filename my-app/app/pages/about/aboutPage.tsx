import React from "react";
import { Link } from "react-router";
import type { Route } from "./+types/aboutPage";

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
      href: "./about.css",
    },
    {
      rel: "preload",
      href: "/images/banner.jpg",
      as: "image",
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
