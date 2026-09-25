import React, { useEffect } from "react";
import { Link, NavLink, useNavigation } from "react-router";
import type { Route } from "./+types/blogs";

export function meta({}: Route.MetaArgs) {
  return [{ title: "blogs" }, { name: "description", content: "blogs" }];
}

export default function blogs() {
  const navigation = useNavigation();
  const loadingBlog =
    navigation.state === "loading" &&
    navigation.location?.pathname.startsWith("/blog/");

  useEffect(() => {
    console.log("logged from blogs page", navigation);
  });

  return (
    <div>
      <h1>This is blog page</h1>

      {loadingBlog && <p>Loading selected blog...</p>}

      <Link to="/blog/1">Blog 1</Link>
      <Link to="/blog/2">Blog 2</Link>
      <Link to="/blog/3">Blog 3</Link>

      <h3>Click below to navigate home page</h3>
      <NavLink to="/" end>
        Home
      </NavLink>
    </div>
  );
}

const blogsMiddleware: Route.ClientMiddlewareFunction = async (
  { request, context },
  next,
) => {
  console.log("blogs context in middleare", context);
  await new Promise<void>((resolve) => {
    setTimeout(resolve, 3000);
  });
  
  try {
    await next();
  } finally {
    console.log(`blogs middleware ${new Date().toISOString()} completed`);
  }
};

export const clientMiddleware: Route.ClientMiddlewareFunction[] = [
  blogsMiddleware,
];
