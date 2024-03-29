import styled from "styled-components";

export const MainButton = styled.button`
  display: flex;
  align-items: center;
  justify-content : center;

  width : 28rem;
  height : 5.5rem;
  position : relative;
  border : none;
  border-radius : 1.5rem;
  
  font-size : 2rem;
  font-family : 'Poppins_Regular';
  background-color :${props => props.theme.colors.colorAccent};
  box-shadow : 0.5rem 0.56rem 1rem ${props => props.theme.colors.colorShadow}
  letter-spacing : .2rem;
  img {
    width : 2.5rem;
    margin : 0 1.5rem 0.4rem 0;
  }
  cursor : pointer;

  // AltButton 전용 CSS
  .hoverAfter {
    display :none;
  }

  &.bojUpdateBtn:hover {
    background-color : ${props => props.theme.colors.colorAccentReverse};
    .hoverBefore {display : none;}
    .hoverAfter {display :block;}
  }
  
  // GO BACK Button 전용 CSS
  &.colorChange {
    background-color : ${props => props.theme.colors.colorAccentReverse};
  }
`