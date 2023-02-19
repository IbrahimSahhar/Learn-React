import Home from "./pages/Home";
import Langs from "./pages/Langs";
import TodoList from "./pages/TodoList";
import { useRoutes } from "react-router-dom";
import About from "./pages/About";
import Post from "./pages/Post";
import Posts from "./pages/Posts";
import Todo from "./pages/Todo";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Tasks from "./pages/Tasks";

function App() {
  const router = useRoutes([
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
      path: "Tasks",
      element: <Tasks />,
    },

    {
      path: "*",
      element: <h1>Page Not Found</h1>,
    },
  ]);
  return (
    <div className="App">
      <Header />
      {router}
      <Footer />
    </div>
  );
}

export default App;
