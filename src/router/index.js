import Circle from "../Components/Circle";
import Posts from "../mock/Posts";
import About from "../pages/About";
import Counters from "../pages/Counters";
import Home from "../pages/Home";
import Langs from "../pages/Langs";
import Post from "../pages/Post";
import Tasks from "../pages/Tasks";
import Todo from "../pages/Todo";
import TodoList from "../pages/TodoList";

const router = [
  {
    index: true,
    element: <Home title="Home Page" />,
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
    path: "Posts",
    element: <Posts />,
  },
  {
    path: "Posts/:id",
    element: <Post />,
  },
  {
    path: "Counters",
    element: <Counters />,
  },
  {
    path: "Tasks",
    element: <Tasks />,
  },
  {
    path: "Circle",
    element: <Circle />,
  },

  {
    path: "*",
    element: <h1>Page Not Found</h1>,
  },
];
export default router;
