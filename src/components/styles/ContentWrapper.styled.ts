import styled from "styled-components";

const StyledContentWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  padding: 4.5rem 0;
  width: clamp(300px, 80%, 640px);
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export default StyledContentWrapper;
