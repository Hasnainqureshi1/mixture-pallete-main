 import { createGlobalStyle } from "styled-components";

const GlobalStyleSheet = createGlobalStyle`
  /* Declaring Fonts */
  @font-face {
    font-display: swap;
    font-style: normal;
    src: url("/public/fonts/RobotoRomanBold.ttf");
    font-family: "Roboto";
    font-weight: 700;
  }
  @font-face {
    font-display: swap;
    font-style: normal;
    src: url("/public/fonts/RobotoRegular.ttf");
    font-family: "Roboto";
    font-weight: 400;
  }
  @font-face {
    font-display: swap;
    font-style: normal;
    src: url("/public/fonts/PoppinsMedium.ttf");
    font-family: "Poppins";
    font-weight: 500;
  }
  @font-face {
    font-display: swap;
    font-style: normal;
    src: url("/public/fonts/InterRegular.ttf");
    font-family: "Inter";
    font-weight: 400;
  }
  @font-face {
    font-display: swap;
    font-style: normal;
    src: url("/public/fonts/InterSemiBold.ttf");
    font-family: "Inter";
    font-weight: 600;
  }
  @font-face {
    font-display: swap;
    font-style: normal;
    src: url("/public/fonts/ArchivoRegular.ttf");
    font-family: "Archivo";
    font-weight: 400;
  }
  @font-face {
    font-display: swap;
    font-style: normal;
    src: url("/public/fonts/OswaldBold.ttf");
    font-family: "Oswald";
    font-weight: 700;
  }
  @font-face {
    font-display: swap;
    font-style: normal;
    src: url("/public/fonts/OswaldSemiBold.ttf");
    font-family: "Oswald";
    font-weight: 600;
  }

  * {
    box-sizing: border-box;
    line-height: normal;
    font-family: inherit;
    margin: unset;
  }

  html {
    --indigo_A200: #4b0082;
    --indigo_A100: #7772ff;
    --blue_grey_500: #667085;
    --teal: #052c4d;

    --white-A700: #ffffff;
    --white-A700_3f: #ffffff3f;
    --white-A700-bf: #ffffffbf;
  }

  body {
    padding: 0;
    font-family: "Roboto";
    background-color: #f9fafb;
  }

  
  a {
    display: block;
  }

  ul {
    margin: 0;
    margin-inline: unset !important;
    padding: 0;
    list-style: none;
  }

  .ReactModal__Overlay {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    background: transparent;
  }
  
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: #6b6b6b;
    border-radius: 10px;
  }
`;

export default GlobalStyleSheet;
