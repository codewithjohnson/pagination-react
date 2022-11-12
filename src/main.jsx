import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createHashRouter, RouterProvider } from "react-router-dom";

const Users = lazy(() => import("./pages/users/Users"));
const Contact = lazy(() => import("./pages/contactPage/Contact"));
const About = lazy(() => import("./pages/aboutPage/About"));
const ErrorPage = lazy(() => import("./pages/errorPage/ErrorPage"));

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/about",
        element: (
          <Suspense fallback={<span>About Loading</span>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<span>Contact Loading</span>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/users",
        element: (
          <Suspense fallback={<span>Users Loading</span>}>
            <Users />
          </Suspense>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
