import React, { useEffect } from "react";
import { Link } from "react-router";
import type { Route } from "./+types/blogs";

export default function blogs() {
  useEffect(() => {
    console.log("logged from blogs page");
  });

  return (
    <div>
      <h1>This is blog page</h1>

      <Link to="/blog/1">Blog 1</Link>
      <Link to="/blog/2">Blog 2</Link>
      <Link to="/blog/3">Blog 3</Link>

      <h3>Click below to navigate home page</h3>
      <Link to="/">GO to HOme</Link>
    </div>
  );
}


  const blogsMiddleware: Route.ClientMiddlewareFunction = async (
  { request , context},
  next,
) => {
  const startedAt = performance.now();

 /*  console.log(
    `${new Date().toISOString()} ${request.method} ${request.url}`,
  ); */

  console.log("blogs context in middleare", context)

  try {
    await next();
  } finally {
    const duration = performance.now() - startedAt;

    console.log(
      `${new Date().toISOString()} completed in ${duration.toFixed(2)}ms`,
    );
  }
};

export const clientMiddleware: Route.ClientMiddlewareFunction[] = [
  blogsMiddleware,
];