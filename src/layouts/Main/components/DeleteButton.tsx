import { MouseEvent } from "react";

import CrossIcon from "../../../assets/icons/icon-cross.svg";

interface Props {
  id: string;
  deleteTask: (event: MouseEvent<HTMLButtonElement>) => void;
}

function DeleteButton({ id, deleteTask }: Props) {
  return (
    <button type="button" onClick={deleteTask}>
      <img id={id} src={CrossIcon} alt="Delete Task" />
    </button>
  );
}

export default DeleteButton;
