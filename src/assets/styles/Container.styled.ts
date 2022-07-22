import styled from "styled-components";

interface Props {
  padding?: string;
  display?: string;
  justifyContent?: string;
}

const StyledContainer = styled.div<Props>`
  border-radius: 5px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.bg_secondary};
  padding: ${({ padding }) => padding};
  display: ${({ display }) => display};
  justify-content: ${({ justifyContent }) => justifyContent};
`;

export default StyledContainer;
