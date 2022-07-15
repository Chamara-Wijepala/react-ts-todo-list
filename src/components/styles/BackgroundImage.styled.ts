import styled from "styled-components";

interface Props {
  height: string;
  img: string;
}

const StyledBackgroundImage = styled.div<Props>`
  width: 100%;
  height: ${({ height }) => height};
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

export default StyledBackgroundImage;
