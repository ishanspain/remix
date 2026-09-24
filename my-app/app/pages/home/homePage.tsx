import { Link } from "react-router";
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
      <Link to="/about">Go to About</Link>
      <br />
      <Link to="/country">GO to country</Link>
       <br />
      <Link to="/blogs">GO to blogs</Link>
    </main>
  );
}
