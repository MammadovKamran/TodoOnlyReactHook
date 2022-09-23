import React, { useState } from "react";
import { Button, Input } from "reactstrap";

const Todo = ({ addTodo }) => {
  const [todo, setTodo] = useState("");

  return (
    <div className="d-flex justify-content-center mt-2">
      <Input
        id="input"
        placeholder="Todo"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      ></Input>
      <Button
        onClick={() => {
          addTodo(todo);
          setTodo("");
        }}
        color="primary"
      >
        Add
      </Button>
    </div>
  );
};

export default Todo;
