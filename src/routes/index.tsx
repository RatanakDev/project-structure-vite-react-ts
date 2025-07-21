import { useRoutes, Navigate } from "react-router-dom"

import Dashboard from "@/pages/Dashboard/Dashboard"
import Page404 from "@/pages/Page404/NotFound"
import Layout from "@/layouts/layout"

export default function AppRoutes() {
  const Content = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Navigate to="/dashboard" /> },
        { path: "dashboard", element: <Dashboard /> },
        { path: "*", element: <Page404 /> },
      ],
    },
  ])
  return Content
}
