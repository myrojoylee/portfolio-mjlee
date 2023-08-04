import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Bringing in the pages the router will use to conditionally show the appropriate views
import App from "./App";
import Error from "./pages/Error";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <AboutMe />,
      },
      {
        path: "/aboutme",
        element: <AboutMe />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
