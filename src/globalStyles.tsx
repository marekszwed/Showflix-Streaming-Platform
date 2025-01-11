import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

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

body {
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


