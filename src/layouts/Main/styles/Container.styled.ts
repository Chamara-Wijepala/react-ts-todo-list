import styled from "styled-components";

interface Props {
  padding?: string;
  minHeight?: string;
}

const StyledContainer = styled.div<Props>`
  border-radius: 5px;
  background-color: ${({ theme }) => theme.bg_secondary};
  padding: ${({ padding }) => padding};
  min-height: ${({ minHeight }) => minHeight};
`;

export default StyledContainer;
