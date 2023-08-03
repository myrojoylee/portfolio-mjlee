import ReactDOM from "react-dom/client";
// Todo: Bring in the appropriate imports
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
  // Todo: Define the accessible routes, and which components respond to which URL
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "aboutme",
        element: <AboutMe />,
        errorElement: <Error />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
        errorElement: <Error />,
      },
      {
        path: "contact",
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path: "resume",
        element: <Resume />,
        errorElement: <Error />,
      },
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
