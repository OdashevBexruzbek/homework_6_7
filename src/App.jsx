import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

// layouts
import MainLayouts from "./layout/MainLayouts";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element:  <MainLayouts />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/product/:id",
          element: <Product />,
        },
      ],
    },
    {
      path: "/login",
      element: true ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/register",
      element: true ? <Navigate to="/" /> : <Register />,
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
