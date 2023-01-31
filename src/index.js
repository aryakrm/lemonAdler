import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import "./i18n.js";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

const AppRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />,
  },
];

const routers = createBrowserRouter(AppRoutes);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback="...loading">
      <RouterProvider router={routers}></RouterProvider>
    </Suspense>
  </React.StrictMode>
);
