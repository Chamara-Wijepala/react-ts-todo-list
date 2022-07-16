import styled from "styled-components";

export const StyledContainer = styled.div`
  border-radius: 5px;
  background-color: ${({ theme }) => theme.bg_secondary};
`;

export const StyledContainerWithPadding = styled(StyledContainer)`
  padding: 1rem;
`;
