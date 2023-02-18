import Tasks from "./Components/Tasks";
import Counters from "./pages/Counters";
import Form from "./pages/Form";
import Home from "./pages/Home";
import Langs from "./pages/Langs";
import TodoList from "./pages/TodoList";
import { useRoutes, Navigate } from "react-router-dom";
import About from "./pages/About";
import Post from "./pages/Post";
import Posts from "./pages/Posts";
import Todo from "./pages/Todo";
import ProtectedRoute from "./Components/ProtectedRoute";
import PostsRedux from "./pages/PostsRedux";
import { useEffect, useState } from "react";
function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    token ? setIsAuthorized(true) : setIsAuthorized(false);
  }, [token]);

  const handelIsAuthorized = () => {
    setIsAuthorized(true);
  };
  const handelLogOut = () => {
    localStorage.removeItem("token");
    setIsAuthorized(false);
  };

  const router = useRoutes([
    {
      index: true,
      element: <Navigate to={"/Login"} />,
    },
    {
      path: "/Login",
      element: (
        <>
          {isAuthorized ? (
            <Navigate to="/dashboard" />
          ) : (
            <Form Method={handelIsAuthorized} />
          )}
        </>
      ),
    },
    {
      path: "/dashboard",
      element: (
        <ProtectedRoute isAuthorized={isAuthorized} logOut={handelLogOut} />
      ),
      children: [
        {
          index: true,
          element: <Home count={0} />,
        },
        {
          path: "About",
          element: <About />,
        },
        {
          path: "Langs",
          element: <Langs />,
        },

        {
          path: "TodoList",
          element: <TodoList />,
        },
        {
          path: "TodoList/:id",
          element: <Todo />,
        },

        {
          path: "Counters",
          element: <Counters />,
        },
        {
          path: "Posts",
          element: <Posts />,
        },
        {
          path: "Posts/:id",
          element: <Post />,
        },
        {
          path: "Tasks",
          element: <Tasks />,
        },
        {
          path: "PostsRedux",
          element: <PostsRedux />,
        },
        {
          path: "*",
          element: <h1>Page Not Found</h1>,
        },
      ],
    },
  ]);

  return <div className="App">{router}</div>;
}

export default App;
