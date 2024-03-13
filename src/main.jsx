import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// route imports:
import Root, { loader as rootLoader } from "./routes/root.jsx";
import ErrorPage from "./routes/errorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: "about",
        // element: <About />,
      },
      {
        path: "tech",
        // element: <Tech />,
      },
      {
        path: "projects",
        // element: <Projects />,
      },
      {
        path: "contact",
        // element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>
);
