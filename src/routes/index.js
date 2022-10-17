import { createBrowserRouter } from "react-router-dom";
import Home from "pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // loader: rootLoader,
    children: [],
  },
]);

export default router;
