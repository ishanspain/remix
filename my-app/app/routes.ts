import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  index("pages/home/homePage.tsx"),
  route("about", "pages/about/aboutPage.tsx"),
  layout("./pages/auth/layout.tsx", [
    route("login", "./pages/auth/login.tsx"),
    route("register", "./pages/auth/register.tsx"),
  ]),
  route("country", "pages/country/Country.tsx"),
  route("blogs/", "./pages/blogs/blogs.tsx"),
  route("blog/:blogId", "./pages/blogs/blog/blog.tsx"),
  route("blog/:blogId/:commentId", "./pages/blogs/blog/comment/comment.tsx"),
  
] satisfies RouteConfig;
