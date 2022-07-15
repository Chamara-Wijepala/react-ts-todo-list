import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bg_main: string;
    bg_secondary: string;
    text_main: string;
    text_secondary: string;
    text_tertiary: string;
    text_hover: string;
  }
}
