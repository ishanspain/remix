import { Link } from "react-router";

export default function HomePage() {
  return (
    <main>
      <h1>this is home pagek</h1>
      <Link to="/about">Go to About</Link>
    </main>
  );
}
