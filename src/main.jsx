import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Pages/Home/Home.jsx";
import Post from "./Pages/PostDetails/Post/Post.jsx";
import About from "./Pages/About/About.jsx";
import Contact from "./Pages/Contact/Conatct.jsx";
import PostData from "./Pages/PostDetails/PostData/PostData.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: "/home", Component: Home },
      { path: "/post", Component: Post },
      { path: "/about", Component: About },
      { path: "/contact", Component: Contact },
      { path: "/post/:postId", Component: PostData },
      { path: "*", Component: <h2>404 Not Found</h2> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
