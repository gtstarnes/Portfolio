import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import About from "../Pages/About";
import Home from "../Pages/Home";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            children: [
                {index: true, element: <Home />},
                {path: "about", element: <About />}
            ]
        }
    ])
  return <RouterProvider router={router} />;
}

export default Router