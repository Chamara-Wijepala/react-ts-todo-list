import { StyledTask, StyledTaskComplete } from "../styles/Task.styled";

interface Props {
  task: string;
  status: boolean;
}

function Todo({ task, status }: Props) {
  return (
    <div>
      {status ? (
        <StyledTaskComplete>{task}</StyledTaskComplete>
      ) : (
        <StyledTask>{task}</StyledTask>
      )}
    </div>
  );
}

export default Todo;
