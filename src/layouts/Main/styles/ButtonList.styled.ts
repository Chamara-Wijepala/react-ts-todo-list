import styled from "styled-components";

const StyledButtonList = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    color: ${({ theme }) => theme.text_main};
  }
`;

export default StyledButtonList;
