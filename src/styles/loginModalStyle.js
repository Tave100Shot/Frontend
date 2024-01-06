import Slider from "react-slick";
import styled from "styled-components";

export const ModalContainer = styled.div`
  width : 70rem;
  height : 50rem;
  background-color : ${props => props.theme.colors.colorAccent};
  display: flex;
  justify-content: center; 
  align-items: center; 
`
export const StyledSlider = styled(Slider) `
  width : 65rem;
  height : 45rem;
  background-color : ${props => props.theme.colors.colorBg};
  border-radius : 1.5rem;

  .slick-list {  //슬라이드 스크린
    display : flex;
    flex-direction: column;
    justify-content: space-between; 
    align-items: center;
    width : 65rem;
    height : 45rem;
    background-color : ${props => props.theme.colors.colorBg};
  
    img {
      margin : 2rem 0 2rem 0;
    }
  }
  =::-webkit-scrollbar {
    display:none /* Chrome , Safari , Opera */
  }

  .slick-slide div { //슬라이더  컨텐츠
    /* cursor: pointer; */
  }

  .slick-dots {  //슬라이드의 위치
    bottom: 20px;
    margin-top: 200px;
  }
`

export const SliderContainer = styled.div`
  display : flex;
  overflow : hidden;
  // width : 65rem;
  // height : 45rem;
  // margin : 2rem;
  // padding : 2rem;
  // background-color : ${props => props.theme.colors.colorBg};
  // border-radius : 1.5rem;
`
export const Slide = styled.div`
  display : flex;
  flex-direction: column;
  width : 65rem;
  height : 45rem;
  justify-content: space-between; 
  align-items: center;
  padding : 2rem;
  background-color : ${props => props.theme.colors.colorBg};
  border-radius : 1.5rem;
  &::-webkit-scrollbar {
    display:none /* Chrome , Safari , Opera */
  }
  img {
    margin : 2rem 0 2rem 0;
    &.step2 {
      height : 18rem;
    }
    &.step3 {
      height : 13rem;
    }
  }

`

export const SlideItemBox = styled.div`
  width : 61rem;
  // height : 30rem;
  display : flex;
  justify-content: center; 
  align-items: center;

  button {
    width : 4rem;
    height : 4rem;
    background-color : ${props => props.theme.colors.colorBg};
    border : none;
    cursor : pointer;

    img {
      margin : 0;
      width : 4rem;
      height : 4rem;
    }
  }

`
export const SlideTextBox = styled.div`
  width : 45rem;
  padding : 0 2rem;
  display : flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center; 
  text-align : center;

  h2 {
    font-size : 2.4rem;
    font-family : 'Poppins_SemiBold';
    margin : 0 0 1.5rem;
    &.lastStep {
      margin : 1.5rem 0 2.5rem 0;
    }
  }
  p {
    font-size : 1.8rem;
    font-family : 'Poppins_Medium';

    span {
      font-weight : bold;
      color : ${props => props.theme.colors.colorAccent}
    }
    &.lastStep {
      margin : 1.5rem 0 0 0;
    }
  }
  button {
    margin : 2rem  0 2rem 0;
    width : 20rem;
    height : 3.5rem;
    padding : 0.3rem 1.5rem 0.3rem 1.5rem;
    font-size : 1.5rem;
    font-family : 'Poppins_SemiBold';
    border-radius : 2rem;
    background-color : ${props => props.theme.colors.colorAccent};
    color : ${props => props.theme.colors.colorBg};
  }
`

