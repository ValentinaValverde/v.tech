import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// route imports:
import Root, { loader as rootLoader } from "./routes/root.jsx";
import ErrorPage from "./routes/errorPage.jsx";
import ProjectsPage from "./routes/projects.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: "projects",
        element: <ProjectsPage />,
      },
      {
        path: "tech",
        // element: <Tech />,
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
