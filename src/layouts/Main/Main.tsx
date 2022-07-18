import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import StyledMain from "./styles/Main.styled";
import StyledContainer from "./styles/Container.styled";

interface ITodo {
  id: string;
  task: string;
  status: boolean;
}

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

      <StyledContainer>
        <div id="todo-list">
          {todoList.map((item) => {
            return (
              <div id={item.id} key={item.id}>
                {item.task}
              </div>
            );
          })}
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
