import {
  ChangeEvent,
  MouseEvent,
  useState,
  useEffect,
  useCallback,
  Dispatch,
} from "react";
import Media from "react-media";

import Task from "./components/Task";
import Checkbox from "./components/Checkbox";
import DeleteButton from "./components/DeleteButton";
import FilterButtonList from "./components/FilterButtonList";
import StyledContainer from "../../assets/styles/Container.styled";
import StyledTodo from "./styles/Todo.styled";
import StyledButtonList from "./styles/ButtonList.styled";
import StyledButton from "../../assets/styles/Button.styled";

import ITodo from "../../interfaces";

interface Props {
  todoList: ITodo[];
  setTodoList: Dispatch<React.SetStateAction<ITodo[]>>;
}

function Main({ todoList, setTodoList }: Props) {
  const [listToRender, setListToRender] = useState(todoList);
  const [filter, setFilter] = useState("All");

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

  const changeFilter = useCallback((event: MouseEvent<HTMLDivElement>) => {
    const targetElement = event.target as HTMLElement;
    const { textContent } = targetElement;

    if (targetElement.nodeName === "BUTTON" && textContent) {
      setFilter(textContent);
    }
  }, []);

  // Filters todoList when user selects a filter
  useEffect(() => {
    let updatedList = todoList;

    if (filter === "Active") {
      updatedList = todoList.filter((item) => {
        return item.status === false;
      });
    } else if (filter === "Completed") {
      updatedList = todoList.filter((item) => {
        return item.status === true;
      });
    }

    setListToRender(updatedList);
  }, [filter, todoList]);

  const clearCompletedTasks = useCallback(() => {
    const updatedList = todoList.filter((item) => {
      return item.status === false;
    });

    setTodoList(updatedList);
  }, [todoList]);

  return (
    <>
      <StyledContainer>
        <div>
          {listToRender.map((item) => (
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
            {listToRender.length} {listToRender.length === 1 ? "item" : "items"}{" "}
            {listToRender.length > 0 && "left"}
          </p>

          <Media
            query="(min-width: 767px)"
            render={() => (
              <FilterButtonList filter={filter} changeFilter={changeFilter} />
            )}
          />

          <StyledButton type="button" onClick={clearCompletedTasks}>
            Clear Completed
          </StyledButton>
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
            <FilterButtonList filter={filter} changeFilter={changeFilter} />
          </StyledContainer>
        )}
      />
    </>
  );
}

export default Main;
