import App from "./App.jsx";
import Pageshop from "./pageshop.jsx";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Guild from "./Page/Dashboard/Guild.jsx";
import Home from "./home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "shop",
    element: <Pageshop />,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "dashboard/:id",
    element: <Guild />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
