import { ChangeEvent } from "react";

interface Props {
  id: string;
  handleStatusChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function Checkbox({ id, handleStatusChange }: Props) {
  return <input type="checkbox" id={id} onChange={handleStatusChange} />;
}

export default Checkbox;
