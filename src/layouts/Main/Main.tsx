import {
  ChangeEvent,
  FormEvent,
  MouseEvent,
  useState,
  useCallback,
} from "react";
import { v4 as uuidv4 } from "uuid";
import Media from "react-media";

import Task from "./components/Task";
import Checkbox from "./components/Checkbox";
import DeleteButton from "./components/DeleteButton";
import StyledMain from "./styles/Main.styled";
import StyledContainer from "./styles/Container.styled";
import StyledTodo from "./styles/Todo.styled";
import StyledButtonList from "./styles/ButtonList.styled";
import StyledFilterButtonList from "./styles/FilterButtonList";
import StyledButton from "../../assets/styles/Button.styled";
import ITodo from "../../interfaces";

function Main() {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value);
  }

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

  const deleteTask = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      const { id } = event.target as HTMLElement;

      const updatedList = todoList.filter((item) => {
        return !(item.id === id);
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

      <StyledContainer>
        <div>
          {todoList.map((item) => (
            <StyledTodo key={item.id}>
              <Checkbox
                id={item.id}
                status={item.status}
                handleStatusChange={handleStatusChange}
              />
              <Task task={item.task} status={item.status} />
              <DeleteButton id={item.id} deleteTask={deleteTask} />
            </StyledTodo>
          ))}
        </div>

        <StyledButtonList>
          <p>
            {todoList.length} {todoList.length === 1 ? "item" : "items"}{" "}
            {todoList.length > 0 && "left"}
          </p>
          <Media
            query="(min-width: 767px)"
            render={() => (
              <StyledFilterButtonList>
                <StyledButton type="button">All</StyledButton>
                <StyledButton type="button">Active</StyledButton>
                <StyledButton type="button">Completed</StyledButton>
              </StyledFilterButtonList>
            )}
          />

          <StyledButton type="button">Clear Completed</StyledButton>
        </StyledButtonList>
      </StyledContainer>

      <Media
        query="(max-width: 767px)"
        render={() => (
          <StyledContainer
            padding="1rem"
            display="flex"
            justifyContent="center"
          >
            <StyledFilterButtonList>
              <StyledButton type="button">All</StyledButton>
              <StyledButton type="button">Active</StyledButton>
              <StyledButton type="button">Completed</StyledButton>
            </StyledFilterButtonList>
          </StyledContainer>
        )}
      />
    </StyledMain>
  );
}

export default Main;
