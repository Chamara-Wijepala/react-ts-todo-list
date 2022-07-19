import { ChangeEvent } from "react";

import {
  CheckboxContainer,
  StyledCheckbox,
  StyledCheckboxActive,
} from "../styles/Checkbox.styled";

import checkIcon from "../../../assets/icons/icon-check.svg";

interface Props {
  id: string;
  status: boolean;
  handleStatusChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function Checkbox({ id, status, handleStatusChange }: Props) {
  return (
    <CheckboxContainer htmlFor={id}>
      <input
        type="checkbox"
        className="HiddenCheckbox"
        id={id}
        onChange={handleStatusChange}
      />
      {status ? (
        <StyledCheckboxActive aria-hidden="true">
          <img src={checkIcon} alt="" />
        </StyledCheckboxActive>
      ) : (
        <StyledCheckbox aria-hidden="true">
          <div />
        </StyledCheckbox>
      )}
    </CheckboxContainer>
  );
}

export default Checkbox;
