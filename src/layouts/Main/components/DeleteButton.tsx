import { MouseEvent } from "react";

import StyledDeleteButton from "../styles/DeleteButton.styled";
import CrossIcon from "../../../assets/icons/icon-cross.svg";

interface Props {
  id: string;
  deleteTask: (event: MouseEvent<HTMLButtonElement>) => void;
}

function DeleteButton({ id, deleteTask }: Props) {
  return (
    <StyledDeleteButton type="button" onClick={deleteTask}>
      <img id={id} src={CrossIcon} alt="Delete Task" />
    </StyledDeleteButton>
  );
}

export default DeleteButton;
