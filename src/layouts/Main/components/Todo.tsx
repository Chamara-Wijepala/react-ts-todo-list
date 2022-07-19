import { StyledTask, StyledTaskComplete } from "../styles/Task.styled";

import ITodo from "../../../interfaces";

function Todo({ id, task, status }: ITodo) {
  return (
    <div id={id}>
      {status ? (
        <StyledTaskComplete>{task}</StyledTaskComplete>
      ) : (
        <StyledTask>{task}</StyledTask>
      )}
    </div>
  );
}

export default Todo;
