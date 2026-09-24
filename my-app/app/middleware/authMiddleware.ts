import {
  redirect,
  type DataStrategyResult,
  type MiddlewareFunction,
} from "react-router";

type ClientMiddleware = MiddlewareFunction<
  Record<string, DataStrategyResult>
>;

export const authMiddleware: ClientMiddleware = async () => {
  const isLoggedIn = true; 

 /*  if (!isLoggedIn) {
    throw redirect("/login");
  } */

  if (isLoggedIn) {
    throw redirect("/");
  }

  // Navigation continues automatically
};