import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import About from "../Pages/About";
import Home from "../Pages/Home";
import Projects from "../Pages/Projects";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            children: [
                {index: true, element: <Home />},
                {path: "about", element: <About />},
                {path: "projects", element: <Projects />}
            ]
        }
    ])
  return <RouterProvider router={router} />;
}

export default Router