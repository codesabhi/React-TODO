import React, { useContext, useState } from "react";
import {
  FormGroup,
  Button,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";
import { v4 } from "uuid";
import { TodoContext } from "../Context/TodoContext";
import { ADD_TODO } from "../Context/action.types";

export default function TodoForm() {
  const [todoString, setTodoString] = useState("");
  const { dispatch } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoString === "") {
      return alert("plese enter your todo");
    }
    const todo = {
      todoString,
      id: v4(),
    };
    dispatch({
      type: ADD_TODO,
      payload: todo,
    });
    setTodoString("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="your next todo"
            value={todoString}
            onChange={(e) => setTodoString(e.target.value)}
          />
          <InputGroupAddon addonType="prepend">
            <Button color="warning">Add</Button>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
    </Form>
  );
}
