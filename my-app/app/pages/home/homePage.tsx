import { Form, Link, NavLink } from "react-router";
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
        <br />
        <NavLink to="/country" end>
          Country
        </NavLink>
        <br />
        {/* <NavLink to="/blogs">Blogs</NavLink> */}
        <NavLink to="/blogs">
          {({ isPending }) => <span>blogs {isPending && <p>Loading blogs via navlink</p>}</span>}
        </NavLink>
        <br />
        <NavLink to="/contact">Contact</NavLink>

        {/* form can be used to navigate too */}
        <Form action="/search">
          <input type="text" name="q" />
        </Form>
      </nav>
    </main>
  );
}
