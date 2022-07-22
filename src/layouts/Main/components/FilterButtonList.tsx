import { MouseEvent, Dispatch, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";

import StyledFilterButtonList from "../styles/FilterButtonList";
import StyledButton from "../../../assets/styles/Button.styled";

interface Props {
  filter: string;
  setFilter: Dispatch<React.SetStateAction<string>>;
}

const buttons = ["All", "Active", "Completed"];

function FilterButtonList({ filter, setFilter }: Props) {
  const changeFilter = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      const { textContent } = event.target as HTMLElement;

      if (textContent) {
        setFilter(textContent);
      }
    },
    [setFilter]
  );

  return (
    <StyledFilterButtonList onClick={changeFilter}>
      {buttons.map((button) =>
        button === filter ? (
          <StyledButton key={uuidv4()} type="button" className="Selected">
            {button}
          </StyledButton>
        ) : (
          <StyledButton key={uuidv4()} type="button">
            {button}
          </StyledButton>
        )
      )}
    </StyledFilterButtonList>
  );
}

export default FilterButtonList;
