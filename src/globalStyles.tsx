import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: 'robotolight';
    src: url('/assets/fonts/roboto-light-webfont.woff2') format('woff2'),
         url('/assets/fonts/roboto-light-webfont.woff') format('woff');
    font-weight: 300;
    font-style: normal;
		font-display:swap;
}

@font-face {
    font-family: 'robotoregular';
    src: url('/assets/fonts/roboto-regular-webfont.woff2') format('woff2'),
         url('/assets/fonts/roboto-regular-webfont.woff') format('woff');
    font-weight: 400;
    font-style: normal;
		font-display:swap;
}

@font-face {
    font-family: 'robotobold';
    src: url('/assets/fonts/roboto-bold-webfont.woff2') format('woff2'),
         url('/assets/fonts/roboto-bold-webfont.woff') format('woff');
    font-weight: 700;
    font-style: normal;
		font-display: swap;
}

body, html {
  overflow-x: hidden;
}

body {
  margin: 0;
  padding: 0;
	font-family: 'robotoregular', sans-serif;
}

body::-webkit-scrollbar {
	display: none;
}

html {
  font-size: 62.5%;
}

button {
  cursor: pointer;
}

`;

export default GlobalStyles;
