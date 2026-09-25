import { Link, NavLink } from "react-router";
import type { Route } from "./+types/homePage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "my React Router web App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function HomePage() {
  return (
    <main>
      <h1>this is home page</h1>

      <nav>
        <NavLink to="/about" end>
          About
        </NavLink>
        <NavLink to="/country" end>
          Country
        </NavLink>
        <NavLink to="/blogs">Blogs</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </main>
  );
}
