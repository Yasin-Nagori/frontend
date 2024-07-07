import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/home page/Home";
import Login from "./pages/login page/Login";
import Signup from "./pages/signup page/Signup";
import ProtectedRoute from "./ProtectedRoute";
import LoadingPage from "./LoadingPage";
import Bookmarks from "./pages/bookmarks/Bookmarks";
import Explore from "./pages/explore/Explore";
import Lists from "./pages/lists/Lists";
import Messages from "./pages/messages/Messages";
import More from "./pages/more/More";
import Notification from "./pages/notification/Notification";
import Profile from "./pages/profile/Profile";
import Feed from "../src/pages/feed/Feed.jsx"
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      ),
      children: [
        <ProtectedRoute>
          <Feed />
        </ProtectedRoute>,
      ],
    },
    {
      path: "/home",
      element: (
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "pageloading",
          element: <LoadingPage />,
        },
        {
          path: "feed",
          element: <Feed />,
        },
        {
          path: "bookmarks",
          element: <Bookmarks />,
        },
        {
          path: "explore",
          element: <Explore />,
        },
        {
          path: "lists",
          element: <Lists />,
        },
        {
          path: "messsages",
          element: <Messages />,
        },
        {
          path: "more",
          element: <More />,
        },
        {
          path: "notification",
          element: <Notification />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);
  return (
    <>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
