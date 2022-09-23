import React, { useState } from "react";
import AddTodo from "./AddTodo";
import { Badge, Button, Container, ListGroup, ListGroupItem } from "reactstrap";
import { nanoid } from "nanoid";
import FindTodo from "./FindTodo";

const App = () => {
  const [todoData, setTodoData] = useState([]);
  const [findedTodo, setFindedTodo] = useState([]);
  {
    /* //? ADD TODO */
  }

  const addTodo = (paramsAddedTodo) => {
    if (paramsAddedTodo) {
      todoData.push({ todo: paramsAddedTodo, id: nanoid() });
      const copy = [...todoData];
      setTodoData(copy);
      console.log(todoData);
    } else {
      console.log("todo daxil edin");
    }
  };
  {
    /* //? DELETE TODO */
  }

  const deleteData = (paramsDeleteData) => {
    const copyTodos = [...todoData];

    copyTodos.map((element) => {
      if (element.id === paramsDeleteData.id) {
        const indexElement = copyTodos.indexOf(paramsDeleteData);
        copyTodos.splice(indexElement, 1);
        setTodoData(copyTodos);
      }
    });
    console.log(todoData);
  };
  {
    /* //? FIND TODO */
  }

  // const findTodo = (paramsFindedTodo) => {
  //   const findedData = paramsFindedTodo.trim().toLowerCase();
  //   console.log("1");
  //   todoData.map((element) => {
  //     console.log("2");

  //     let todoItem = element.todo.trim().toLowerCase();
  //     if (todoItem.indexOf(findedData) === -1) {
  //       console.log("3err");

  //     } else {
  //       console.log("4");

  //       console.log(todoItem);
  //     }
  //   });
  // };

  return (
    <div>
      <Container>
        <div className="d-flex flex-column  align-items-center mt-5">
          <Badge className="w-25 " color="danger">
            <h2>TodoList</h2>
          </Badge>
          {/* <FindTodo findTodo={findTodo} /> */}
          <div></div>
        </div>

        <div className="mt-5">
          {/* //! Components */}

          <AddTodo addTodo={addTodo} />

          {/* //! Components */}
          <ListGroup className="mt-5">
            {todoData.map((element) => {
              return (
                <div className="d-flex justify-content-center  mb-2" key={element.id}>
                  <ListGroupItem className="w-75 " color="primary">
                    {element.todo}
                  </ListGroupItem>
                  <Button
                    color="danger"
                    onClick={() => {
                      deleteData(element);
                    }}
                  >
                    Delete
                  </Button>
                </div>
              );
            })}
          </ListGroup>
        </div>
      </Container>
    </div>
  );
};

export default App;
