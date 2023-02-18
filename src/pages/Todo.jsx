import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import Container from "../Components/Container";
import ListItem from "../Components/ListItem";
const Todo = () => {
  const [todo, setTodo] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => setTodo(response.data))
      .catch((err) => console.log(err))
      .finally(setIsLoading(false));
  }, [id]);

  return (
    <Container>
      <div className="todo">
        {isLoading ? "Loading ..." : <ListItem todo={todo} />}
        <button
          style={{ display: "block" }}
          onClick={() => navigate("/dashboard/TodoList")}
        >
          Back
        </button>
      </div>
    </Container>
  );
};

export default Todo;
