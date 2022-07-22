import { useState, Dispatch, ChangeEvent, FormEvent } from "react";
import { v4 as uuidv4 } from "uuid";

import StyledContainer from "../../assets/styles/Container.styled";
import StyledForm from "./styles/Form.styled";

import ITodo from "../../interfaces";

interface Props {
  setTodoList: Dispatch<React.SetStateAction<ITodo[]>>;
}

function Form({ setTodoList }: Props) {
  const [task, setTask] = useState("");

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value);
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
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
  };

  return (
    <StyledContainer>
      <StyledForm onSubmit={handleSubmit}>
        <div />
        <input
          id="input"
          type="text"
          placeholder="Create a new todo..."
          onChange={handleChange}
          value={task}
        />
      </StyledForm>
    </StyledContainer>
  );
}

export default Form;
