import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Register from "./pages/Register"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Statistics from "./pages/Statistics"
import Ranking from "./pages/Ranking"
import Quiz from "./pages/Quiz"
import EndQuiz from "./pages/EndQuiz"
import AdminHome from "./pages/AdminHome"
import Contribute from "./pages/Contribute"
import Approve from "./pages/Approve"
import "./style.scss"

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/admin",
        element: <AdminHome />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/ranking",
        element: <Ranking />,
      },
      {
        path: "/quiz/:id",
        element: <Quiz />,
      },
      {
        path: "/endquiz",
        element: <EndQuiz />,
      },
      {
        path: "/contribute",
        element: <Contribute />,
      },
      {
        path: "/approve",
        element: <Approve />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/",
        element: <Login />,
      },
      ],
  },
  /*{
    path: "/friends",
    element: <Friends />,
  }, */
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
