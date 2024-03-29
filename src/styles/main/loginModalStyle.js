import Slider from "react-slick";
import styled from "styled-components";

export const ModalContainer = styled.div`
  width : 66rem;
  height : 46rem;
  background-color : ${props => props.theme.colors.colorAccent};
  display: flex;
  justify-content: center; 
  align-items: center; 
  box-shadow:  0 0 0.5rem 0.5rem ${props => props.theme.colors.colorShadow};

`
export const StyledSlider = styled(Slider) `
  width : 63rem;
  height : 43rem;
  background-color : ${props => props.theme.colors.colorBg};
  border-radius : 1.5rem;

  .slick-list {  //슬라이드 스크린
    display : flex;
    flex-direction: column;
    justify-content: space-between; 
    align-items: center;
    width : 63rem;
    height : 43rem;
    background-color : ${props => props.theme.colors.colorBg};
    borderRadius : 1.5rem;
  
    img {
      margin : 2rem 0 2rem 0;
    }
  }
  ::-webkit-scrollbar {
    display:none /* Chrome , Safari , Opera */
  }

  .slick-dots {  //슬라이드의 위치
    bottom: 20px;
    margin-top: 200px;
  }
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
`

export const SliderContainer = styled.div`
  display : flex;
  overflow : hidden;
`
export const Slide = styled.div`
  height : 45rem;
  padding : 2rem;
  background-color : ${props => props.theme.colors.colorBg};
  border-radius : 1.5rem;
  &::-webkit-scrollbar {
    display:none;
  }
`
export const SlideBox = styled.div`
  display : flex;
  flex-direction : column;
  align-items : center
  justify-content: center; 
  img {
    width: auto;
    height : 18rem;
  }

`

export const SlideTextBox = styled.div`
  width : 100%;  
  display : flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center; 
  text-align : center;
  word-break : keep-all;

  h2 {
    font-size : 2.4rem;
    font-family : 'WantedSans_SemiBold';
    margin : 0 0 1.5rem;
  }
  p {
    font-size : 1.75rem;
    font-family : 'WantedSans_Regular';
    letter-spacing : 0.05rem;
    line-height : 2.8rem;

    span {
      font-weight : bold;
      color : ${props => props.theme.colors.colorAccentDark}
    }
  }
  button {
    border : none;
    cursor : pointer;
    margin : 2rem  0 2rem 0;
    width : 20rem;
    height : 3.5rem;
    padding : 0.3rem 1.5rem 0.3rem 1.5rem;
    font-size : 1.5rem;
    font-family : 'WantedSans_Bold';
    border-radius : 2rem;
    background-color : ${props => props.theme.colors.colorAccent};
    color : ${props => props.theme.colors.colorBg};
  }

  &.lastStepContainer {
    height : 35rem;
    h2 {
      margin : 1.5rem 0 2.5rem 0;
    }
    p {
      margin : 1.5rem 0 0 0;
      
    }
  }
`
export const PrevBtn = styled.div`
  position: absolute;
  z-index: 3;
  top : 31rem;
  left : 5rem;
  img {
    width : 2rem;  
    height: 2rem;  
  }
`
export const NextBtn = styled.div`
  position: absolute;
  z-index: 3;
  top : 31rem;
  right : 5rem;
  img {
    width : 2rem;  
    height: 2rem;  
  }
`