import Media from "react-media";

import StyledBackgroundImage from "./styles/BackgroundImage.styled";

import bgDesktopLight from "../assets/images/bg-desktop-light.jpg";
import bgDesktopDark from "../assets/images/bg-desktop-dark.jpg";
import bgMobileLight from "../assets/images/bg-mobile-light.jpg";
import bgMobileDark from "../assets/images/bg-mobile-dark.jpg";

interface Props {
  theme: string;
}

function BackgroundImage({ theme }: Props) {
  return (
    <Media queries={{ mobile: "(max-width: 375px)" }}>
      {(matches) =>
        matches.mobile ? (
          <StyledBackgroundImage
            height="200px"
            img={theme === "light" ? bgMobileLight : bgMobileDark}
          />
        ) : (
          <StyledBackgroundImage
            height="300px"
            img={theme === "light" ? bgDesktopLight : bgDesktopDark}
          />
        )
      }
    </Media>
  );
}

export default BackgroundImage;
