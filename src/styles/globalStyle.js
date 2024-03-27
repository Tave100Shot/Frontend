import {createGlobalStyle} from "styled-components";
import Audiowide from '../assets/fonts/Audiowide-Regular.woff'
import BlackHanSans from '../assets/fonts/BlackHanSans-Regular.woff'
import BMHANNAPROOTF from '../assets/fonts/BMHANNAPROOTF.woff'
import Poppins_Bold from '../assets/fonts/Poppins-Bold.woff'
import Poppins_Light from '../assets/fonts/Poppins-Light.woff'
import Poppins_Medium from '../assets/fonts/Poppins-Medium.woff'
import Poppins_Regular from '../assets/fonts/Poppins-Regular.woff'
import Poppins_SemiBold from '../assets/fonts/Poppins-SemiBold.woff'
import WantedSans_Black from '../assets/fonts/WantedSans-Black.woff2'
import WantedSans_Bold from '../assets/fonts/WantedSans-Bold.woff2'
import WantedSans_ExtraBlack from '../assets/fonts/WantedSans-ExtraBlack.woff2'
import WantedSans_ExtraBold from '../assets/fonts/WantedSans-ExtraBold.woff2'
import WantedSans_Medium from '../assets/fonts/WantedSans-Medium.woff2'
import WantedSans_Regular from '../assets/fonts/WantedSans-Regular.woff2'
import WantedSans_SemiBold from '../assets/fonts/WantedSans-SemiBold.woff2'

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
@font-face {
  font-family: "WantedSans_Black";
  src: url(${WantedSans_Black}) format("woff2"),
}
@font-face {
  font-family: "WantedSans_Bold";
  src: url(${WantedSans_Bold}) format("woff2"),
}
@font-face {
  font-family: "WantedSans_ExtraBlack";
  src: url(${WantedSans_ExtraBlack}) format("woff2"),
}
@font-face {
  font-family: "WantedSans_ExtraBold";
  src: url(${WantedSans_ExtraBold}) format("woff2"),
}
@font-face {
  font-family: "WantedSans_Medium";
  src: url(${WantedSans_Medium}) format("woff2"),
}
@font-face {
  font-family: "WantedSans_Regular";
  src: url(${WantedSans_Regular}) format("woff2"),
}
@font-face {
  font-family: "WantedSans_SemiBold";
  src: url(${WantedSans_SemiBold}) format("woff2"),
}

*, *::before, *::after {
  margin : 0;
  padding : 0;
  box-sizing : border-box;

}
@media (min-width: 1180px) {
  html {
    font-size : 62.5% // 1rem = 10px
  }
}
@media (min-width: 1050px) and (max-width: 1180px) {
  html {
    font-size : 58.5% // 1rem =  7.25px
  }
}
@media (min-width: 920px) and (max-width: 1050px) {
  html {
    font-size : 50.5% 
  }
}
@media (min-width: 840px) and (max-width: 920px) {
  html {
    font-size : 45.5% 
  }
}
@media (min-width: 740px) and (max-width: 840px) {
  html {
    font-size : 40.5% 
  }
}
@media (max-width: 740px) {
  html {
    font-size : 62.5%;
  }
}



body {
  font-family : 'Poppins_Regular';
	display: flex;
  margin : auto;
  background : ${props => props.theme.colors.colorBg};
  color : ${props => props.theme.colors.colorMain};
  list-style : none;
  height : 100vh;
  justify-content: center;
}
`;

export default GlobalStyle;