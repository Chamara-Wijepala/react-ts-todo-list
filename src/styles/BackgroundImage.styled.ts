import styled from "styled-components";

interface Props {
  img: string;
}

const StyledBackgroundImage = styled.div<Props>`
  width: 100%;
  height: 300px;
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

export default StyledBackgroundImage;
