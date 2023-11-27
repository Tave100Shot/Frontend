import {createGlobalStyle} from "styled-components";
import Audiowide from '../assets/fonts/Audiowide-Regular.woff'
import BlackHanSans from '../assets/fonts/BlackHanSans-Regular.woff'
import BMHANNAPROOTF from '../assets/fonts/BMHANNAPROOTF.woff'
import Poppins_Bold from '../assets/fonts/Poppins-Bold.woff'
import Poppins_Light from '../assets/fonts/Poppins-Light.woff'
import Poppins_Medium from '../assets/fonts/Poppins-Medium.woff'
import Poppins_Regular from '../assets/fonts/Poppins-Regular.woff'
import Poppins_SemiBold from '../assets/fonts/Poppins-SemiBold.woff'

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: "Audiowide";
  src: url(${Audiowide}) format("woff"),
}
@font-face {
  font-family: "BlackHanSans";
  src: url(${BlackHanSans}) format("woff"),
}
@font-face {
  font-family: "BMHANNAPROOTF";
  src: url(${BMHANNAPROOTF}) format("woff"),
}
@font-face {
  font-family: "Poppins_Light";
  src: url(${Poppins_Light}) format("woff"),
}
@font-face {
  font-family: "Poppins_Regular";
  src: url(${Poppins_Regular}) format("woff"),
}
@font-face {
  font-family: "Poppins_Medium";
  src: url(${Poppins_Medium}) format("woff"),
}
@font-face {
  font-family: "Poppins_SemiBold";
  src: url(${Poppins_SemiBold}) format("woff"),
}
@font-face {
  font-family: "Poppins_Bold";
  src: url(${Poppins_Bold}) format("woff"),
}

*, *::before, *::after {
  margin : 0;
  padding : 0;
  box-sizing : border-box;

}

html {
  font-size : 62.5% // 1rem = 10px
}

body {
  font-family : 'Poppins_Regular';
  min-width : 320px;
	display: flex;
  margin : auto;
	justify-content: center;
	align-items: center;
	flex-direction: column;
  background : #ffffff;
  list-style : none;
  height : 100vh;
}
`;

export default GlobalStyle;