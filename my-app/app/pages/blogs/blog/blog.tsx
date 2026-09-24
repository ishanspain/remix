import React, { useEffect, useState } from "react";
import type { Route } from "./+types/blog";
import { Link, redirect } from "react-router";
import { getBlog } from "~/apis/testApi";

export default function blog({ params }: Route.ComponentProps) {
  const { blogId } = params;

  const [blog, setblog] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await getBlog(Number(blogId));
        setblog(data);
      } catch (err) {
        console.log("err fetching post data", err);
      }
    })();
  }, []);

  return (
    <div>
      <h1>Single blog</h1>

      {blog ? (
        <div>
          {" "}
          <h2>{blog.id}</h2>
          <p>{blog.title}</p>
          <pre>{blog.body}</pre>
        </div>
      ) : (
        <p>Loading blogs...</p>
      )}

      <h3>Commments test</h3>
      <Link to="/blog/1/one">comment 1</Link>
      <br />
      <Link to="/blog/1/two">comment 2</Link>
      <br />
      <Link to="/blogs">GO back to blogs</Link>
    </div>
  );
}

const blogMiddleware: Route.ClientMiddlewareFunction = async (
  { request, params, context },
  next,
) => {
  console.log("blog params in middleare", params);
  const { blogId } = params;

  const id = Number(params.blogId);

  if (!Number.isInteger(id) || id <= 0) {
    throw redirect("/blogs");
  }
};

export const clientMiddleware: Route.ClientMiddlewareFunction[] = [
  blogMiddleware,
];
