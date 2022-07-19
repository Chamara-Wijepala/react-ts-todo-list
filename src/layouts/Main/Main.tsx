import { ChangeEvent, FormEvent, useState, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";

import Task from "./components/Task";
import Checkbox from "./components/Checkbox";

import StyledMain from "./styles/Main.styled";
import StyledContainer from "./styles/Container.styled";

import ITodo from "../../interfaces";

function Main() {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value);
  }

  // On form submit, create an item object and add it to todoList state if user
  // input is not empty
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (task !== "") {
      const item = {
        id: uuidv4(),
        task,
        status: false,
      };

      setTodoList((prevItems) => [...prevItems, item]);
      setTask("");
    }
  }

  // On checkbox toggle create new array with status value negated on item
  // whose id matches the id of the input
  const handleStatusChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { id } = event.target;

      const updatedList = todoList.map((item) => {
        if (item.id === id) {
          return { ...item, status: !item.status };
        }
        return item;
      });

      setTodoList(updatedList);
    },
    [todoList]
  );

  return (
    <StyledMain>
      <StyledContainer padding="1rem">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Create a new todo..."
            onChange={handleChange}
            value={task}
          />
        </form>
      </StyledContainer>

      <StyledContainer minHeight="320px">
        <div id="todo-list">
          {todoList.map((item) => (
            <div key={item.id}>
              <Checkbox
                id={item.id}
                status={item.status}
                handleStatusChange={handleStatusChange}
              />
              <Task task={item.task} status={item.status} />
            </div>
          ))}
        </div>

        <div id="button-list">
          <p>8 items left</p>
          <button type="button">Clear Completed</button>
        </div>
      </StyledContainer>

      <StyledContainer padding="1rem">
        <button type="button">All</button>
        <button type="button">Active</button>
        <button type="button">Completed</button>
      </StyledContainer>
    </StyledMain>
  );
}

export default Main;
