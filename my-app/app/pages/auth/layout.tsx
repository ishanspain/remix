import React from 'react'
import { Outlet } from 'react-router';
import type { Route } from "./+types/layout";
import { authMiddleware } from '~/middleware/authMiddleware';

export default function AuthLayout() {
  return (
    <div>
        <h1>This is authLayout</h1>
        <Outlet />
    </div>
  )
}

export const clientMiddleware: Route.ClientMiddlewareFunction[] = [
  authMiddleware,
];