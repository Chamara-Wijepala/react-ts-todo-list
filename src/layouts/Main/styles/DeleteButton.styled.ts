import styled from "styled-components";

import StyledButton from "../../../assets/styles/Button.styled";

const StyledDeleteButton = styled(StyledButton)`
  color: ${({ theme }) => theme.text_main};
  margin-left: auto;
`;

export default StyledDeleteButton;
